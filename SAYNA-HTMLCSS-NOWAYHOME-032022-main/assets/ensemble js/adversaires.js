$(document).ready(function(){
    $("#marveltext").fadeIn(),
    $("#marveltext").animate({
        left:"400px"
    })
})

/*scroll*/

$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $("#marvelimage").css("top",scroll +"px");
    })
})

/*afficher le popup box*/

var modal = document.getElementById("myModal")

var sendmodal = document.getElementById("sendmodal")
sendmodal.onclick = function(){
    modal.style.display = "block";
}


/*pour fermer le popup box ouvert*/

$(document).ready(function(){
    $(".btn-danger").click(function(){
        $("#myModal").animate({
            height:"toggle"
        })
    })
})

/* effet zoom
let cardzoom = document.getElementById("zoom");

console.log(cardzoom)

    /*for ( let i =0; i<cardzoom.length; i++){
        cardzoom[i].addEventListener("mouseover",()=>{
            cardzoom[i].style.transform="scale(2.5)";
        });
        cardzoom[i].addEventListener("mouseout",()=>{
            cardzoom[i].style.transform="none";    
        });
    }*/

    let effetzoom = document.getElementsByClassName("effetzoom");
    console.log(effetzoom)

    for(let i =0; i<effetzoom.length;i++){
        effetzoom[i].addEventListener("mouseover",()=>{
            effetzoom[i].style.transform="scale(1.05)";
        })
        effetzoom[i].addEventListener("mouseout",()=>{
            effetzoom[i].style.transform="none";
        })
    }

    /*apparution de text*/

    $(document).ready(function(){
        $(".info").fadeIn(5000)
    })
    