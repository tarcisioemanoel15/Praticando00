function criaCalculadora(){
    return{
        displayy: document.querySelector('.display'),

        inicia(){
            this.apertdigito();
            this.apertEnter();
        },

        apertEnter(){
            this.displayy.addEventListener('keypress', e => {
                if(e.keyCode === 13){
                    this.realiza();            
                }
            })
        },

        realiza(){
            let contas = this.displayy.value;
            
            
            try{
                contas = eval(contas);

                if(!contas){
                    alert('Conta Invalida ou é 0');
                    return;
                }
                this.displayy.value = String(contas);
            }catch(e){
                console.log('error');
            };
        },
        
        apagaum(){
            this.displayy.value = this.displayy.value.slice(0, -1);

        },
        
        
        apagatudo(){
            this.displayy.value = '';
        },
            
        btnDisplay(val){
            this.displayy.value += val;
            this.displayy.focus();
        },

        apertdigito(){

            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) this.btnDisplay(el.innerText);
                if(el.classList.contains('btn-clear')) this.apagatudo();
                if(el.classList.contains('btn-del')) this.apagaum();
                if(el.classList.contains('btnn')) this.realiza();
                
            })
            
            
        }
        
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();