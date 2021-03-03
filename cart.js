function getCake(){
    const cakeImg = document.getElementById("cakeImg");
    const ckNM = document.getElementById("cakeType2");
    const add = document.getElementById("add");
    const minus = document.getElementById("minus");
    const prc = localStorage.getItem('val')
    let totalprc;
    let totalval;
    const rsv = document.getElementById("rsv");
    const getOrder = document.getElementById("date");
    var price = parseInt(document.getElementById("price").value);
    var value = parseInt(document.getElementById("num").value);
    var total;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


    window.addEventListener('load', ()=>{
        ckNM.textContent = localStorage.getItem('cakeNm');
        cakeImg.setAttribute("src", localStorage.getItem('cake1'));
    })

    
        window.onload = function(){
            minus.disabled = true;
        }


        add.addEventListener("click", ()=>{

    
            today = mm + '/' + dd + '/' + yyyy;
            
            price = prc;
    
            minus.disabled = false;
            value++;
            total = (value)*price;
                    
            totalval = document.getElementById("num").value = value;
            totalprc = document.getElementById("price").value = total + "$";    
        })
        rsv.onclick = function(){

            if(getOrder.value !== "Set your delivery date!"){            
                swal({
                    title: "Good job!", 
                    text: "Note: Please wait for the confirmation, Thanks", 
                    icon: "success"
                }).then(function(params){
                  var tempParams = {
                    cake: ckNM.textContent,
                    qty: totalval,
                    amount: totalprc,
                    tdy: today,
                    dlvr: getOrder.value
                  }
                  emailjs.send("reservation","template_icqt3na", tempParams).then(function(res){
                      console.log("success", res.status);
                  })

                });
            }else{
                swal("You forgot!", "Please fill all the input fields", "warning");
            } 
        }


        minus.addEventListener("click", ()=>{
                total = (value*price)-price;
                value = value - 1;
    
                
                if((value <= 0 )||(value === 0 )){
                    minus.disabled = true;
                }
                totalprc = document.getElementById("num").value = value;
                totalval = document.getElementById("price").value = total + "$";
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

