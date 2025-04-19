// AS 3 FORMAS DE FAZER UMA FUNÇÃO
function somar(x, y){
    return x + y
}
console.log(`a soma é igual a: ${somar(2, 2)}`)

// FORMA 2
const raizQuadrada = function (num) {
    return num ** 0.5
}
console.log(`a raiz quadrada é igual a: ${raizQuadrada(9)}`)

// FORMA 3
const multiplicar = (valor1, valor2) => {
    return valor1 * valor2
}
console.log(`a multiplicação é igual a: ${multiplicar(4, 5)}`)