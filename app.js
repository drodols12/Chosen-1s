function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks");
    const navLinks = document.querySelectorAll(".navlinks li");
    
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
        burger.classList.toggle("toggle");
    });
    
}
navSlide();

function whatsNew(){
        var imgSrc1 = document.querySelector(".bannerImg1");
        var imgSrc2 = document.querySelector(".bannerImg2");
        var imgSrc3 = document.querySelector(".bannerImg3");
        var imgSrc4 = document.querySelector(".bannerImg4");
        var imgSrc5 = document.querySelector(".bannerImg5");
        var imgSrc6 = document.querySelector(".bannerImg6");
        var imgSrc7 = document.querySelector(".bannerImg7");
        var imgSrc8 = document.querySelector(".bannerImg8");
        var imgSrc9 = document.querySelector(".bannerImg9");
        var imgSrc10 = document.querySelector(".bannerImg10");
        var imgSrc11 = document.querySelector(".bannerImg11");
        var imgSrc12 = document.querySelector(".bannerImg12");
        var imgSrc13 = document.querySelector(".bannerImg13");
        var imgSrc14 = document.querySelector(".bannerImg14");
        var imgSrc15 = document.querySelector(".bannerImg15");
        var imgSrc16 = document.querySelector(".bannerImg16");
        var imgSrc17 = document.querySelector(".bannerImg17");
        var imgSrc18 = document.querySelector(".bannerImg18");
        var imgSrc19 = document.querySelector(".bannerImg19");
        var imgSrc20 = document.querySelector(".bannerImg20");
        var imgSrc21 = document.querySelector(".bannerImg21");
        var imgSrc22 = document.querySelector(".bannerImg22");
        var imgSrc23 = document.querySelector(".bannerImg23");


        imgSrc1.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc1.src);
            cakeName = document.getElementById("cakeType1");
            localStorage.setItem("cakeNm", cakeName.textContent);
            //var prc = document.getElementById("prc");
            // var prc = cakeName.setAttribute("name", "dada");
            
            let val = 35

            localStorage.setItem("val",val);
            // true                     
            // localStorage.setItem("valuePrc", prc)
            window.location.href = "./cart.html";
        })
        imgSrc2.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc2.src);
            cakeName = document.getElementById("cakeType2");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 25

            localStorage.setItem("val",val);
           
           
            window.location.href = "./cart.html";
        })
        imgSrc3.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc3.src);
            cakeName = document.getElementById("cakeType3");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 25

            localStorage.setItem("val",val);
        
            
            window.location.href = "./cart.html";
        })
        imgSrc4.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc4.src);
            cakeName = document.getElementById("cakeType4");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 15

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc5.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc5.src);
            cakeName = document.getElementById("cakeType5");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 15

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc6.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc6.src);
            cakeName = document.getElementById("cakeType6");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 15

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc7.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc7.src);
            cakeName = document.getElementById("cakeType7");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 35

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc8.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc8.src);
            cakeName = document.getElementById("cakeType8");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 35

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc9.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc9.src);
            cakeName = document.getElementById("cakeType9");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 35

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc10.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc10.src);
            cakeName = document.getElementById("cakeType10");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 20

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc11.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc11.src);
            cakeName = document.getElementById("cakeType11");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 25

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc12.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc12.src);
            cakeName = document.getElementById("cakeType12");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 25

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc13.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc13.src);
            cakeName = document.getElementById("cakeType13");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 24

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc14.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc14.src);
            cakeName = document.getElementById("cakeType14");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 24

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc15.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc15.src);
            cakeName = document.getElementById("cakeType15");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 24

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc16.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc16.src);

            cakeName = document.getElementById("cakeType16");
            localStorage.setItem("cakeNm", cakeName.textContent);

            let val = "soon"
            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc17.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc17.src);
            cakeName = document.getElementById("cakeType17");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = "soon"
            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc18.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc18.src);
            cakeName = document.getElementById("cakeType18");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = "soon"
            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc19.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc19.src);
            cakeName = document.getElementById("cakeType19");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 8

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc20.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc20.src);
            cakeName = document.getElementById("cakeType20");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 8

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc21.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc21.src);
            cakeName = document.getElementById("cakeType21");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 10

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc22.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc22.src);
            cakeName = document.getElementById("cakeType22");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 12

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })
        imgSrc23.addEventListener('click', ()=>{
            localStorage.setItem("cake1", imgSrc23.src);
            cakeName = document.getElementById("cakeType23");
            localStorage.setItem("cakeNm", cakeName.textContent);
            let val = 12

            localStorage.setItem("val",val);
            window.location.href = "./cart.html";
        })

}

whatsNew();

function cakeSlide(){
    const whatsNew = document.getElementById("whatsNew");
    const roundCakes = document.getElementById("roundCakes");
    const rollCakes = document.getElementById("rollCakes");
    const dreamCakes = document.getElementById("dreamCakes");
    const cupCakes = document.getElementById("cupCakes");
    const sweetBites = document.getElementById("sweetBites");
    var watsnew = document.getElementById("watsNew");
    var roundcake = document.getElementById("roundCake");
    var rollcake = document.getElementById("rollCake");
    var dreamcake = document.getElementById("dcCake");
    var cupcake = document.getElementById("cupCake");
    var sweetbites = document.getElementById("sweetBts");


    whatsNew.addEventListener('click', ()=>{
        watsnew.classList.remove("wActive2");
        roundcake.classList.remove("rActive");
        rollcake.classList.remove("rcActive");
        dreamcake.classList.remove("dcActive");
        cupcake.classList.remove("cActive");
        sweetbites.classList.remove("sActive");
    })
    roundCakes.addEventListener('click', ()=>{
        watsnew.classList.add("wActive2");
        roundcake.classList.add("rActive");
        rollcake.classList.remove("rcActive");
        dreamcake.classList.remove("dcActive");
        cupcake.classList.remove("cActive");
        sweetbites.classList.remove("sActive");
    })
    rollCakes.addEventListener('click', ()=>{
        watsnew.classList.add("wActive2");
        roundcake.classList.remove("rActive");
        rollcake.classList.add("rcActive");
        dreamcake.classList.remove("dcActive");
        cupcake.classList.remove("cActive");
        sweetbites.classList.remove("sActive");
    })
    dreamCakes.addEventListener('click', ()=>{
        watsnew.classList.add("wActive2");
        rollcake.classList.remove("rcActive");
        roundcake.classList.remove("rActive");
        dreamcake.classList.add("dcActive");
        cupcake.classList.remove("cActive");
        sweetbites.classList.remove("sActive");
    })
    cupCakes.addEventListener('click', ()=>{
        watsnew.classList.add("wActive2");
        rollcake.classList.remove("rcActive");
        roundcake.classList.remove("rActive");
        dreamcake.classList.remove("dcActive");
        cupcake.classList.add("cActive");
        sweetbites.classList.remove("sActive");
            
    })
    sweetBites.addEventListener('click', ()=>{
        watsnew.classList.add("wActive2");
        rollcake.classList.remove("rcActive");
        roundcake.classList.remove("rActive");
        dreamcake.classList.remove("dcActive");
        cupcake.classList.remove("cActive");
        sweetbites.classList.add("sActive");
    })



}

cakeSlide();





    