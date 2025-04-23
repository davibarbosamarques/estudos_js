const pessoa = new Object();
pessoa.nome = "Davi"
pessoa.sobrenome = "Santos"
pessoa.idade = 25
pessoa.falarNome = function(){
    console.log(`${this.nome} esta dando oi`)
}
pessoa.dataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}
for(let chave in pessoa){
    console.log(pessoa[chave])
}
