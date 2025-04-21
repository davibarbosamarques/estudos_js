function conta(operador, contador, ...numeros) {
    // console.log(operador, contador, numeros)
    for(let num of numeros){
        if(operador === "+") contador += num;
        if(operador === "-") contador -= num;
        if(operador === "/") contador /= num;
        if(operador === "*") contador *= num;
    }
    console.log(contador)

}

conta("*", 100, 1,2,3,4,5)

