function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: false //configuração e deletar
    })
}

const p1 = new Produto("camiseta", 10,20)
console.log(p1)