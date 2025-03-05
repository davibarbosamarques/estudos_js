function soma(){
    let resultado = 0 

    for(const num of arguments){
        resultado += num
    }
    return resultado
}

console.log(soma(2,3,5,6,7,8,9,10))