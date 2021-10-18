function metronomo(){
const metronomo = document.querySelector('.prr');

function seg(segundos){
let data = new Date(segundos * 1000);

return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'    
});
}
console.log(seg(10));

let segundos = 0;
let timer;

function contandor(){
    timer = setInterval(() =>{
        segundos++
        metronomo.innerHTML = (seg(segundos));
    },1000)
}

document.addEventListener('click', e => {
    let el = e.target;

    if(el.classList.contains('iniciar')){
        metronomo.classList.add('cor1')
        metronomo.classList.remove('cor2');
        clearInterval(timer);
        contandor(segundos);
    }
    if(el.classList.contains('pausar')){
        metronomo.classList.add('cor2');
        
        clearInterval(timer);
        
    }
    if(el.classList.contains('zerar')){
         metronomo.classList.remove('cor1');
         metronomo.classList.remove('cor2');

        clearInterval(timer)
        metronomo.innerHTML = '00:00:00';
        segundos = 0;

    }

})

}
metronomo()
