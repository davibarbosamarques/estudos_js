function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        Enumerator: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito01 = this.criaDigito(cpfParcial)
    const digito02 = this.criaDigito(cpfParcial + digito01)

    const novoCpf = cpfParcial + digito01 + digito02
    return novoCpf === this.cpfLimpo

    console.log(digito02)

    return true
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor))
        regressivo--
        return ac
    }, 0)
    const digito = 11 - (total % 11)
    return digito > 9 ? 0 : digito;
    console.log(digito)
}

ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCpf('705.484.450-52')
// console.log(cpf.cpfLimpo)
// console.log(cpf.valida())

if(cpf.valida()){
    console.log("CPF validado")
}else{
    console.log("CPF invalido")
}