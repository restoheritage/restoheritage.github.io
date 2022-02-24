function validate(){
    const val = document.querySelector('input').value;
    var email = document.getElementById("email")
    if(!email.value) alert("email must be filled")
    else if(!email.value.endsWith("@gmail.com")) alert("Email not valid")
    else {
        alert("E-receipt has been sent to " + val)
        location.href = "../OrderStatus/orderList-orderStatus.html"
    }
}