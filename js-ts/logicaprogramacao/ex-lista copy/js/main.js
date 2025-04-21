const inputTarefa = document.getElementById("input-tarefa");
const buttonEnviar = document.getElementById("envio");
const lista = document.querySelector("ul")
// CRIA O ELEMENTO <LI></LI>
function criaLi(){
    const li = document.createElement("li")
    return li
}
// VALIDA O ENTER
inputTarefa.addEventListener("keypress", (e) => {
    if(e.keyCode === 13){
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
        limparTarefa()
    }
})
// FUNÇÃO PARA LIMPAR INPUT
function limparTarefa(){
    inputTarefa.value = "";
    inputTarefa.focus();
}
// CRIAR BUTTON DE APAGAR
function criarButtonApagar(li){
    li.innerText += " " 
    const buttonApagar = document.createElement("button");
    buttonApagar.innerText = "Apagar";
    buttonApagar.setAttribute("class", "apagar")
    li.appendChild(buttonApagar)
}
// FUNCTION PARA CRIAR TAREFAS
function criaTarefa(textoDoInput){
    const li = criaLi();
    li.innerText = textoDoInput;
    lista.appendChild(li)

    criarButtonApagar(li)
    salvarTarefas()
}

// CRIAR TAREFA QUANDO CLICA NO BUTTON
buttonEnviar.addEventListener("click", () => {
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
    limparTarefa()
})

document.addEventListener("click", (e) => {
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
        salvarTarefas()

})

function salvarTarefas(){
    const liTarefas = lista.querySelectorAll("li");
    const listaTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar' , '').trim()
        listaTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for(let tarefa of listaTarefas){
        criaTarefa(tarefa)
    }
}
adicionarTarefasSalvas()