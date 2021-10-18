function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliquibotoes();
            this.cliquiEnter();
        },


        cliquiEnter() {
            this.display.addEventListener('keyup', ev => {
                if (ev.keyCode === 13) {
                    this.realizaconta();
                }
            })
        },


        realizaconta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('conta Invalida ou é 0');
                    return;
                }

                this.display.value = String(conta);

            } catch (e) {
                alert('conta invalida');
                return;
            }
        },



        deletum() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
        },


        btnParaDisplay(val) {
            this.display.value += val;
            this.display.focus();
        },


        cliquibotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    // this.display.focus();
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deletum();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaconta();
                }

            })

        },




    }
}

const calculadora = criaCalculadora();
calculadora.inicia()