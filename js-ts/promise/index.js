function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

esperaAi('frase 1', rand(1, 3))
esperaAi('frase 2', rand(1, 3))
esperaAi('frase 3', rand(1, 3))