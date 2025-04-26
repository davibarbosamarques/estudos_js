function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo Insuficiente ${this.verSaldo}`)
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

const conta01 = new Conta(11, 10, 100)
// console.log(conta01)

// conta01.depositar(100)
conta01.sacar(300)