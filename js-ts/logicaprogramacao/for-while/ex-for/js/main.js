const elementos = [
    {tag: 'p', texto: 'frase01'},
    {tag: 'div', texto: "frase02"},
    {tag: 'footer', texto: "frase03"},
    {tag: 'section', texto: "frase04"}
];

const container = document.querySelector(".container");

for(let i = 0; i < elementos.length; i++){
    container.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`
}