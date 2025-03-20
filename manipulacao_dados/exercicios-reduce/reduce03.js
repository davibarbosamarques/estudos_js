const item = [
    {name: "mouse", qtd: 2, preco: 1},
    {name: "teclado", qtd: 1, preco: 2},
    {name: "monitor", qtd: 3, preco: 2}
]

let total = item.reduce((acumulador, valorAtual) => {
   return acumulador += valorAtual.qtd * valorAtual.preco
}, 0)
console.log(total)