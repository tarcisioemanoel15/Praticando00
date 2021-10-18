function Calculadora(){

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturacliques();
        this.capturaEnter();
    };
    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 13){
                this.realiza();            
            }
        })
    }
    this.realiza = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta);

            if(!conta){
                alert('invalido ou é 0');
                return;
            }
            this.display.value = conta;
        }catch(e){console.log('ERROR')}; 
    }
    this.apagaum = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.apagatudo = () => {
        this.display.value = '';
    };
    this.displaynum = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }; 

    this.capturacliques = () => {
        document.addEventListener("click", e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.displaynum(el.innerText);
            if(el.classList.contains('btn-clear')) this.apagatudo();
            if(el.classList.contains('btn-del')) this.apagaum();
            if(el.classList.contains('btn-eq')) this.realiza();
        })
    }





}
const calculadora = new Calculadora();
calculadora.inicia();