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
    }

    camposSaoValidos(){

        for (let campo of this.formulario.querySelectorAll('.validar')){
            
            if(!campo.value){

                this.criaError(campo, 'campo não pode tar vazio')
            } 
        }
    }


    criaError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-Text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new Validaformulario();