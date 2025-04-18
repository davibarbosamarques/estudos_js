const nomes = ['Davi', 'Marcelo', 'Marta', 'Jonas', 'João', 'Jailson']

let iniciais = nomes.reduce((contador, valorAtual) => {
    const primeiraLetra = valorAtual[0].toLocaleLowerCase()

    if(contador[primeiraLetra]){
        contador[primeiraLetra]++
    }else{
        contador[primeiraLetra] = 1 
    }

    return contador
}, {})

console.log(iniciais)