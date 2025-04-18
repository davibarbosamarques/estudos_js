//function saudar(nome, cb){}
const saudar = (nome, cb) => {
    const horaAtual = new Date().getHours()

    if(horaAtual <=12){return cb("Bom dia", nome)}
    if(horaAtual <=18){return cb("Bom tarde", nome)}
    else{return cb("Boa noite", nome)}
}
/*
----------ESSA-É-A-PRIMEIRA-FORMA-DE-USAR-CB------------------------------
const responderCallbacks = (saudacao, nome) => console.log(saudacao, nome)
saudar("Davi", responderCallbacks)
*/

/*
---------ESSA-É-A-SEGUNDA-E-MENOS-INDICADA-FORMA-DE-USAR-CB---------------
function responderCallbacks(saudacao, nome){
    console.log(saudacao, nome)
}

saudar("Davi", responderCallbacks)
*/
//------ESSA-É-A-TERCEIRA-E-MAIS-INDICADA-FORMA-DE-USAR-CB----------------
saudar("Davi", (saudacao, nome) => console.log(saudacao, nome))
