/*
const numbers = [1, 2, 3, 4, 5]

const dobrar = numbers.map((n) => (n * 2))
console.log(dobrar)
*/

const people = [
    {name: "Davi", idade: 19},
    {name: "carOl", idade: 9},
    {name: "lEvi", idade: 16}
]

const normalize = people.map((p) => p.name.toUpperCase())
console.log(normalize)