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
// function whatsNew(){
//         const imgSrc1 = document.querySelector(".bannerImg1");
//         const imgSrc2 = document.querySelector(".bannerImg2");
//         const imgSrc3 = document.querySelector(".bannerImg3");
//         const imgSrc4 = document.querySelector(".bannerImg4");
//         const imgSrc5 = document.querySelector(".bannerImg5");
//         const imgSrc6 = document.querySelector(".bannerImg6");
//         const imgSrc7 = document.querySelector(".bannerImg7");
//         const imgSrc8 = document.querySelector(".bannerImg8");
//         const imgSrc9 = document.querySelector(".bannerImg9");
//         const imgSrc10 = document.querySelector(".bannerImg10");
//         const imgSrc11 = document.querySelector(".bannerImg11");
//         const imgSrc12 = document.querySelector(".bannerImg12");
//         const imgSrc13 = document.querySelector(".bannerImg13");
//         const imgSrc14 = document.querySelector(".bannerImg14");
//         const imgSrc15 = document.querySelector(".bannerImg15");
//         const imgSrc16 = document.querySelector(".bannerImg16");
//         const imgSrc17 = document.querySelector(".bannerImg17");
//         const imgSrc18 = document.querySelector(".bannerImg18");
//         const imgSrc19 = document.querySelector(".bannerImg19");
//         const imgSrc20 = document.querySelector(".bannerImg20");
//         const imgSrc21 = document.querySelector(".bannerImg21");
//         const imgSrc22 = document.querySelector(".bannerImg22");
//         const imgSrc23 = document.querySelector(".bannerImg23");


//         imgSrc1.addEventListener("click", ()=>{
//             localStorage.setItem("cake1", imgSrc1.src);
//             cakeName = document.getElementById("cakeType1");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             //var prc = document.getElementById("prc");
//             // var prc = cakeName.setAttribute("name", "dada");
            
//             let val = 35;

//             localStorage.setItem("val",val);
//             // true                     
//             // localStorage.setItem("valuePrc", prc)
//             window.location.href = "./cart.html";
//         })
//         imgSrc2.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc2.src);
//             cakeName = document.getElementById("cakeType2");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 25

//             localStorage.setItem("val",val);
           
           
//             window.location.href = "./cart.html";
//         })
//         imgSrc3.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc3.src);
//             cakeName = document.getElementById("cakeType3");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 25

//             localStorage.setItem("val",val);
        
            
//             window.location.href = "./cart.html";
//         })
//         imgSrc4.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc4.src);
//             cakeName = document.getElementById("cakeType4");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 15

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc5.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc5.src);
//             cakeName = document.getElementById("cakeType5");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 15

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc6.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc6.src);
//             cakeName = document.getElementById("cakeType6");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 15

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc7.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc7.src);
//             cakeName = document.getElementById("cakeType7");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 35

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc8.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc8.src);
//             cakeName = document.getElementById("cakeType8");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 35

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc9.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc9.src);
//             cakeName = document.getElementById("cakeType9");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 35

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc10.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc10.src);
//             cakeName = document.getElementById("cakeType10");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 20

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc11.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc11.src);
//             cakeName = document.getElementById("cakeType11");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 25

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc12.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc12.src);
//             cakeName = document.getElementById("cakeType12");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 25

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc13.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc13.src);
//             cakeName = document.getElementById("cakeType13");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 24

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc14.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc14.src);
//             cakeName = document.getElementById("cakeType14");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 24

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc15.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc15.src);
//             cakeName = document.getElementById("cakeType15");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 24

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc16.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc16.src);

//             cakeName = document.getElementById("cakeType16");
//             localStorage.setItem("cakeNm", cakeName.textContent);

