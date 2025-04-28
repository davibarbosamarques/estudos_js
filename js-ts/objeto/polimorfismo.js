function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo Insuficiente ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`${this.agencia}/${this.conta}  Saldo: R$${this.saldo.toFixed(2)}`) 
}

// const conta01 = new Conta(11, 10, 100)
// console.log(conta01)

// conta01.depositar(100)
// conta01.sacar(300)

function contaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
contaCorrente.prototype = Object.create(Conta.prototype)
contaCorrente.prototype.costructor = contaCorrente

contaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo Insuficiente ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

const cc = new contaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(100)

