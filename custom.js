function clkPhoto(){
    const all = document.getElementById("check1");
    const kds = document.getElementById("check2");
    const adt = document.getElementById("check3");
    const ord = document.getElementById("ord");
    const sh = document.getElementById("show");
    const cake1 = document.querySelectorAll(".adt");
    const cake2 = document.querySelectorAll(".kd");
    const cake = document.querySelectorAll("img");
    const logo = document.getElementById("logo");
    
    ord.onclick = function(){
       location.href = "https://m.me/Chosen1cakes/"
    }

    logo.onclick = function(){
        document.location.href = "/index.html";
    } 


    all.onclick = function(){
        cake1.forEach(function(change){
            change.classList.add("adt");
            change.classList.remove("adt2");
        })
        cake2.forEach(function(change){
            change.classList.add("kd");
            change.classList.remove("kd2");
        })
    }
    kds.onclick = function(){
        cake1.forEach(function(change){
            change.classList.remove("adt");
            change.classList.add("adt2");
        })
        cake2.forEach(function(change){
            change.classList.add("kd");
            change.classList.remove("kd2");
        })
       

    }
    adt.onclick = function(){
        cake1.forEach(function(change){
            change.classList.add("adt");
            change.classList.remove("adt2")
        })
        cake2.forEach(function(change){
            change.classList.remove("kd");
            change.classList.add("kd2");
        })
    }
    cake.forEach(function(zoom, index){
        zoom.onclick=function(){
            var show = document.getElementById("show");
            var zooms = document.querySelector(".cake1");
            var blur1 = document.querySelector(".header")
            var blur2 = document.querySelector(".navi")

            
             
            
           
            if(zooms.style.display == "none"){
                localStorage.setItem("cst", zoom.src);
                zooms.style.display = "block";
                show.setAttribute("src", localStorage.getItem("cst"))
                blur1.classList.add("blur")
                blur2.classList.add("blur")
                cake1.forEach(function(change){
                    change.classList.add("blur")
                })
                cake2.forEach(function(change){
                    change.classList.add("blur")
                })
            }else{
                zooms.style.display = "none";
                blur1.classList.remove("blur")
                blur2.classList.remove("blur")
                cake1.forEach(function(change){
                    change.classList.remove("blur")
                })
                cake2.forEach(function(change){
                    change.classList.remove("blur")
                })
            }
            
        }
    })
}
clkPhoto();
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
function btn(){
    const ourcakes = document.getElementById("ocakes");
    const orders = document.getElementById("order");
    const cntact = document.getElementById("contactus");
    const close = document.getElementById("closeBtn");
    const submit = document.getElementById("sub")

    ourcakes.onclick = function(){
        location.href = "#navbar";
    }
    orders.onclick = function(){
        swal({
            title: "Hello there!",
            text: "Please go to 'Our Cakes' section to see the menu and to order",
            icon: "info"
        }).then(function(){
            location.href = "cakepage.html";
        })
    }
    cntact.onclick = function(){
        var form = document.getElementById("cnt");
        location.href = "#navbar";
        form.classList.add("contactActive");
        close.onclick = function(){
            form.classList.remove("contactActive");
       }
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
            }).then(function(){
                emailjs.send("gmail","template_v0omm4h", tempParams).then(function(res){
                    console.log("success", res.status);
                })
            })
        }else{
            swal({
                title: "You forgot Something..",
                text: "Please fill all the input fields before submitting, Thank you!",
                icon: "warning"
            })
        }
    }
}

btn();

