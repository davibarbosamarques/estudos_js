// JUNTANDO ITENS DO ARRAY
const nomes = ["Davi", "Barbosa", "Marques"];
const nome = nomes.join(" ")
console.log(nome)

console.log("-----")

// excluindo item do array
const listaNomes = ["davi" , "carlos", "maria", "madalena"];
const pessoaExcluida = listaNomes.slice(0, -1)

console.log(listaNomes)
console.log(pessoaExcluida)


console.log("------")
// pegando string e transformando em array
const nomeCompleto = "Davi Barbosa Marques"
const names = nomeCompleto.split(" ")
console.log(names)
