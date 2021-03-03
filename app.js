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
        const imgSrc1 = document.querySelector(".bannerImg1");
        const imgSrc2 = document.querySelector(".bannerImg2");
        const imgSrc3 = document.querySelector(".bannerImg3");
        const imgSrc4 = document.querySelector(".bannerImg4");
        const imgSrc5 = document.querySelector(".bannerImg5");
        const imgSrc6 = document.querySelector(".bannerImg6");
        const imgSrc7 = document.querySelector(".bannerImg7");
        const imgSrc8 = document.querySelector(".bannerImg8");
        const imgSrc9 = document.querySelector(".bannerImg9");
        const imgSrc10 = document.querySelector(".bannerImg10");
        const imgSrc11 = document.querySelector(".bannerImg11");
        const imgSrc12 = document.querySelector(".bannerImg12");
        const imgSrc13 = document.querySelector(".bannerImg13");
        const imgSrc14 = document.querySelector(".bannerImg14");
        const imgSrc15 = document.querySelector(".bannerImg15");
        const imgSrc16 = document.querySelector(".bannerImg16");
        const imgSrc17 = document.querySelector(".bannerImg17");
        const imgSrc18 = document.querySelector(".bannerImg18");
        const imgSrc19 = document.querySelector(".bannerImg19");
        const imgSrc20 = document.querySelector(".bannerImg20");
        const imgSrc21 = document.querySelector(".bannerImg21");
        const imgSrc22 = document.querySelector(".bannerImg22");
        const imgSrc23 = document.querySelector(".bannerImg23");


        imgSrc1.addEventListener("click", ()=>{
            localStorage.setItem("cake1", imgSrc1.src);
            cakeName = document.getElementById("cakeType1");
            localStorage.setItem("cakeNm", cakeName.textContent);
            //var prc = document.getElementById("prc");
            // var prc = cakeName.setAttribute("name", "dada");
            
            let val = 35;

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

function roundCk(){
    const rounds = document.querySelectorAll("#round");
    const nm = document.querySelectorAll("#ck")
        rounds.forEach(function(main,index){
            main.onclick = function(){
                console.log(index);
                if(index == 0){
                    localStorage.setItem("cake1", main.src);
                    localStorage.setItem("cakeNm", nm[0].textContent);
                    console.log(index);
                    let val = 35;
                    localStorage.setItem("val",val);
                    window.location.href = "./cart.html"; 
                }
                else if(index == 1){
                    localStorage.setItem("cake1", main.src);
                    localStorage.setItem("cakeNm", nm[1].textContent);
                    console.log(index);
                    let val = 25;
                    localStorage.setItem("val",val);
                    window.location.href = "./cart.html";
                }
                else if(index == 2){
                    localStorage.setItem("cake1", main.src);
                    localStorage.setItem("cakeNm", nm[2].textContent);
                    console.log(index);
                    let val = 25;
                    localStorage.setItem("val",val);
                    window.location.href = "./cart.html";  
                }
                else if(index == 3){
                    localStorage.setItem("cake1", main.src);
                    localStorage.setItem("cakeNm", nm[3].textContent);
                    console.log(index);
                    let val = 25;
                    localStorage.setItem("val",val);
                    window.location.href = "./cart.html";    
                }
                else if(index == 4){
                    localStorage.setItem("cake1", main.src);
                    localStorage.setItem("cakeNm", nm[4].textContent);
                    console.log(index);
                    let val = 25;
                    localStorage.setItem("val",val); 
                    window.location.href = "./cart.html";   
                }
                else if(index == 5){
                    localStorage.setItem("cake1", main.src);
                    localStorage.setItem("cakeNm", nm[5].textContent);
                    console.log(index);
                    let val = 25;
                    localStorage.setItem("val",val); 
                    window.location.href = "./cart.html";   
                }
                else if(index == 6){
                    localStorage.setItem("cake1", main.src);
                    localStorage.setItem("cakeNm", nm[6].textContent);
                    console.log(index);
                    let val = 25;
                    localStorage.setItem("val",val); 
                    window.location.href = "./cart.html";  
                }
                else if(index == 7){
                    localStorage.setItem("cake1", main.src);
                    localStorage.setItem("cakeNm", nm[7].textContent);
                    console.log(index);
                    let val = 25;
                    localStorage.setItem("val",val);   
                    window.location.href = "./cart.html"; 
                }
            }
        })
    
}
roundCk();

function rollCk(){
    const roll = document.querySelectorAll("#roll")
    const nm = document.querySelectorAll("#ck1");

    roll.forEach(function(roll, index){
        roll.onclick = function(){
            if(index == 0){
                localStorage.setItem("cake1", roll.src);
                localStorage.setItem("cakeNm", nm[0].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 1){
                localStorage.setItem("cake1", roll.src);
                localStorage.setItem("cakeNm", nm[1].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 2){
                localStorage.setItem("cake1", roll.src);
                localStorage.setItem("cakeNm", nm[2].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }
        }
    })
}
rollCk();

function dreamCk(){
    const nm = document.querySelectorAll("#ck2");
    const img = document.querySelectorAll("#dr");

    img.forEach(function(dream, index){
        dream.onclick = function(){
            if(index == 0){
                localStorage.setItem("cake1", dream.src);
                localStorage.setItem("cakeNm", nm[0].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "/cart.html"; 
            }else if(index == 1){
                localStorage.setItem("cake1", dream.src);
                localStorage.setItem("cakeNm", nm[1].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "/cart.html"; 
            }else if(index == 2){
                localStorage.setItem("cake1", dream.src);
                localStorage.setItem("cakeNm", nm[2].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "/cart.html"; 
            }else if(index == 3){
                localStorage.setItem("cake1", dream.src);
                localStorage.setItem("cakeNm", nm[3].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "/cart.html"; 
            }else if(index == 4){
                localStorage.setItem("cake1", dream.src);
                localStorage.setItem("cakeNm", nm[4].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "/cart.html"; 
            }else if(index == 5){
                localStorage.setItem("cake1", dream.src);
                localStorage.setItem("cakeNm", nm[5].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "/cart.html"; 
            }
        }
    })
}
dreamCk();

function cupCk(){
    const cupcake = document.querySelectorAll("#cup");
    const nm = document.querySelectorAll("#ck3");

    cupcake.forEach(function(cup, index){
        cup.onclick = function(){
            if(index == 0){
                localStorage.setItem("cake1", cup.src);
                localStorage.setItem("cakeNm", nm[0].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 1){
                localStorage.setItem("cake1", cup.src);
                localStorage.setItem("cakeNm", nm[1].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 2){
                localStorage.setItem("cake1", cup.src);
                localStorage.setItem("cakeNm", nm[2].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 3){
                localStorage.setItem("cake1", cup.src);
                localStorage.setItem("cakeNm", nm[3].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 4){
                localStorage.setItem("cake1", cup.src);
                localStorage.setItem("cakeNm", nm[4].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 5){
                localStorage.setItem("cake1", cup.src);
                localStorage.setItem("cakeNm", nm[5].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }
        }
    })
}
cupCk();

function sweetBt(){
    const sweet = document.querySelectorAll("#sweet");
    const nm = document.querySelectorAll("#ck4");

    sweet.forEach(function(swt, index){
        swt.onclick = function(){
            if(index == 0){
                localStorage.setItem("cake1", swt.src);
                localStorage.setItem("cakeNm", nm[0].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 1){
                localStorage.setItem("cake1", swt.src);
                localStorage.setItem("cakeNm", nm[1].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 2){
                localStorage.setItem("cake1", swt.src);
                localStorage.setItem("cakeNm", nm[2].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 3){
                localStorage.setItem("cake1", swt.src);
                localStorage.setItem("cakeNm", nm[3].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 4){
                localStorage.setItem("cake1", swt.src);
                localStorage.setItem("cakeNm", nm[4].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }else if(index == 5){
                localStorage.setItem("cake1", swt.src);
                localStorage.setItem("cakeNm", nm[5].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            
            }else if(index == 6){
                localStorage.setItem("cake1", swt.src);
                localStorage.setItem("cakeNm", nm[6].textContent);
                console.log(index);
                let val = 35;
                localStorage.setItem("val",val);
                window.location.href = "./cart.html"; 
            }
        }
    })
}
sweetBt();


function cakeSlide(){
    const whatsNews = document.getElementById("whatsNew");
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


    whatsNews.addEventListener('click', ()=>{
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
            location.href = "#navbar";
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