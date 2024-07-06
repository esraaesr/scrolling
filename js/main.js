let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.querySelector('.nouvil');



window.onscroll = function(){
    let Value = scrollY;
stars.style.left=Value + "px";
moon.style.top = Value * 4 + "px";
mountains3.style.top = Value * 2 + "px";
mountains4.style.top = Value * 1.5 + "px";
river.style.top = Value + "px";
boat.style.top = Value + "px";
boat.style.left = Value *3 + "px";
nouvil.style.fontSize = Value + "px";
if(scrollY >=67){
    nouvil.style.fontSize = 67 + "px";
    nouvil.style.position = "fixed";
    if(scrollY>= 440){
        nouvil.style.display = "none";
    }else{
        nouvil.style.display = "block";
    }
    if(scrollY>= 127){
        document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)"
    }else{
        document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)"
    }
}


}




