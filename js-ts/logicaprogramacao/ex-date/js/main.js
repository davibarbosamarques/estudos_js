const data = document.getElementById("txt")

const dataAtual = new Date()

function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`;
}

const dia = dataAtual.getDate();
let mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
const hora = zeroAEsquerda(dataAtual.getHours());
const minuto = zeroAEsquerda(dataAtual.getMinutes());
let diaSemana = dataAtual.getDay();


function converterDiaSemana() {
    switch (diaSemana) {
        case 0:
            return diaSemana = "Domingo"
        case 1:
            return diaSemana = "Segunda-feira"
        case 2:
            return diaSemana = "Terça-feira"
        case 3:
            return diaSemana = "Quarta-feira"
        case 4:
            return diaSemana = "Quinta-feira"
        case 5:
            return diaSemana = "Sexta-feira"
        case 6:
            return diaSemana = "Sábado"
    }
}

function converterMes() {
    switch (mes) {
        case 0:
            return mes = "Janeiro"
        case 1:
            return mes = "Fevereiro"
        case 2:
            return mes = "Março"
        case 3:
            return mes = "Abril"
        case 4:
            return mes = "Maio"
        case 5:
            return mes = "Junho"
        case 6:
            return mes = "Julho"
        case 7:
            return mes = "Agosto"
        case 8:
            return mes = "Setembro"
        case 9:
            return mes = "Outubro"
        case 10:
            return mes = "Novembro"
        case 11:
            return mes = "Dezembro"
    }
}


const diaDaSemanaTxt = converterDiaSemana();
const diaDoMesTxt = converterMes();

console.log(diaDoMesTxt)
console.log(diaDaSemanaTxt)

data.innerText = `${diaDaSemanaTxt}, ${dia} ${diaDoMesTxt} de ${ano} ${hora}:${minuto}`