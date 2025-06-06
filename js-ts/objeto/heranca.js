function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * percentual / 100)
}

const camiseta = new Camiseta("regata", 10, "black")

camiseta.aumento(50)

console.log(camiseta)