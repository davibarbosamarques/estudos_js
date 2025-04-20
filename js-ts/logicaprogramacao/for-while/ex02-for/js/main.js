const container = document.querySelector(".container");
const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const styleBody = getComputedStyle(document.body);
const backgroundStyleBody = styleBody.backgroundColor; 

for(chave of ps){
    chave.style.backgroundColor = backgroundStyleBody
    chave.style.color = "white"
}