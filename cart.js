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
    let totalprc;
    let totalval;
    const rsv = document.getElementById("rsv");

    window.onload = function(){
        minus.disabled = true;
    }


    add.addEventListener("click", ()=>{
        // var value;
        var price = parseInt(document.getElementById("price").value = prc);
        var value = parseInt(document.getElementById("num").value, 10);
        var total;
        
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;


            minus.disabled = false;
            value++;
            total = (value)*price;
                
           totalval = document.getElementById("num").value = value;
           totalprc = document.getElementById("price").value = total + "$";


           rsv.onclick = function(){
                window.open('mailto:chosen1sbakeshop@gmail.com?subject=cake%20order&body=value: ' +totalval + '%0D%0Atotal price: ' + totalprc + '%0D%0Adate ordered: ' + today);
               
           }
    })
    
    minus.addEventListener("click", ()=>{
        var price = parseInt(document.getElementById("price").value = prc);
        var value = parseInt(document.getElementById("num").value, 10);
        
        var total;

        

            total = (value*price)-price;
            value = value - 1;

            
            if((value <= 0 )||(value === 0 )){
                minus.disabled = true;
            }
            totalprc = document.getElementById("num").value = value;
            totalval = document.getElementById("price").value = total + "$";
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

