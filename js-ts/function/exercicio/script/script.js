function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")

    const pessoas = []

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector(".nome"); 
        const sobrenome = form.querySelector(".sobrenome"); 
        const peso = form.querySelector(".peso"); 
        const altura = form.querySelector(".altura"); 

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} tem ${peso.value}kg e ${altura.value} de altura</p>`

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas)
    }

    form.addEventListener("submit", recebeEventoForm)
}
meuEscopo()