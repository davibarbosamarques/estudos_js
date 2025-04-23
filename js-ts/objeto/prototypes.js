function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + " " + this.sobrenome
}

const p1 = new Pessoa("Davi", "Barbosa")

console.log(p1)