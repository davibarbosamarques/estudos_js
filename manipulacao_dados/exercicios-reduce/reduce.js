let values = [1.5, 2, 5, 7]

function callback(acumulador, currentValue, index, array){
    console.log(`acumulador`, acumulador)
    console.log(`currentValue`, currentValue)
    console.log(`index`, index)
    console.log(`array`, array)
    console.log("-----")

    return acumulador + 1
}

values.reduce(callback)