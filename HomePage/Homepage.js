$(document).ready(()=>{
    
    class Menu {
        constructor(image, name, price, id, total) {
            this.image = image;
            this.name = name;
            this.price = price;
            this.total = total;
            this.id = id;
        }

        addTotal(){
            return this.total++;
        }

        minTotal(){
            if(this.total > 0) return this.total--;
        }
    }

    var menus = [];

    if(!localStorage.getItem("menu")){
        newMenu();
    }

    function newMenu(){
        addMenu('butternut.png', 'Butternut Squash Soup with Brown Butter', 110000, 0);
        addMenu('caesar.jpg', 'Caesar Salad with Prawn', 90000, 0);
        addMenu('calamari.png', 'Under the Sea Calamari', 190000, 0);
        addMenu('meatball.png', 'Swedish Carpaccio Meatballs', 180000, 0);
        addMenu('lobster.jpg', 'Lobster Tail with Huitlacoche Sauce', 870000, 0);
        addMenu('foie-gras.jpg', 'Foie-Gras and Duck Meat with Sweet Sauce', 590000, 0);
        addMenu('grilled-beef.jpg', 'Classic Grilled-Beef', 375000, 0);
        addMenu('lamb-ravioli.jpg', 'Lamb Ravioli with Butter and Sage', 485000, 0);
        addMenu('scallop.jpg', 'Diver Scallop Carpaccio', 670000, 0);
        addMenu('salmon.jpg', 'Roasted Salmon with Greens', 425000, 0);
        addMenu('baked-alaska.jpg', 'Baked Alaska', 290000, 0);
        addMenu('ube-halaya.png', 'Ube Halaya', 90000, 0);
        addMenu('potato-pakoras.jpg', 'Potato Pakoras with Greek Yogurt', 120000, 0);
        addMenu('rhubarb.jpg', 'Rhubarb and Almond Custard', 140000, 0);
        addMenu('peach-avocado.jpg', 'Peach Avocado Mousse', 140000, 0);
        addMenu('whiskey-cake.png', 'Whiskey and Chocolate Cake', 110000, 0);
        addMenu('risotto.jpg', 'Fresh Herb Risotto', 70000, 0);
        addMenu('asparagus.jpg', 'Creamed Fresh Baby Asparagus', 70000, 0);
        addMenu('mashed-potato.jpg', 'Mashed Potatoes', 55000, 0);
        addMenu('meadow.png', 'Meadow Mocktail', 110000, 0);
        addMenu('chicha.jpg', 'Chicha Morada', 110000, 0);
        addMenu('lime.jpg', 'Lime Mocktail', 90000, 0);
        addMenu('champagne.jpg', 'Champagne for Six', 420000, 0);
        localStorage.setItem("menu", JSON.stringify(menus));
    }

    function addMenu(image, name, price, total){
        var food = new Menu(image, name, price, menus.length.toString(), total);
        menus.push(food);
    }

    var welcomeDone = localStorage.getItem("welcome-audio");
    if(!welcomeDone){
        setTimeout(function(){
            localStorage.setItem("welcome-audio", "1");
            document.getElementById("welcome-audios").play();
        }, 3000)
    }

    document.getElementById("waiter-icon").onclick=()=>{
        document.getElementById("waiter-audio").play();
    }
})