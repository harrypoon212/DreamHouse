$(document).ready(function() {
    $('#login').click(function() {
        var user = $('#uname').val();
        var password = $('#pwd').val();
        var error = true;


        $.ajax({
            type: "POST",
            url: "data.json",
            dataType: "json",
            success: function(data) {
                $.each(data, function(key, value) {
                    if (user == value.user_name && password == value.password) {
                        error = false;
                    }
                });
                if (error == false) {
                    alert("login success!");
                    document.location = "index.html";
                } else if (error == true) {
                    alert("login fail!");
                    $('#uname').val('');
                    $('#pwd').val('');
                }
            }
        });
    });



});