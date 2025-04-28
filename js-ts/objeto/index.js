function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        Comer() {
            console.log(`${this.nome} esta comendo`)
        },

        Beber() {
            console.log(`${this.nome} esta bebendo`)
        },
        
        Dormir() {
            console.log(`${this.nome} esta dormindo`)
        }
    }
}

const pessoa01 = criaPessoa("Davi", "Barbosa")

console.log(pessoa01)
