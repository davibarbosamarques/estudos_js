const ePaisagem = (altura, largura) =>{
    if(altura === 1280 && largura === 720){
        return true
    }else{
        return false
    }
}

console.log(ePaisagem(1280,720))