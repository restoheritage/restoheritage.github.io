document.getElementById("success-audio").play();

setTimeout(function(){
    window.location.href="../TransactionRecord/pendingOrder-TransactionRecord.html"
},4000)

document.getElementById("waiter-icon").onclick=()=>{
    document.getElementById("waiter-audio").play();
}