const num = [1, 10 ,20, 15, 4, 9, 12, 200]

const somarPares = num.reduce((contador, evento) => {
    if(evento % 2 === 0){
        contador += evento
    }
    return contador
}, 0)

console.log(somarPares)