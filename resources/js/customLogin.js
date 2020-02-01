$(document).ready(function () {
    $("#password")[0].placeholder = "Password";
    $('#togglePasswordVisibility')[0].title = "Show";

    $('#togglePasswordVisibility').on('click', function() {
        let passwordInputType = $("input#password")[0].type;
        if (passwordInputType === "password") {
            $(this)[0].title = 'Hide';
            $('#fa-eye').hide();
            $('#fa-eye-slash').show();
            $("input#password")[0].type = "text";
        } else {
            $(this)[0].title = 'Show';
            $('#fa-eye').show();
            $('#fa-eye-slash').hide();
            $("input#password")[0].type = "password";
        }
    });
});

