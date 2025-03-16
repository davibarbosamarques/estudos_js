function mult(value, func){
    for(let i = 0;i < value.length; i++){
        value[i] = func(value[i])
    }
    return value
}

const value = [1,2,4]
const func = n => n * n

console.log(mult(value, func))