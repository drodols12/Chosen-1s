const clickme = document.querySelectorAll('.news');

function clickMe(){

    
    clickme.forEach(function(click,index){
        click.onclick = ()=>{
            if(index == 0 ){
                window.location.href =  "cakepage.html#rollCake"; 
            }else if(index == 1 ){
                window.location.href =  "cakepage.html#dcCake"; 
            }else if(index == 2 ){
                window.location.href =  "cakepage.html#cupCake"; 
            }else if(index == 3 ){
                window.location.href =  "cakepage.html#sweetBts"; 
            }
        }
    })
    window.onload = ()=>{
        if(window.location.href.indexOf("rollCake") > -1){
            roundcake.classList.add("rActive");
                window.onload = ()=>{
                    rollCakes.onclick = ()=>{
                       
                        rollcake.classList.add("rcActive");
                        
                    }
            }
        }else if(window.location.href.indexOf("dcCake") > -1){
            roundcake.classList.add("rActive");
           
            dreamCakes.onclick = ()=>{
                dreamcake.classList.add("dcActive");
            }
            

        
        }else if(window.location.href.indexOf("cupCake") > -1){
            roundcake.classList.add("rActive");
            cupCakes.onclick = ()=>{
                cupcake.classList.add("cActive");
            }
        
        }else if(window.location.href.indexOf("sweetBts") > -1){
            roundcake.classList.add("rActive");
            window.onload = function(){
                sweetBites.onclick = ()=>{
                    sweetbites.classList.add("sActive");
                }
            }
        }
    }
    

}

clickMe();