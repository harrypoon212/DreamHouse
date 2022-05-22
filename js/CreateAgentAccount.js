$(document).ready(function() {
    $('#CreateAc_Submit').click(function() {
        var user2 = $('#CreateAc_uname').val();
        var Sex = $('#Sex').val();
        var password2 = $('#CreateAc_pwd').val();
        var ComfirmPassword = $('#CreateAc_cpwd').val();
        var email = $('#CreateAc_email').val();
        var phoneNumber = $('#CreateAc_phoneNumber').val();
        var Birthday = $('#CreateAc_Birthday').val();


        if (user2 == "") {
            alert("Your Name is missing!!!!");
        } else if (password2 == "") {
            alert("Your password is missing!!!!");
        } else if (ComfirmPassword == "") {
            alert("Your comfirm password is missing!!!!");
        } else if (email == "") {
            alert("Your email is missing!!!!");
        } else if (phoneNumber == "") {
            alert("Your phone number is missing!!!!");
        } else if (phoneNumber.length < 8 || phoneNumber.length > 8) {
            alert("please check your phone number!!!!");
        } else if (password2 != ComfirmPassword) {
            alert("Your password is not match!!!!");
        } else {
            alert("OK, your application is accept\nYour Name: " + user2 + "\nYour sex: " + Sex + "\nYour Password: " + password2 + "\nYour Email: " + email + "\nYour Phone Number: " + phoneNumber + "\nYour Birthday: " + Birthday + "\n!!!Please remenber Your Account!!!");
        }
    });
});