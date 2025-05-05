class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector(".formulario")
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener("submit", e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidadas = this.senhasSaoValidas();

        if(camposValidos && senhasValidadas){
            alert('Formulario Enviado')
            this.formulario.submit()
        }
    }

    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, `Campos senha e repetir precisam ser iguais`)
            this.criaErro(repetirSenha, `Campos senha e repetir precisam ser iguais`)
            valid = false;
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            this.criaErro(senha, `senha precisa ter entre 6 e 12 caracteres`)
            valid = false;
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;

        for(let erroText of this.formulario.querySelectorAll(".error-text")){
            erroText.remove()
        }

        for(let campos of this.formulario.querySelectorAll(".validar")){
            const label = campos.previousElementSibling.innerText;

            if(!campos.value){
                this.criaErro(campos, `O campo "${label}" não pode estar em branco`)
                valid = false;
            }

            if(campos.classList.contains('cpf')){
                if(!this.validaCPF(campos)) valid = false
            }

            if(campos.classList.contains('usuario')){
                if(!this.validaUsuario(campos)) valid = false
            }
        }
        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value
        let valid = true;

        if(usuario.length > 12 || usuario.length < 3){
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
            let valid =  false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome Usuario precisa conter apenas letras e/ou numeros')
            let valid =  false;
        }
        return true;
    }

    validaCPF(campo){
        const cpf = new ValidaCpf(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF invalido')
            return false
        }

        return true
    }

    criaErro(campo, msg){
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("error-text")
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()