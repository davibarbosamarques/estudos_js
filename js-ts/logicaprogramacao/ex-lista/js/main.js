const inputTarefa = document.getElementById("input-tarefa");
const buttonEnviar = document.getElementById("envio");
const lista = document.querySelector("ul")

buttonEnviar.addEventListener("click", () => {
    const li = document.createElement("li")
    li.innerHTML = `${inputTarefa.value} <button class="apagar">apagar</button>`
    lista.appendChild(li)
    inputTarefa.value = ""
    inputTarefa.focus()

    const buttonApagar = li.querySelector(".apagar");
    buttonApagar.addEventListener("click", () => {
        li.remove()
    })
})

