function events (){
    $("#btnSend").click(function(){
        var email = document.getElementById("email").value;
        sendMail(email);
    })
}
function sendMail(email){
    $.get( "https://api.ajedrezconpanno.com/comingsoon/notificarlanzamiento?email=" + email,
    function(data) {
        success();
    });
}
function success(){
    alert( "Mail guardado!" );
}