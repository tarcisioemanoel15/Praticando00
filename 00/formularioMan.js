class Validaformulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.envio();
    }

    envio(){
        this.formulario.addEventListener('submit', e => {
            this.chamadas(e);
        })
    }

    chamadas(e){
        e.preventDefault();
        
       const camposValidos = this.camposSaoValidos();
       const senasValidos = this.senhasSaoValidos();

       if(camposValidos && senasValidos){
           alert('FORMULARIO ENVIADO');
           this.formulario.submit();
       }
    }



    senhasSaoValidos(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha')
        const rSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== rSenha.value){
            this.criaError(senha, 'senha tem que ser igual a repetir senha');
            this.criaError(rSenha, 'repetir senha tem que ser igual a senha');
            valid = false;
        }

        if(senha.value.length < 6 || rSenha.value.length > 12){
            this.criaError(senha, 'campo senha tem que tar entre 6 e 12 caracter ');
            valid = false;
        }

        return valid;
    }


    camposSaoValidos(){

        let valid = true;

        for(let errortx of this.formulario.querySelectorAll('.error-Text')){
            errortx.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){

            const labbel = campo.previousElementSibling.innerHTML;

            if(!campo.value){
                this.criaError(campo, `Campo ${labbel} não pode tar vazio`);
                valid = false;
            } 

           if(campo.classList.contains('cpf')){
               if(!this.cpfvalidado(campo)) valid = false;
           }

           if(campo.classList.contains('usuario')){
               this.usuariovalido(campo);
           }

         



        }

        return valid;
    }

    




    usuariovalido(campo){
        let valid = true;
        const usuarioo = campo.value;

        if(usuarioo.length < 6 || usuarioo.length > 12 ){
            this.criaError(campo, 'Campo usuario tem que tar entre 6 e 12 caractere');
            valid = false;
        }

        if(!usuarioo.match(/^[a-zA-Z0-9]+$/g)){
            this.criaError(campo, 'usuario so pode conter numeros e letras');
            valid = false;
        }



        return valid;
    }
    
    
    cpfvalidado(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaError(campo, 'CPF Invalido');
        return false;
        }
        return true;
    }
    
    criaError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-Text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const validaa = new Validaformulario();