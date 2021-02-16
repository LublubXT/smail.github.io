function sendEmail() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var myemail = document.getElementById('myemail');
    var mypass = document.getElementById('mypass');
    var mess = document.getElementById('mess');

    Email.send({
        Host: "smtp.gmail.com",
        Username: myemail.value,
        Password: mypass.value,
        To: email.value,
        From: myemail.value,
        Subject: name.value,
        Body: mess.value,
    })
        .then(function (message) {
            alert("Mail sent successfully...")
        });
}

$(".img1").click(function () {
    $(".side").slideToggle("slow");
});