function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
   return this.preco = this.preco - (this.preco * percentual / 100)
}

const geladeira = new Produto("geladeira", 100)
geladeira.desconto(10)

const p2 = {
    nome: "caneca",
    preco: 10
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(50)

console.log(p2)