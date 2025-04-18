const people = [
    {nome: "Davi", idade: 19},
    {nome: "Marta", idade: 25},
    {nome: "Carlos", idade: 25}
]

let separador = people.reduce((contador, valorAtual) => {
    
    contador[valorAtual.idade] = contador[valorAtual.idade] || []
    contador[valorAtual.idade].push(valorAtual.nome)

    return contador
}, {})

console.log(separador)