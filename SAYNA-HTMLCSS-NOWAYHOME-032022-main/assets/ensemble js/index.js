let btninverse = document.getElementsByClassName('btninverse');

console.log(btninverse);

for ( let i =0; i<btninverse.length; i++){
    btninverse[i].addEventListener("mouseover",()=>{
        btninverse[i].style.backgroundColor="#b11313";
        btninverse[i].style.color="#ffffff";
        btninverse[i].style.fontWeight ="bold";
        btninverse[i].style.boxShadow ="5px 5px 30px white";
    });
    btninverse[i].addEventListener("mouseout",()=>{
        btninverse[i].style.backgroundColor="#ffffff";
        btninverse[i].style.color="#b11313";
        btninverse[i].style.boxShadow = "none";
    });
}


let footericone=document.getElementsByClassName("footer-icones");
for ( let i =0; i<footericone.length; i++){
    footericone[i].addEventListener("mouseover",()=>{
        footericone[i].style.color="#ffffff";
    });
    footericone[i].addEventListener("mouseout",()=>{
        footericone[i].style.color="black";
    });
}


let menu = document.querySelectorAll("li");

menu.forEach(function(li){
    li.addEventListener("mouseover",()=>{
        li.style.textDecoration = "line-through";
    });
    li.addEventListener("mouseout",()=>{
        li.style.textDecoration = "none";
    });
})




$(document).ready(function(){
    $(".box").animate({
        left:"30px"
    });
    $(".description").fadeIn(5000)
})

