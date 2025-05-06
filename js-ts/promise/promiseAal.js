function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE')
            return 
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - passei na promise')
            return
        }, tempo)
    })
}

const promise = [
    'primeiro valor',
    esperaAi("promise 1", 3000),
    esperaAi("promise 2", 500),
    esperaAi(10, 1000),
    'FIM'
]

Promise.all(promise)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })