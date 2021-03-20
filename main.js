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

        function scrollFunction() {
            if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ) {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("navbar").style.position = "fixed";
                document.getElementById("navbar").style.backgroundColor = "white";
               
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
    
});




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




function contactUS(){
    const contact = document.getElementById("contact");
    const contactForm = document.querySelector(".contactus");
    const closeBtn = document.getElementById("closeBtn");
    contact.addEventListener('click', ()=>{
        window.location.href = "index.html#navbar";
        contactForm.classList.add("contactactive")
        contactForm.classList.remove("contactactive1")
    })
    closeBtn.addEventListener('click', ()=>{
        contactForm.classList.add("contactactive1")
        contactForm.classList.remove("contactactive")
    })
}


contactUS();



var gotoAbout = document.getElementById("texts1");
gotoAbout.addEventListener('click', ()=>{
var about = window.location.href = "index.html#about";
var navv = document.querySelector(".nav-link");
    navv.classList.remove("active");
    navv.classList.add("active1");
    return;
});



function btnFunc(){
    const ocks = document.getElementById("oc");
    const ord = document.getElementById("order");
    const submit = document.getElementById("sub")
    const custom = document.getElementById("texts1");
    const logo = document.getElementById("lg");


    logo.onclick = function(){
        location.href = "index.html";
    }


    ocks.onclick = function(){
        location.href = "cakepage.html";
    }
    ord.onclick = function(){
       location.href = "/aboutus.html";
    }
    submit.onclick = function(params){
        var tempParams ={
            from_name: document.getElementById('fname').value,
            to_name: document.getElementById('em').value,
            message: document.getElementById('cmt').value
        }


        if((tempParams['from_name'] !== " ") && (tempParams['to_name'] !== " ") && (tempParams['message'] !== " ")){
            swal({
                title: "Thank you for your feedback!",
                icon: "success"
            })
            // .then(function(){
            //     emailjs.send("gmail","template_v0omm4h", tempParams).then(function(res){
            //         console.log("success", res.status);
            //     })
            // })
        }else{
            swal({
                title: "You forgot Something..",
                text: "Please fill all the input fields before submitting, Thank you!",
                icon: "warning"
            })
        }
    }
    custom.onclick = function(){
        location.href = "customized.html"
    }

}

btnFunc();

'use strict';
var slideIndex = 0;
var timer;
showSlides();
function plusSlides(n) {
  showSlides(slideIndex += n);
  clearTimeout(timer);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
//   clearTimeout(timer);
}

function showSlides(n) {
  //alert('showslides('+ n +')\nslideIndex='+slideIndex);
  var i;
  
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  timer = setTimeout(showSlides,3300); // Change image every 5 seconds
}

function showCakes(){
    
}