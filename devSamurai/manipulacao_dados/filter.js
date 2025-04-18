const numbers = [10, 18, 1, 15]

const res = numbers.filter((item) => (item > 10))

//console.log(res)

const people = [
    {name: "Davi", sexo: "M", idade: 18},
    {name: "Bianca", sexo: "F", idade: 22},
    {name: "Carlos", sexo: "M", idade: 16}
]

const n = people.filter((pessoa) => (pessoa.idade >= 18))
console.log(n)

const alistamento = people.filter(
    (pessoa) => (pessoa.idade >= 18 && pessoa.sexo === "M")
)
console.log(alistamento)