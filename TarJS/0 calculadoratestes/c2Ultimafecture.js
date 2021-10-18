function criacalk(){
    return{
        display: document.querySelector('.display'),
        inicia(){
            
            this.criaDigito();
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
                        alert('conta Invalida ou é 0');
                        return;
                    }
                    this.display.value = conta;
                }catch(e){console.log('invalido')};
        },
        apagaum(){
            this.display.value = this.display.value.slice(0, -1);
        },
        apagaTudo(){
            this.display.value = '';
        },
        displayNum(valor){
            this.display.value += valor;
            this.display.focus();
        },
        criaDigito(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) this.displayNum(el.innerText);
                if(el.classList.contains('btn-clear')) this.apagaTudo();
                if(el.classList.contains('btn-del')) this.apagaum();
                if(el.classList.contains('btn-eq')) this.realiza();
            })
        },
    }
}

const calculadora = criacalk();
calculadora.inicia();