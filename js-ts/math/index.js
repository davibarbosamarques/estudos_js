let num = 9.48;

// arredonda para baixo
let num1 = Math.floor(num)
// arredonda para cima
let num2 = Math.ceil(num)
// arredonda para o mais proximo
let num3 = Math.round(num)

console.log(num1, num2, num3)
// math.max pega o maior numero da lista
console.log(Math.max(1,2,100,500,-3,3,5))
// math.min pega o menor numero da lista
console.log(Math.min(1,2,100,500,-3,3,5))

console.log(Math.round((Math.random() * 100) + 1))