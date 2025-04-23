// Geter e seter na função construtora

function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra a chave
        configurable: false, //configuração e deletar
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(valor !== "number"){
                console.log("Bad")
            }
            // console.log(valor)
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto("camiseta", 10,20)
// console.log(p1)
p1.estoque = "udnicnnc"
console.log(p1.estoque)