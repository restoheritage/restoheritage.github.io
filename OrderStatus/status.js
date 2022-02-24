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

    var code = localStorage.getItem("code");
    document.getElementById('empty-container').style.display = "none";

    if(menus && total){
        if(code == 0){
            for(let i=0;i<menus.length;i++){
                if(menus[i].total > 0){
                    $("#"+i+"_img").attr("src", "../Menu/Assets/"+menus[i].image);
                    document.getElementById(i+'_name').innerHTML = menus[i].name;
                    document.getElementById(i+'_total').innerHTML = menus[i].total;
                    document.getElementById(i+'_status').innerHTML = "Pending";
                    document.getElementById('foods'+i).style.display = "block";
                }
            }
        }
        else if(code == 1){
            for(let i=0;i<menus.length;i++){
                if(menus[i].total > 0){
                    $("#"+i+"_img").attr("src", "../Menu/Assets/"+menus[i].image);
                    document.getElementById(i+'_name').innerHTML = menus[i].name;
                    document.getElementById(i+'_total').innerHTML = menus[i].total;
                    document.getElementById('foods'+i).style.display = "block";
                    document.getElementById(i+'_status').innerHTML = "Cooking";
                }
            }
    
            for(let i=0;i<menus.length;i++){
                if(menus[i].total > 0){
                    setTimeout(function(){
                        document.getElementById(i+'_status').innerHTML = "Serving";
                    },getRand(1000,5000))
                    setTimeout(function(){
                        document.getElementById(i+'_status').innerHTML = "Done";
                    },getRand(5001,10000))
                }
            }

            localStorage.removeItem("menu");
            localStorage.setItem("code", "2");
        }
        else{
            document.getElementById('empty-container').style.display = "block";
        }
    }
    else{
        document.getElementById('empty-container').style.display = "block";
    }

    function getRand(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    document.getElementById("waiter-icon").onclick=()=>{
        document.getElementById("waiter-audio").play();
    }

})