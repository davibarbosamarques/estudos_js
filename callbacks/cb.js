//function saudar(nome, cb){}
const saudar = (nome, cb) => {
    const horaAtual = new Date().getHours()

    if(horaAtual <=12){return cb("Bom dia", nome)}
    if(horaAtual <=18){return cb("Bom tarde", nome)}
    else{return cb("Boa noite", nome)}
}
/*
const responderCallbacks = (saudacao, nome) => console.log(saudacao, nome)
saudar("Davi", responderCallbacks)
*/
saudar("Davi", (saudacao, nome) => console.log(saudacao, nome))
