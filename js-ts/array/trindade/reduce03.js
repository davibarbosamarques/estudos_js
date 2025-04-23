const people = [
    {nome: "Francisco", idade: 80},
    {nome: "Davi", idade: 19},
    {nome: "Carol", idade: 17},
    {nome: "Carlos", idade: 20},
    {nome: "Rosana", idade: 50},
    {nome: "Carla", idade: 17},
    {nome: "Bea", idade: 14},
]

const maisVelha = people.reduce((contador, valor) => {
    if(contador < valor.idade){
        contador = valor.idade
    }
    return contador
}, 0)

console.log(maisVelha)