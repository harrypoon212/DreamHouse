$(document).ready(function() {
    $('#Rconfirm').click(function() {
        var email = $('#email').val();
        var password = $('#pwd').val();
        var PhoneNumber = $('#phoneNumber').val();
        var UserName = $('#uname').val();
        var Sex = $('#Sex').val();
        var RepeatPassword = $('#pwd-repeat').val();
        var error = true;

        $.ajax({
            type: "POST",
            url: "data.json",
            dataType: "json",
            success: function(data) {
                $.each(data, function(key, value) {
                    if (email == value.Email /*&& password == value.password*/ ) {
                        error = false;
                    }
                });
                if (error == false) {
                    alert("modify success!");
                    document.location = "index.html";
                } else if (error == true) {
                    alert("modify fail!");
                    $('#uname').val('');
                    $('#pwd').val('');
                    $('#email').val('');
                    $('#phoneNumber').val('');
                    $('#Sex').val('');
                    $('#pwd-repeat').val('');
                }
            }
        });
    });
});