//             let val = "soon"
//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc17.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc17.src);
//             cakeName = document.getElementById("cakeType17");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = "soon"
//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc18.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc18.src);
//             cakeName = document.getElementById("cakeType18");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = "soon"
//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc19.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc19.src);
//             cakeName = document.getElementById("cakeType19");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 8

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc20.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc20.src);
//             cakeName = document.getElementById("cakeType20");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 8

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc21.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc21.src);
//             cakeName = document.getElementById("cakeType21");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 10

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc22.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc22.src);
//             cakeName = document.getElementById("cakeType22");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 12

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })
//         imgSrc23.addEventListener('click', ()=>{
//             localStorage.setItem("cake1", imgSrc23.src);
//             cakeName = document.getElementById("cakeType23");
//             localStorage.setItem("cakeNm", cakeName.textContent);
//             let val = 12

//             localStorage.setItem("val",val);
//             window.location.href = "./cart.html";
//         })

// }
// whatsNew();  
function roundCk(){
    const rounds = document.querySelectorAll("#round");
    const round = document.querySelector("#rounds");
    const nm = document.querySelectorAll("#ck")
    const desc = document.querySelectorAll('#dsc')
    const ckName = document.getElementById("cks");
    const descrip = document.getElementById("ds");


    window.onload = ()=>{
        localStorage.clear();
    }
        rounds.forEach(function(main,index){
            main.onclick = function(){
                console.log(index);
                if(index == 0){
                    swal({
                        title:"Choose the size of the cake",
                        icon: "info",
                        buttons: {
                              catch: {
                                text: "6' - 35$",
                                value: "catch1",
                              },
                              catch2: {
                                text: "8' - soon",
                                value: "catch2",
                              }, 
                              cancel: "Cancel",
                            },
                    })
                    .then((value) => {
                        switch (value) {
                       
                          case "catch1":
                            swal({
                                title:"Your Order are recorded",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[0].textContent);
                                localStorage.setItem("cakeDesc", desc[0].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 35;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                          case "catch2":
                            swal({
                                title:"This size will be available soon!",
                                text: "Contact Us, or Browse to our Cakepage gallery for more!",
                                icon: "info"
                            }).then(function(){
                                window.location.reload()
                            });
                            break;
                       
                        //   default:
                        //     swal("Hello!","Choose a size of cake again", "info");
                        }
                    });
                }
                else if(index == 1){
                    swal({
                        title:"Choose the size of the cake",
                        icon: "info",
                        buttons: {
                              catch: {
                                text: "6' - 25$",
                                value: "catch1",
                              },
                              catch2: {
                                text: "8' - 30$",
                                value: "catch2",
                              }, 
                              cancel: "Cancel",
                            },
                    })
                    .then((value) => {
                        switch (value) {
                       
                          case "catch1":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[1].textContent);
                                localStorage.setItem("cakeDesc", desc[1].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 25;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                          case "catch2":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[1].textContent);
                                localStorage.setItem("cakeDesc", desc[1].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 30;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                        //   default:
                        //     swal("Hello!","Choose a size of cake again", "info");
                        }
                    });
                }
                else if(index == 2){
                    swal({
                        title:"Choose the size of the cake",
                        icon: "info",
                        buttons: {
                              catch: {
                                text: "6' - 25$",
                                value: "catch1",
                              },
                              catch2: {
                                text: "8' - 30$",
                                value: "catch2",
                              }, 
                              cancel: "Cancel",
                            },
                    })
                    .then((value) => {
                        switch (value) {
                       
                          case "catch1":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[2].textContent);
                                localStorage.setItem("cakeDesc", desc[2].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 25;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                          case "catch2":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[2].textContent);
                                localStorage.setItem("cakeDesc", desc[2].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 30;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                        //   default:
                        //     swal("Hello!","Choose a size of cake again", "info");
                        }
                    }); 
                }
                else if(index == 3){
                    swal({
                        title:"Choose the size of the cake",
                        icon: "info",
                        buttons: {
                              catch: {
                                text: "6' - 25$",
                                value: "catch1",
                              },
                              catch2: {
                                text: "8' - 30$",
                                value: "catch2",
                              }, 
                              cancel: "Cancel",
                            },
                    })
                    .then((value) => {
                        switch (value) {
                       
                          case "catch1":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[3].textContent);
                                localStorage.setItem("cakeDesc", desc[3].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 25;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                          case "catch2":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[3].textContent);
                                localStorage.setItem("cakeDesc", desc[3].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 30;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                        //   default:
                        //     swal("Hello!","Choose a size of cake again", "info");
                        }
                    });  
                }
                else if(index == 4){
                    swal({
                        title:"Choose the size of the cake",
                        icon: "info",
                        buttons: {
                              catch: {
                                text: "6' - 25$",
                                value: "catch1",
                              },
                              catch2: {
                                text: "8' - 30$",
                                value: "catch2",
                              }, 
                              cancel: "Cancel",
                            },
                    })
                    .then((value) => {
                        switch (value) {
                       
                          case "catch1":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[4].textContent);
                                localStorage.setItem("cakeDesc", desc[4].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 25;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                          case "catch2":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[4].textContent);
                                localStorage.setItem("cakeDesc", desc[4].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 30;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                        //   default:
                        //     swal("Hello!","Choose a size of cake again", "info");
                        }
                    });   
                }
                else if(index == 5){
                    swal({
                        title:"Choose the size of the cake",
                        icon: "info",
                        buttons: {
                              catch: {
                                text: "6' - 25$",
                                value: "catch1",
                              },
                              catch2: {
                                text: "8' - 30$",
                                value: "catch2",
                              }, 
                              cancel: "Cancel",
                            },
                    })
                    .then((value) => {
                        switch (value) {
                       
                          case "catch1":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[5].textContent);
                                localStorage.setItem("cakeDesc", desc[5].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 25;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                          case "catch2":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[5].textContent);
                                localStorage.setItem("cakeDesc", desc[5].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 30;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                        //   default:
                        //     swal("Hello!","Choose a size of cake again", "info");
                        }
                    });  
                }
                else if(index == 6){
                    swal({
                        title:"Choose the size of the cake",
                        icon: "info",
                        buttons: {
                              catch: {
                                text: "6' - 25$",
                                value: "catch1",
                              },
                              catch2: {
                                text: "8' - 30$",
                                value: "catch2",
                              }, 
                              cancel: "Cancel",
                            },
                    })
                    .then((value) => {
                        switch (value) {
                       
                          case "catch1":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[6].textContent);
                                localStorage.setItem("cakeDesc", desc[6].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 25;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                          case "catch2":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[6].textContent);
                                localStorage.setItem("cakeDesc", desc[6].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 30;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                        //   default:
                        //     swal("Hello!","Choose a size of cake again", "info");
                        }
                    }); 
                }
                else if(index == 7){
                    swal({
                        title:"Choose the size of the cake",
                        icon: "info",
                        buttons: {
                              catch: {
                                text: "6' - 25$",
                                value: "catch1",
                              },
                              catch2: {
                                text: "8' - 30$",
                                value: "catch2",
                              }, 
                              cancel: "Cancel",
                            },
                    })
                    .then((value) => {
                        localStorage.clear();
                        switch (value) {
                       
                          case "catch1":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[7].textContent);
                                localStorage.setItem("cakeDesc", desc[7].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 25;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                          case "catch2":
                            swal({
                                title:"Size is confirmed",
                                text: "Press 'OK' to continue",
                                icon: "success"
                            }).then(function(){
                                var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";
                               

                                localStorage.setItem("cake1", main.src);
                                localStorage.setItem("cakeNm", nm[7].textContent);
                                localStorage.setItem("cakeDesc", desc[7].textContent);
                                localStorage.setItem("cakeSize", size);
                                console.log(index);
                                let val = 30;
                                localStorage.setItem("val",val);
                                window.location.href = "./cart.html"; 
                            });
                            break;
                       
                        //   default:
                        //     swal("Hello!","Choose a size of cake again", "info");
                        }
                    });
                }
                // else if(index == 8){
                //     swal({
                //         title:"Choose the size of the cake",
                //         icon: "info",
                //         buttons: {
                //               catch: {
                //                 text: "6' - 25$",
                //                 value: "catch1",
                //               },
                //               catch2: {
                //                 text: "8' - 30$",
                //                 value: "catch2",
                //               }, 
                //               cancel: "Cancel",
                //             },
                //     })
                //     .then((value) => {
                //         localStorage.clear();
                //         switch (value) {
                       
                //           case "catch1":
                //             swal({
                //                 title:"Size is confirmed",
                //                 text: "Press 'OK' to continue",
                //                 icon: "success"
                //             }).then(function(){
                //                 var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 6'";

                //                 localStorage.setItem("cake1", main.src);
                //                 //cake name
                //                 localStorage.setItem("cakeNm", nm[8].textContent);
                //                 //description
                //                 localStorage.setItem("cakeDesc", desc[8].textContent);
                              
                //                 localStorage.setItem("cakeSize", size);
                //                 console.log(index);
                //                 //price
                //                 let val = 25;
                //                 localStorage.setItem("val",val);
                //                 window.location.href = "./cart.html"; 
                //             });
                //             break;
                       
                //           case "catch2":
                //             swal({
                //                 title:"Size is confirmed",
                //                 text: "Press 'OK' to continue",
                //                 icon: "success"
                //             }).then(function(){
                //                 var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";
                               

                //                 localStorage.setItem("cake1", main.src);
                //                 localStorage.setItem("cakeNm", nm[8].textContent);
                //                 localStorage.setItem("cakeDesc", desc[8].textContent);
                //                 localStorage.setItem("cakeSize", size);
                //                 console.log(index);
                //                 let val = 30;
                //                 localStorage.setItem("val",val);
                //                 window.location.href = "./cart.html"; 
                //             });
                //             break;
                       
                //         //   default:
                //         //     swal("Hello!","Choose a size of cake again", "info");
                //         }
                //     });
                // }
            }
        })


        // DOUBLE FLAVOR CLICK
            round.onclick = function(){
                Swal.fire({
                    title: "Please choose 2 flavors you want",
                    text: "Please choose between: Chocolate, Mocha, Mango Cake, Ube Macapuno and Ube Yema",
                    input: 'text',
                    confirmButtonText: "8' - 40$",
                    showCancelButton: true,
                    cancelButtonText: "Cancel",
                    inputValidator: (value) => {
                        if (!value) {
                          return 'You need to write something!'
                        }
                        if(value.length > 20){
                          return 'Too many flavors!'
                        }
                      }
                }).then((result) => {
                    if(result.isConfirmed){
                        Swal.fire({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8'";
                            var flavors = document.getElementsByTagName("P").innerHtml = "Flavors: " + result.value;
                            
    
                            localStorage.setItem("cake1", round.src);
                            localStorage.setItem("cakeNm", ckName.textContent);
                            localStorage.setItem("cakeDesc", descrip.textContent);
                            localStorage.setItem("cakeSize", size);
                            localStorage.setItem("cakeFlavor", flavors);
                            let val = 40;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                        });
                    }
                });
                
            }
}
roundCk();

function rollCk(){
    const roll = document.querySelectorAll("#roll")
    const nm = document.querySelectorAll("#ck1");
    const desc = document.querySelectorAll("#dsc1")

    roll.forEach(function(roll, index){
        roll.onclick = function(){
            if(index == 0){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "half - 15$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: half";

                            localStorage.setItem("cake1", roll.src);
                            localStorage.setItem("cakeNm", nm[0].textContent);
                            localStorage.setItem("cakeDesc", desc[0].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 15;
                            localStorage.setItem("val",val);
                           window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });

            }else if(index == 1){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "half - 15$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: half";

                            localStorage.setItem("cake1", roll.src);
                            localStorage.setItem("cakeNm", nm[1].textContent);
                            localStorage.setItem("cakeDesc", desc[1].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 15;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });
            }else if(index == 2){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "half - 15$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: half";

                            localStorage.setItem("cake1", roll.src);
                            localStorage.setItem("cakeNm", nm[2].textContent);
                            localStorage.setItem("cakeDesc", desc[2].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 15;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });
            }
        }
    })
}
rollCk();

