let i = 0;
let myArray = ["heroslider1.png","heroslider2.png","heroslider3.png","heroslider4.png","heroslider5.png"]

/*console.log(myArray)*/
function sliderimg(){
    document.slider.src = "./assets/imgjs/"+ myArray[i];
    if(i<myArray.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("sliderimg()",2000);
}

window.onload = sliderimg;
