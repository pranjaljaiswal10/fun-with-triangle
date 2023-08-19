let Base=document.getElementById("a=");
let Perpendicular=document.getElementById("b=");
let main=document.getElementsByTagName("main")[0];
let button=document.getElementById("btn");
function Hypotenuse(){
    let result=(Number(Base.value)*Number(Base.value))+(Number(Perpendicular.value)*Number(Perpendicular.value))
    let Hypotenuse=Math.sqrt(result);
   let span=document.createElement("span");
   let text=document.createTextNode("The length of hypotenuse is "+Hypotenuse+"cm");
   span.classList.add("answer")
   span.appendChild(text);
   main.appendChild(span);
}
button.addEventListener("click",Hypotenuse)