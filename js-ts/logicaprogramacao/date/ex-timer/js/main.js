function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
const container = document.querySelector(".container");
let relogio = container.querySelector("#relogio");

const buttonIniciar = container.querySelector("#button-iniciar");
const buttonPausar = container.querySelector("#button-pausar");
const buttonZerar = container.querySelector("#button-zerar");

let segundos = 0;
let time;

function rodarRelogio(){
    time = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos)
    }, 1000)
}

buttonIniciar.addEventListener("click", (event) =>{
    clearInterval(time)
    rodarRelogio()
    relogio.classList.remove('pausado')
})

buttonPausar.addEventListener("click", (event) =>{
    clearInterval(time)
    relogio.classList.add('pausado')

})

buttonZerar.addEventListener("click", (event) =>{
    segundos = 0;
    relogio.innerHTML = "00:00:00"
    clearInterval(time)
    relogio.classList.remove('pausado')
})

