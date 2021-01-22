let contentOne = document.querySelector(".slideshow-container");
let contentTwo = document.querySelector(".container2");
const aRef = document.getElementById("texts");
const aRef2 = document.getElementById("texts1");
const navLinks = document.getElementById("text1");
let burger = document.querySelector(".line1");
let burger1 = document.querySelector(".line2");
let burger2 = document.querySelector(".line3");
const scrollup = document.getElementById("scrollUp");



window.addEventListener('scroll', ()=>{
    if(window.matchMedia("(max-width: 768px)").matches){
        var scrollUp = document.getElementById("scrollUp");
        var y = window.pageYOffset;
        function scrollFunc(){
            window.addEventListener('scroll', ()=>{
                if(document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200){
                    scrollUp.classList.add("scrollAct");
                    scrollUp.classList.remove("scrollAct2");
                    console.log(y);
                }else{
                    scrollUp.classList.remove("scrollAct");
                    scrollUp.classList.add("scrollAct2");
                }
            })
        }

        scrollFunc();
    }else{
        window.onscroll = function() {
        scrollFunction()
    };
        function scrollFunction() {
            if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ) {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("navbar").style.position = "fixed";
                document.getElementById("navbar").style.backgroundColor = "white";
                contentOne.style = "position: absolute; top: 100px; right: 0;display: block; width: 100%";
                contentTwo.style = "margin-top: 750px;"
                navLinks.style.color = "plum";
                aRef.style.color = "plum";
                aRef2.style.color = "plum";
              
                burger.style.backgroundColor = "plum";
                burger1.style.backgroundColor = "plum";
                burger2.style.backgroundColor = "plum";

               

            }else {
                document.getElementById("navbar").style.top = "0px";
                document.getElementById("navbar").style.backgroundColor = "plum";
                navLinks.style.color = "white";
                aRef.style.color = "white";
                aRef2.style.color = "white";
                burger.style.backgroundColor = "white";
                burger1.style.backgroundColor = "white";
                burger2.style.backgroundColor = "white";
            }
        }
    }
});

scrollup.addEventListener('click', ()=>{
    window.location.href = "#contact";
})

var slideIndex = 0;
function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {
    slideIndex = 1
}    
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();

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


const contact = document.getElementById("contact");
const contactForm = document.querySelector(".contactus");
const closeBtn = document.getElementById("closeBtn");

function contactUS(){
    contact.addEventListener('click', ()=>{
        
        contactForm.classList.add("contactactive")
        contactForm.classList.remove("contactactive1")
    })
    closeBtn.addEventListener('click', ()=>{
        contactForm.classList.add("contactactive1")
        contactForm.classList.remove("contactactive")
    })
}


contactUS();

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}

var gotoAbout = document.getElementById("texts1");
gotoAbout.addEventListener('click', ()=>{
var about = window.location.href = "index.html#cont3";
var navv = document.querySelector(".nav-link");
    SmoothVerticalScrolling(about, 2700, "center");

    
    navv.classList.remove("active");
    navv.classList.add("active1");
    return;
});

var scrollUp = document.getElementById("scrollUp");
var y = window.pageYOffset;
function scrollFunc(){
    window.addEventListener('scroll', ()=>{
        if(document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700){
            scrollUp.classList.add("scrollAct");
            scrollUp.classList.remove("scrollAct2");
            console.log(y);
        }else{
            scrollUp.classList.remove("scrollAct");
            scrollUp.classList.add("scrollAct2");
        }
    })
}

scrollFunc();