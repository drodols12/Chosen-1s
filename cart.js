function getCake(){
    const cakeImg = document.getElementById("cakeImg");
    const ckNM = document.getElementById("cakeType2");


    window.addEventListener('load', ()=>{
    ckNM.textContent = localStorage.getItem('cakeNm');
    cakeImg.setAttribute("src", localStorage.getItem('cake1'));

    })
}
getCake();
function Menu(){
    const menu = document.querySelector(".menu");
    
    menu.onclick = function(){
        document.location.href = "cakepage.html"
    }
}
Menu();
function incrementValue(){
    const add = document.getElementById("add");
    const minus = document.getElementById("minus");
    const prc = localStorage.getItem('val')
    


    add.addEventListener("click", ()=>{
        // var value;
        var price = parseInt(document.getElementById("price").value = prc);
        var value = parseInt(document.getElementById("num").value, 10);
        var total;
        var x;



            value++;
            total = (value)*price;
                
            document.getElementById("num").value = value;
            document.getElementById("price").value = total + "$";
        

    })
      
    minus.addEventListener("click", ()=>{
        var price = parseInt(document.getElementById("price").value = prc);
        var value = parseInt(document.getElementById("num").value, 10);
        
        var total;

            total = (value*price)-price;

            if(price == "0$"){
                minus.removeEventListener("click");
            }
            
            if(value-- === 0){
                minus.removeEventListener("click");
            }
           

            document.getElementById("num").value = value;
            document.getElementById("price").value = total + "$";

        })

    
}
incrementValue();   
function navSlides() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link");
    const navLinks = document.querySelectorAll(".nav-link li");
    
    burger.addEventListener("click", function(){
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach(function(link, index) {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggles");
    });
    
}
navSlides();

function reserveNow(){
    const rsv = document.getElementById("rsv");

    rsv.onclick = function(){
        location.href = "https://m.me/Chosen1cakes";
    }
}
reserveNow();