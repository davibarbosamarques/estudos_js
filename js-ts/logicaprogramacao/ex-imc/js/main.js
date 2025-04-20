const buttonCalcular = document.querySelector("#button-calcular");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const resultado = document.querySelector("#resultado")
const form = document.querySelector("#form");

buttonCalcular.addEventListener("click", (evento) => {
    evento.preventDefault()

    const imc = inputPeso.value / (inputAltura.value * inputAltura.value);

    if (inputAltura.value === "" || inputPeso.value === "") {
        resultado.innerHTML = `<p style="background-color:red; color:white" >Todos os campos precisam ser preenchidos</p>`
    } else if (imc.toFixed(2) < 18.50) {
        resultado.innerHTML = `<p style="background-color:red; color:white" >${imc.toFixed(2)} Abaixo do peso</p>`
    } else if (18.50 <= imc.toFixed(2) && imc.toFixed(2) <= 24.99) {
        resultado.innerHTML = `<p style="background-color:green; color:white" >${imc.toFixed(2)} Peso Normal</p>`
    } else if (25 <= imc.toFixed(2) && imc.toFixed(2) <= 29.99) {
        resultado.innerHTML = `<p style="background-color:grey; color:white" >${imc.toFixed(2)} Sobrepeso</p>`
    } else if (30 <= imc.toFixed(2) && imc.toFixed(2) <= 34.99) {
        resultado.innerHTML = `<p style="background-color:red; color:white" >${imc.toFixed(2)} Obesidade grau I</p>`
    } else if (35 <= imc.toFixed(2) && imc.toFixed(2) <= 39.99) {
        resultado.innerHTML = `<p style="background-color:red; color:white" >${imc.toFixed(2)} Obesidade grau II</p>`
    } else if (imc.toFixed(2) >= 40) {
        resultado.innerHTML = `<p style="background-color:red; color:white" >${imc.toFixed(2)} Obesidade grau III</p>`
    } else {
        resultado.innerHTML = `<p style="background-color:red; color:white" >Valor inadequado</p>`
    }
})