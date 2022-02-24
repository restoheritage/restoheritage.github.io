$(document).ready(()=>{
    var total = false;

    if(localStorage.getItem("menu")){
        var menus = JSON.parse(localStorage.getItem("menu"));

        for(let i=0;i<menus.length;i++){
            if(menus[i].total>0){
                total = true;
                break;
            }
        }
    }
    
    if(menus && total){
        let grandTotal = 0;

        for(let i=0;i<menus.length;i++){
            if(menus[i].total > 0){
                grandTotal += menus[i].total * menus[i].price;
                $("#"+i+"_img").attr("src", "../Menu/Assets/"+menus[i].image);
                document.getElementById(i+'_name').innerHTML = menus[i].name;
                document.getElementById(i+'_total').innerHTML = menus[i].total;
                document.getElementById(i+'_price').innerHTML = "Rp. " + menus[i].price;
                document.getElementById(i+'_grandtotal').innerHTML = "Rp. " + menus[i].total * menus[i].price;
                document.getElementById('foods'+i).style.display = "block";
            }
        }

        document.getElementById('payment-container').style.display = "block";
        document.getElementById("grand_total").innerHTML = "Rp. " + grandTotal;
            
        document.getElementById("pays").onclick = () => {
            localStorage.setItem("code", "1");
        }
    }        
    else{
        document.getElementById('empty-container').style.display = "block";
    }

    document.getElementById("waiter-icon").onclick=()=>{
        document.getElementById("waiter-audio").play();
    }
})