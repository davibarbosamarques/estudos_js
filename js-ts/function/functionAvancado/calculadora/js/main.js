function criarCalculadora() {
    return {

        display: document.querySelector(".display"),

        inicia() {
            this.clicarBotoes()

            this.precionaEnter()
        },

        precionaEnter(){
            document.addEventListener("keyup", e => {
                if(e.keyCode === 13){
                    this.realizarConta()
                }
            });                 
        },

        apagarInput() {
            this.display.value = ""
        },
        apagarCaracter(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizarConta(){
            let conta = this.display.value;
            this.display.focus();

            try{
                conta = eval(conta)

                if(!conta){
                    alert("conta invalida")
                }

                this.display.value = conta
            }catch{
                alert("conta invalida")
            }
        },

        clicarBotoes() {
            document.addEventListener("click", (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains("btn-clear")) {
                    this.apagarInput();
                }
                if (el.classList.contains("btn-del")) {
                    this.apagarCaracter();
                }
                if (el.classList.contains("btn-eq")){
                    this.realizarConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus();

        }

    };
}
const calculadora = criarCalculadora()
calculadora.inicia()