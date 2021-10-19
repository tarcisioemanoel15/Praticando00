
// document.querySelector('body').style.background = 'red'
// document.querySelector('section').style.background = 'blue'

function Cronometro(){
    this.inicia = () =>  {
        document.addEventListener('click', e => {
            let el = e.target;
            if(el.classList.contains('iniciar')){
                cron.classList.add('tr')
                clearInterval(timer);
                contador(segundos);
            }
                        
            if(el.classList.contains('pausar')){
                cron.classList.add('t')
                cron.classList.remove('tr')
                clearInterval(timer);
            }
                        
            if(el.classList.contains('zerar')){
                cron.classList.remove('t')
                cron.classList.remove('tr')
                
                segundos = 0;
                cron.innerHTML = '00:00:00';
            }
        })
    }
            
    let cron = document.querySelector('.contador');
    this.seg = (segundos) => {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    console.log(this.seg(10));
    
    let segundos = 0;
    let timer;
    
    contador = () => {
        timer = setInterval(() => {
            segundos++;
            cron.innerHTML = this.seg(segundos);
        }, 1000)
    }
}

const cro = new Cronometro();
cro.inicia();