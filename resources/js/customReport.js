function setInputFilter(inputElement, inputFilter, data, isNumericFilter = false, valueObjects = null, outputElement = null) {

    ["input", "keydown", "keyup", "contextmenu", "drop"].forEach(function(event) {
        inputElement.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }

            // separate this part into autocomplete() function with args:
            if (isNumericFilter && /^[1-9][0-9]{0,10}$/.test(this.value)) {
                autocomplete(inputElement, data, outputElement, valueObjects);
            } else {
                autocomplete(inputElement, data);
            }
        });
    });
}

/*
 * Validates Colon-Hexadecimal notation
 * Format: 0A:1d:9c:58:7e:F4
 */
function isValidMacColonHexadecimalNotationFormat(value) {
    // <-- ORIGINAL
    //    return /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/.test(value);

    return (/^([0-9a-fA-F][0-9a-fA-F]:){1,5}([0-9a-fA-F]{0,2})$/.test(value))
        || (/^([0-9a-fA-F]{1,2})$/.test(value))
        || (/^$/.test(value))
}

/*
 * Validates Hypen-Hexadecimal notation
 * Format: 0A-1d-9c-58-7e-F4
 */
function isValidMacHypenHexadecimalNotationFormat(value) {
    return (/^([0-9a-fA-F][0-9a-fA-F]-){1,5}([0-9a-fA-F]{0,2})$/.test(value))
        || (/^([0-9a-fA-F]{1,2})$/.test(value))
        || (/^$/.test(value))
}

/*
 * Validates Period-separated hexadecimal notation
 * Format: 0A1.d9c.587.eF4
 */
function isValidMacPeriodSeparatedHexadecimalNotationFormat(value) {
    return (/^([0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]\.){1,3}([0-9a-fA-F]{0,3})$/.test(value))
        || (/^([0-9a-fA-F]{1,3})$/.test(value))
        || (/^$/.test(value))
}

function isValidMacAddress(value) {

    return (
        isValidMacColonHexadecimalNotationFormat(value)
        || isValidMacHypenHexadecimalNotationFormat(value)
        || isValidMacPeriodSeparatedHexadecimalNotationFormat(value)
    );
}

function autocomplete(inputElement, data, outputElement = null, valueObjects = null) {
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    var a, b, i, val = inputElement.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", inputElement.id + "Autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    inputElement.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < data.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (data[i].value.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + data[i].value.substr(0, val.length) + "</strong>";
            b.innerHTML += data[i].value.substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + data[i].value +"'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                let inputValue;

                inputElement.value = inputValue = this.getElementsByTagName("input")[0].value;

                if(outputElement !== null) {
                    valueObjects.map(valueObject => {
                        if(valueObject.contractId.toString() === inputValue.toString()) {
                            outputElement.value = valueObject.macAddress.value;
                            inputElement.parentNode.parentNode.elements.macAddressId.value = valueObject.macAddress.id
                        }
                        outputElement.value = valueObject.contractId.toString() === inputValue.toString() ? valueObject.macAddress.value : outputElement.value
                    });
                } else {
                    data.map(macObject => {
                        inputElement.parentNode.parentNode.elements.macAddressId.value = macObject.value === inputValue ? macObject.macAddressId : inputElement.parentNode.parentNode.elements.macAddressId.value
                    });
                }

                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
        }
    }
    /*execute a function presses a key on the keyboard:*/
    var x = document.getElementById(inputElement.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (event.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
    } else if (event.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
    } else if (event.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        event.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
        }
    }

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(element) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (element !== x[i] && element !== inputElement) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (event) {
        closeAllLists(event.target);
    });
}
