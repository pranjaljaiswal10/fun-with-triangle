let base=document.getElementById("base");
let height=document.getElementById("height");
let button=document.getElementById("btn");
let main=document.getElementsByTagName("main")[0];
function Area(){
    let area=0.5*base.value*height.value;
    let p=document.createElement("p");
    p.classList.add("answer")
    p.innerHTML="The area of triangle is "+area+"cm<sup>2</sup>";
    main.appendChild(p);
}
button.addEventListener("click",Area);