function dreamCk(){
    const nm = document.querySelectorAll("#ck2");
    const img = document.querySelectorAll("#dr");
    const desc = document.querySelectorAll('#dsc2');
    img.forEach(function(dream, index){
        dream.addEventListener('click', (e)=>{
            if(index == 0){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "8' - 35$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8 inch";

                            localStorage.setItem("cake1", dream.src);
                            localStorage.setItem("cakeNm", nm[0].textContent);
                            localStorage.setItem("cakeDesc", desc[0].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 15;
                            localStorage.setItem("val",val);
                           window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });

            }else if(index == 1){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "8' - 35$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8 inch";

                            localStorage.setItem("cake1", dream.src);
                            localStorage.setItem("cakeNm", nm[1].textContent);
                            localStorage.setItem("cakeDesc", desc[1].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 35;
                            localStorage.setItem("val",val);
                           window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });
            }else if(index == 2){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "8' - 35$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8 inch";

                            localStorage.setItem("cake1", dream.src);
                            localStorage.setItem("cakeNm", nm[2].textContent);
                            localStorage.setItem("cakeDesc", desc[2].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 35;
                            localStorage.setItem("val",val);
                           window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });
            }else if(index == 3){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "8' - 35$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8 inch";

                            localStorage.setItem("cake1", dream.src);
                            localStorage.setItem("cakeNm", nm[3].textContent);
                            localStorage.setItem("cakeDesc", desc[3].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 35;
                            localStorage.setItem("val",val);
                           window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });
            }else if(index == 4){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "8' - 25$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8 inch";

                            localStorage.setItem("cake1", dream.src);
                            localStorage.setItem("cakeNm", nm[4].textContent);
                            localStorage.setItem("cakeDesc", desc[4].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 35;
                            localStorage.setItem("val",val);
                           window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });
            }else if(index == 5){
                swal({
                    title:"Choose the size of the cake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "8'- 25$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Size of the cake: 8 inch";

                            localStorage.setItem("cake1", dream.src);
                            localStorage.setItem("cakeNm", nm[5].textContent);
                            localStorage.setItem("cakeDesc", desc[5].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 25;
                            localStorage.setItem("val",val);
                           window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });
            }
        });
    })
}
dreamCk();

