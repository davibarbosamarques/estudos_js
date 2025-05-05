class Tv{
    constructor(nome){
        this.nome = nome;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2
    }

    diminuirVolume(){
        this.volume -= 2
    }
    // Método estatico não recebe os dados do objeto pois não é chamado com new
    static trocarPilha(){
        console.log("ok, trocarei")
    }
}

const controle1 = new Tv("LG")

controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()

console.log(controle1)

Tv.trocarPilha()