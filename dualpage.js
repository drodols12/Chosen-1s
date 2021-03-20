
const clickme = document.querySelectorAll('.new');

function clickMe(){
    clickme.forEach(function(click,index){
        click.onclick = ()=>{
            if(index == 2 ){
                window.location.href =  "cakepage.html#rollCake"; 
            }else if(index == 3 ){
                window.location.href =  "cakepage.html#dcCake"; 
            }else if(index == 4 ){
                window.location.href =  "cakepage.html#cupCake"; 
            }else if(index == 5 ){
                window.location.href =  "cakepage.html#sweetBts"; 
            }
        }
    })
    window.onload = ()=>{
        if(window.location.href.indexOf("rollCake") > -1){
            roundcake.classList.add("unshow");
                window.onload = ()=>{
                    rollCakes.onclick = ()=>{
                        roundcake.classList.add("rActive");
                        rollcake.classList.add("rcActive");
                        dreamcake.classList.remove("dcActive");
                        cupcake.classList.remove("cActive");
                        sweetbites.classList.remove("sActive");
                    }
            }
        }else if(window.location.href.indexOf("dcCake") > -1){
            roundcake.classList.add("unshow");
           
            dreamCakes.onclick = ()=>{
                dreamcake.classList.add("dcActive");
            }
            

        
        }else if(window.location.href.indexOf("cupCake") > -1){
            roundcake.classList.add("unshow");
            cupCakes.onclick = ()=>{
                cupcake.classList.add("cActive");
            }
        
        }else if(window.location.href.indexOf("sweetBts") > -1){
            roundcake.classList.add("unshow");
            rollCakes.onclick = ()=>{
                sweetbites.classList.add("sActive");
            }
        }
    }
    

}

clickMe();