let contentOne = document.querySelector(".slideshow-container");
let contentTwo = document.querySelector(".container2");
const aRef = document.getElementById("texts");
const aRef2 = document.getElementById("texts1");
const navLinks = document.getElementById("text1");
let burger = document.querySelector(".line1");
let burger1 = document.querySelector(".line2");
let burger2 = document.querySelector(".line3");
const scrollup = document.getElementById("scrollUp");
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".nav-link");
    const navLinks = document.querySelectorAll(".nav-link li");
    
    burger.addEventListener('click', function(){
        //Toggle Nav
        nav.classList.toggle("active");
        nav.classList.remove("active1");
        
        //Animate Links
        navLinks.forEach(function(link, index) {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}
navSlide();