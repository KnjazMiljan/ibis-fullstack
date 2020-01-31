@extends('layouts.app')
@section('navbar')
    @auth
        <nav class="navbar navbar-expand navbar-light bg-white shadow-sm">
            <a class="navbar-brand" href="#">Report</a>
            <div class="collapse navbar-collapse">
                <div class="navbar-nav mr-auto"></div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>
                        <div>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-expand navbar-light bg-white shadow-sm">
            <form class="form-inline" action="/action_page.php">
                @csrf
                <div class="form-group ui-widget">
                    <input
                        type="text"
                        class="form-control margin-right"
                        id="macAddress"
                        placeholder="Mac: address"
                    >
                </div>
                <div class="form-group autocomplete">
                    <input
                        type="text"
                        class="form-control margin-right basicAutoComplete"
                        id="contractId"
                        name="contractId"
                        placeholder="Contract ID"
                        autocomplete="off"
                    >
                </div>
                <button
                    type="submit"
                    class="btn btn-default"
                >
                    Apply filters
                </button>
            </form>
        </nav>
    @endauth
@endsection

@section('content')
<div class="container w-100">
    <ul class="nav nav-tabs w-100" role="tablist">
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#tables">
                Tables
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#graphs">
                Graphs
            </a>
        </li>
    </ul>
    <div class="tab-content">
        <div id="tables" class="container tab-pane fade"><br>
            <h3>Tables</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div id="graphs" class="container tab-pane active"><br>
            <h3>Graphs</h3>
            <div class="col-md-4 custom-control-inline">
                <canvas id="hgwStatus" width="600" height="400"></canvas>
            </div>
            <div class="col-md-4 custom-control-inline">
                <canvas id="hgwInterference" width="600" height="400"></canvas>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
    <script src="{{ asset('js/hgwCharts.js') }}"></script>
    <script>
        const data = {!! isset($data) ? json_encode($data) : [] !!};
        let searchableContracts = [];
        data.map(obj => {
            searchableContracts.push(obj.contractId.toString())
        });

        function setInputFilter(textInput, inputFilter, data) {

            ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
                textInput.addEventListener(event, function() {
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
                    autocomplete(textInput, data);
                });
            });
        }

        function isValidMacAddress(value) {
            return /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/.test(value);
        }

        // Allow only digits which does not start with 0 or nothing
        setInputFilter($('#contractId')[0], function(value) {
            return /^[1-9][0-9]{0,10}|^$/.test(value);
        }, searchableContracts);

        function autocomplete(inp, arr) {
            /*the autocomplete function takes two arguments,
            the text field element and an array of possible autocompleted values:*/
            var currentFocus;
            /*execute a function when someone writes in the text field:*/
            inp.addEventListener("input", function(e) {
                var a, b, i, val = this.value;
                /*close any already open lists of autocompleted values*/
                closeAllLists();
                if (!val) { return false;}
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                this.parentNode.appendChild(a);
                /*for each item in the array...*/
                for (i = 0; i < arr.length; i++) {
                    /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function(e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;

                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
            });
            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function(e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode == 38) { //up
                    /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode == 13) {
                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                    e.preventDefault();
                    if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                    }
                }
            });
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
            function closeAllLists(elmnt) {
                /*close all autocomplete lists in the document,
                except the one passed as an argument:*/
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }
            /*execute a function when someone clicks in the document:*/
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        }

    </script>
@endsection
