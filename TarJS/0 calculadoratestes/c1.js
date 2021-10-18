
function criaCalculadora(){
    return{
        display: document.querySelector('.display'),


        inicia(){
        this.celecionabotao();
        this.precionaEnter();    
        },


        precionaEnter(){
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13){
                    this.realiza();
                }

            })
        },


        realiza(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta invalida ou é 0');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                console.log('errrrrrer')
            };

        },




        apagaum(){
            this.display.value = this.display.value.slice(0, -1);
        },

        limpatudo(){
            this.display.value = '';
        },

        displayLimpo(val){
            this.display.value += val;
            this.display.focus();
            
        },

        celecionabotao(){
            document.addEventListener('click', e => {
                const el = e.target;


                if(el.classList.contains('btn-num')){
                    this.displayLimpo(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.limpatudo();

                }

                if(el.classList.contains('btn-del')){
                    this.apagaum();
                }

                if(el.classList.contains('btn-eq')){ 
                    this.realiza();
                }
            })
        },
    
    
    
    
    
    }

}

const calculadora = criaCalculadora();
calculadora.inicia();