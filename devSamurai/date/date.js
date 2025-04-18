//pegando a data-completa (atual e de nascimento)
const dataNascimento = new Date("2006-02-22T16:30:00.000Z")
const hoje = new Date()

//pegando os anos (atual e nascimento)
const AnoAtual = hoje.getFullYear()
const AnoNascimento = dataNascimento.getFullYear()

//pegando os meses (atual e nascimento)
const MesAtual = hoje.getMonth() + 1
const mesNascimento = dataNascimento.getMonth() + 1

//pegando os dias (atual e nascimento)
const diaAtual = hoje.getDate()
const diaNascimento = dataNascimento.getDate()

//calculando a idade
var idade = AnoAtual - AnoNascimento

console.log(`vc nasceu em ${diaNascimento}/${mesNascimento}/${AnoNascimento}`)
console.log(`e tem ${idade}`)