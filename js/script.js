let angle1=document.getElementById("angle1")
let angle2=document.getElementById("angle2")
let angle3=document.getElementById("angle3")
let button=document.getElementById("btn")
let main=document.getElementsByTagName("main")[0];
let body=document.body;
function isTriangle(){
    let sum=Number(angle1.value)+Number(angle2.value)+Number(angle3.value);
    if(sum===180)
    {
        let p=document.createElement("p");
        p.innerText="Your angle is right to form triangle";
        p.classList.add("answer");
        main.appendChild(p);
    }
}
button.addEventListener("click",isTriangle);

