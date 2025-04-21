// Factory Function (Função Fabrica)
function people(nome, sobrenome, peso, altura){
    return{
        nome,
        sobrenome,
        estafalando(){
            return `${this.nome} ${this.sobrenome} está falando`
        },
        peso,
        altura,
        imc(){
            let n = this.peso/(this.altura*this.altura)
            return `o imc do(a) ${this.nome} é ${n.toFixed(2)}`
        }

    }
}

const p1 = people("Davi", "Lucca", 70, 1.80)
console.log(p1.imc())

console.log(p1.nome)