function cupCk(){
    const cupcake = document.querySelectorAll("#cup");
    const nm = document.querySelectorAll("#ck3");
    let desc = document.querySelectorAll("#dsc3");

    cupcake.forEach(function(cup, index){
        cup.onclick = function(){
            if(index == 0){
                swal({
                    title:"Choose if you want casual or customized cupcake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "Plain-2.00$/pc",
                            value: "catch1",
                          },
                          catch2: {
                            text: "Customized-2.50$/pcs",
                            value: "catch2",
                          }, 
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                   
                      case "catch1":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 24$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 48$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[0].textContent);
                                    localStorage.setItem("cakeDesc", desc[0].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 24;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[0].textContent);
                                    localStorage.setItem("cakeDesc", desc[0].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 48;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              default:
                                swal({
                                    title:"Choose a cake please!",
                                    icon: "info",
                                    confirmButton: false,
                                    timer: 2000
                                });
                            }
                        }); 
                        break;
                   
                      case "catch2":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 30$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 60$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[0].textContent);
                                    localStorage.setItem("cakeDesc", desc[0].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 30;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[0].textContent);
                                    localStorage.setItem("cakeDesc", desc[0].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 60;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              default:
                                swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                    //   default:
                    //     swal({
                    //         title:"Choose a  please!",
                    //         text:" ",
                    //         icon: "info",
                    //         button: false,
                    //         timer: 2000
                    //     });
                    }
                }); 
            }else if(index == 1){
                swal({
                    title:"Choose if you want casual or customized cupcake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "Plain -2.00$/pc",
                            value: "catch1",
                          },
                          catch2: {
                            text: "Customized-2.50$/pcs",
                            value: "catch2",
                          }, 
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                   
                      case "catch1":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 24$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 48$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[1].textContent);
                                    localStorage.setItem("cakeDesc", desc[1].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 24;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[1].textContent);
                                    localStorage.setItem("cakeDesc", desc[1].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 48;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                            //   default:
                            //     swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                      case "catch2":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 30$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 60$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[1].textContent);
                                    localStorage.setItem("cakeDesc", desc[1].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 30;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[1].textContent);
                                    localStorage.setItem("cakeDesc", desc[1].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 60;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                            //   default:
                            //     swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                }); 
            }else if(index == 2){
                swal({
                    title:"Choose if you want casual or customized cupcake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "Plain-2.00$/pc",
                            value: "catch1",
                          },
                          catch2: {
                            text: "Customized-2.50$/pcs",
                            value: "catch2",
                          }, 
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                   
                      case "catch1":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 24$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 48$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[2].textContent);
                                    localStorage.setItem("cakeDesc", desc[2].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 24;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[2].textContent);
                                    localStorage.setItem("cakeDesc", desc[2].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 48;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                            //   default:
                            //     swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                      case "catch2":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 30$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 60$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[2].textContent);
                                    localStorage.setItem("cakeDesc", desc[2].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 30;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[2].textContent);
                                    localStorage.setItem("cakeDesc", desc[2].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 60;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                            //   default:
                            //     swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                }); 
            }else if(index == 3){
                swal({
                    title:"Choose if you want casual or customized cupcake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "Plain-2.00$/pc",
                            value: "catch1",
                          },
                          catch2: {
                            text: "Customized-2.50$/pcs",
                            value: "catch2",
                          }, 
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                   
                      case "catch1":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 24$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 48$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[2].textContent);
                                    localStorage.setItem("cakeDesc", desc[2].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 24;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[2].textContent);
                                    localStorage.setItem("cakeDesc", desc[2].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 48;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              // default:
                              //   swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                      case "catch2":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 30$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 60$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[2].textContent);
                                    localStorage.setItem("cakeDesc", desc[2].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 30;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[2].textContent);
                                    localStorage.setItem("cakeDesc", desc[2].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 60;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              // default:
                              //   swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                      // default:
                      //   swal("Hello!","Choose a size of cake again", "info");
                    }
                }); 
            }else if(index == 4){
                swal({
                    title:"Choose if you want casual or customized cupcake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "Plain-2.00$/pc",
                            value: "catch1",
                          },
                          catch2: {
                            text: "Customized-2.50$/pcs",
                            value: "catch2",
                          }, 
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                   
                      case "catch1":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 24$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 48$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[4].textContent);
                                    localStorage.setItem("cakeDesc", desc[4].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 24;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[4].textContent);
                                    localStorage.setItem("cakeDesc", desc[4].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 48;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                            //   default:
                            //     swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                      case "catch2":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 30$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 60$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 12pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[4].textContent);
                                    localStorage.setItem("cakeDesc", desc[4].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 30;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 24pcs";
    
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[4].textContent);
                                    localStorage.setItem("cakeDesc", desc[4].textContent);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 60;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                            //   default:
                            //     swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                }); 
            }else if(index == 5){
                swal({
                    title:"Choose if you want casual or customized cupcake",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "Plain-2.00$/pc",
                            value: "catch1",
                          },
                          catch2: {
                            text: "Customized-2.50$/pcs",
                            value: "catch2",
                          }, 
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                   
                      case "catch1":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 24$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 48$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 12pcs";
                                    var descs = document.getElementById("dscs3");
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[5].textContent);
                                    localStorage.setItem("cakeDesc", descs);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(desc[5]);
                                    let val = 24;
                                    localStorage.setItem("val",val);
                                    window.location.href = "cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Casual - 24pcs";
                                    var descs = document.getElementById("dscs3");
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[5].textContent);
                                    localStorage.setItem("cakeDesc", descs);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 48;
                                    localStorage.setItem("val",val);
                                    window.location.href = "cart.html"; 
                                });
                                break;
                           
                            //   default:
                            //     swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                      case "catch2":
                        swal({
                            title:"Choose the size of the cake",
                            icon: "info",
                            buttons: {
                                  catch: {
                                    text: "12pcs - 30$",
                                    value: "catch1",
                                  },
                                  catch2: {
                                    text: "24pcs - 60$",
                                    value: "catch2",
                                  }, 
                                  cancel: "Cancel",
                                },
                        })
                        .then((value) => {
                            switch (value) {
                           
                              case "catch1":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 12pcs";
                                    var descs = document.getElementById("dscs3");
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[5].textContent);
                                    localStorage.setItem("cakeDesc", descs);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 30;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                              case "catch2":
                                swal({
                                    title:"Size is confirmed",
                                    text: "Press 'OK' to continue",
                                    icon: "success"
                                }).then(function(){
                                    var size = document.getElementsByTagName("P").innerHtml = "Cupcake type and pieces: Customized - 24pcs";
                                    var descs = document.getElementById("dscs3");
                                    localStorage.setItem("cake1", cup.src);
                                    localStorage.setItem("cakeNm", nm[5].textContent);
                                    localStorage.setItem("cakeDesc", descs);
                                    localStorage.setItem("cakeSize", size);
                                    console.log(index);
                                    let val = 60;
                                    localStorage.setItem("val",val);
                                    window.location.href = "./cart.html"; 
                                });
                                break;
                           
                            //   default:
                            //     swal("Hello!","Choose a size of cake again", "info");
                            }
                        }); 
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                }); 
            }
        }
    })
}
cupCk();

