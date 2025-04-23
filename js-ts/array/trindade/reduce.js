const num = [1, 10 ,20, 15, 4, 9, 12, 200]

const somarNum = num.reduce((acumulador, valor, indice, aray) => {
    acumulador += valor
    return acumulador
})

console.log(somarNum)