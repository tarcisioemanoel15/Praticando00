document.querySelector('body').style.textAlign = 'center';
document.querySelector('body').style.background = 'black';
const body = document.querySelector('body');

const h1 = document.createElement('h1');
const h2 = document.createElement('h2');

h1.innerHTML = 'Relogio';
h2.style.color = 'red';
h2.classList.add( 'rh2');
h2.innerHTML = '00:00:00';
h1.style.color = 'yellow'

body.appendChild(h1)
body.appendChild(h2)

 const hor = document.querySelector('rh2');


function h (){


    criazero = (num) => {
        return num > 9 ? num : '0'+num;
    }

    const data = new Date();
    
const hora = criazero(data.getHours());
const minuto = criazero(data.getMinutes());
const segundo = criazero(data.getSeconds());

const horas = `${hora}:${minuto}:${segundo}`;
h2.innerHTML = horas;
}


setInterval(h, 1000)