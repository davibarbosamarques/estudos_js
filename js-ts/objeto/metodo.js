const produto = {
    nome: "chicara",
    preco: 18
}
const outraCoisa = {
    ...produto,
    material: "porcelana"
}
console.log(produto)
console.log(outraCoisa)