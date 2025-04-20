// o For In lê o indice do array ou chave do objeto
console.log("ARRAY:")
const frutas = ["Maçã", "Laranja", "Uva"];

for(let indice in frutas){
    console.log(frutas[indice])
}

console.log("------------")

console.log("OBJETO:")
const people = {
    nome: "Davi",
    sobrenome: "Barbosa",
    idade: 19
}

for(let chave in people){
    console.log(people[chave])
}