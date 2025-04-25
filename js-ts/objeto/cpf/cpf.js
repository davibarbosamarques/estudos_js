let cpf = "705.484.450-82"
let cpfLimpo = cpf.replace(/\D+/g, '')

let cpfArray = Array.from(cpfLimpo)

let tirandoUm = cpfArray.splice(9, 1)
let tirandoDois = cpfArray.splice(9, 2)


function contaValidadora(valor, resultado){
    return 11 - (valor % 11) == resultado
}

function primeiraSoma(){

    let contador = 0;
    let i = 10;

    for(chave of cpfArray){
        contador += chave * i
        i--
    }

    return contaValidadora(contador, tirandoUm)

}

function segundaSoma(){
    let arrayComp = [...cpfArray, ...tirandoUm]

    let contador = 0;
    let i = 11;

    for(chave of arrayComp){
        contador += chave * i
        i--
    }

    return contaValidadora(contador, tirandoDois)

}

if(primeiraSoma() === true && segundaSoma() === true){
    console.log("CPF validado")
}else{
    console.log("CPF invalido")
}