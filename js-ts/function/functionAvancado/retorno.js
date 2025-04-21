function criaMultiplicador(multiplicador){
    return function (num){
        return num * multiplicador
    }
}
const duplica = criaMultiplicador(2) // num * 2
const triplica = criaMultiplicador(3) // num * 3

console.log(triplica(10)) // 10 * multiplicador