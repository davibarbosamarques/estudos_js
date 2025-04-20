const pessoa = {
    nome: "Davi",
    sobrenome: "Barbosa",
    idade: 19,
    endereco: {
        rua: "Av Brasil",
        numero: 1000
    }
};

const {nome, endereco: {rua, numero}} = pessoa;
console.log(nome, rua)