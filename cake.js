const whatsNew = document.getElementById("whatsNew");
const roundCakes = document.getElementById("roundCakes");
const rollCakes = document.getElementById("rollCakes");
const dreamCakes = document.getElementById("dreamCakes");
const cupCakes = document.getElementById("cupCakes");
const sweetBites = document.getElementById("sweetBites");
const watsnew = document.getElementById("watsNew");
const roundcake = document.getElementById("roundCake");
const rollcake = document.getElementById("rollCake");
const dreamcake = document.getElementById("dcCake");
const cupcake = document.getElementById("cupCake");
const sweetbites = document.getElementById("sweetBts");
const choice = document.querySelectorAll("div p");
function cakeSlide(){
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