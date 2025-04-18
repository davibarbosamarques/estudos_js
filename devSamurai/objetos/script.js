const pessoa = {
    nome: "Davi", 
    idade:  19,

    endereco: {
        rua: "Padre pedro de alencar",
        bairro: "Messejana"
    }
}

pessoa.cabelo = "cacheado"

console.log(pessoa)
console.log(`${pessoa.nome} mora na rua ${pessoa.endereco.rua}`)