function sweetBt(){
    const sweet = document.querySelectorAll("#sweet");
    const nm = document.querySelectorAll("#ck4");
    const desc = document.querySelectorAll('#dsc4')
    sweet.forEach(function(swt, index){
        swt.onclick = function(){
            if(index == 0){
                swal({
                    title:"Choose how many pieces ",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "6pcs - 24$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Quantity: 6pcs";

                            localStorage.setItem("cake1", swt.src);
                            localStorage.setItem("cakeNm", nm[0].textContent);
                            localStorage.setItem("cakeDesc", desc[0].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 24;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                                    });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });

            }else if(index == 1){
                swal({
                    title:"Choose how many pieces",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "24pcs - 8$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Quantity: 8pcs";

                            localStorage.setItem("cake1", swt.src);
                            localStorage.setItem("cakeNm", nm[1].textContent);
                            localStorage.setItem("cakeDesc", desc[1].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 24;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                                    });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });
            }else if(index == 2){
                swal({
                    title:"Choose how many pieces",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "7pcs - 10$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Quantity: 7pcs";

                            localStorage.setItem("cake1", swt.src);
                            localStorage.setItem("cakeNm", nm[2].textContent);
                            localStorage.setItem("cakeDesc", desc[2].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 10;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                                    });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                }); 
            }else if(index == 3){
                swal({
                    title:"Choose how many pieces",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "7pcs - 12$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Quantity: 7pcs";
                            localStorage.setItem("cake1", swt.src);
                            localStorage.setItem("cakeNm", nm[3].textContent);
                            localStorage.setItem("cakeDesc", desc[3].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 12;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                                    });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });  
            }else if(index == 4){
                swal({
                    title:"Choose how many pieces",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "7pcs - 12$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Quantity: 7pcs";

                            localStorage.setItem("cake1", swt.src);
                            localStorage.setItem("cakeNm", nm[4].textContent);
                            localStorage.setItem("cakeDesc", desc[4].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 12;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                                    });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });  
            }else if(index == 5){
                swal({
                    title:"Choose how many pieces",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "7pcs - 12$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                            var size = document.getElementsByTagName("P").innerHtml = "Quantity: 7pcs";

                            localStorage.setItem("cake1", swt.src);
                            localStorage.setItem("cakeNm", nm[5].textContent);
                            localStorage.setItem("cakeDesc", desc[5].textContent);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 12;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                                    });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });  
            
            }else if(index == 6){
                swal({
                    title:"Choose how many pieces",
                    icon: "info",
                    buttons: {
                          catch: {
                            text: "7pcs - 12$",
                            value: "catch1",
                          },
                          cancel: "Cancel",
                        },
                })
                .then((value) => {
                    switch (value) {
                      case "catch1":
                        swal({
                            title:"Size is confirmed",
                            text: "Press 'OK' to continue",
                            icon: "success"
                        }).then(function(){
                             var size = document.getElementsByTagName("P").innerHtml = "Quantity: 7pcs";
                             var matcha = document.getElementById("dsc5").textContent;

                            localStorage.setItem("cake1", swt.src);
                            localStorage.setItem("cakeNm", nm[6].textContent);
                            localStorage.setItem("cakeDesc",matcha);
                            localStorage.setItem("cakeSize", size);
                            console.log(index);
                            let val = 12;
                            localStorage.setItem("val",val);
                            window.location.href = "./cart.html"; 
                        });
                        break;
                   
                    //   default:
                    //     swal("Hello!","Choose a size of cake again", "info");
                    }
                });  
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


    // whatsNews.addEventListener('click', ()=>{
    //     watsnew.classList.remove("wActive2");
    //     roundcake.classList.remove("rActive");
    //     rollcake.classList.remove("rcActive");
    //     dreamcake.classList.remove("dcActive");
    //     cupcake.classList.remove("cActive");
    //     sweetbites.classList.remove("sActive");
    // })
    roundCakes.addEventListener('click', ()=>{
      //  watsnew.classList.add("wActive2");
        roundcake.classList.remove("rActive");
        rollcake.classList.remove("rcActive");
        dreamcake.classList.remove("dcActive");
        cupcake.classList.remove("cActive");
        sweetbites.classList.remove("sActive");
    })
    rollCakes.addEventListener('click', ()=>{
      //  watsnew.classList.add("wActive2");
        roundcake.classList.add("rActive");
        rollcake.classList.add("rcActive");
        dreamcake.classList.remove("dcActive");
        cupcake.classList.remove("cActive");
        sweetbites.classList.remove("sActive");
    })
    dreamCakes.addEventListener('click', ()=>{
    // watsnew.classList.add("wActive2");
        rollcake.classList.remove("rcActive");
        roundcake.classList.add("rActive");
        dreamcake.classList.add("dcActive");
        cupcake.classList.remove("cActive");
        sweetbites.classList.remove("sActive");
    })
    cupCakes.addEventListener('click', ()=>{
      //  watsnew.classList.add("wActive2");
        rollcake.classList.remove("rcActive");
        roundcake.classList.add("rActive");
        dreamcake.classList.remove("dcActive");
        cupcake.classList.add("cActive");
        sweetbites.classList.remove("sActive");
            
    })
    sweetBites.addEventListener('click', ()=>{
      //  watsnew.classList.add("wActive2");
        rollcake.classList.remove("rcActive");
        roundcake.classList.add("rActive");
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
    const logo = document.getElementById("lg");


    logo.onclick = function(){
        location.href = "index.html";
    }

    ourcakes.onclick = function(){
        location.href = "#navbar";
    }
    orders.onclick = function(){
      location.href = "aboutus.html"
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
}
btn();