let form=document.getElementById("form");
let button=document.getElementById("btn")
let main=document.getElementsByTagName("main")[0];
const right=["90","right"];
let p = document.createElement("p");
p.classList.add("answer");
function Quiz(e){
    e.preventDefault();
let data=new FormData(form);
let index=0,score=0;

for (const i of data.values()) {
    if(i===right[index])
    {
        score++;
    }
    index++;
}
p.innerHTML="Your score is "+score;
main.appendChild(p);
}
button.addEventListener("click",Quiz)
