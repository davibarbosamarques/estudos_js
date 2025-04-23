const people = [
    {nome: "Matheus", idade: 25},
    {nome: "Leticia", idade: 30},
    {nome: "Maria", idade: 40}
]

const nomePessoa = people.map(evento => evento.nome)
console.log(nomePessoa)

const addId = people.map((evento, indice) => {
    evento.id = indice
    return evento
})
console.log(people)

const deleteNome = people.map(evento => delete evento.nome)
console.log(people)