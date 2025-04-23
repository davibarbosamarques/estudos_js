const people = [
    {nome: "Davi", idade: 19},
    {nome: "Carol", idade: 17},
    {nome: "Carlos", idade: 20}
]

const maisCinco = people.filter((evento) =>{
    if(evento.nome.length > 4){
        console.log(evento.nome)
    }
})

const maisDezoito = people.filter((evento) =>{
    if(evento.idade > 18){
        console.log(`o ${evento.nome} é de maior tem ${evento.idade}`)
    }
})

const terminaComA = people.filter((evento) =>{
    if(evento.nome.endsWith('i')){
        console.log(evento.nome + ' termina com i')
    }
})