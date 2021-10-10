function ran (max, min){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resove, rejct) => {
        if(typeof msg !== 'string'){
            rejct('ERROR');
            return;
        } 

        
        
        setTimeout(() => {
            resove(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo);
            
    })
}


// Promise.all resolve todos dentro de um arrays

const promessa = [
    '1 promessa',
    esperaAi('2 promessa', 1000),
    esperaAi('3 promessa', 1000),
    esperaAi(4 , 1000),
    'ultima'
];


Promise.all(promessa)

.then(e => {
    console.log (e);
})
.catch(error => {
    console.log(error);
})

const pro = [
    esperaAi( '1', 2000  ),
    esperaAi( '2', 2000  ),
    esperaAi( '3', 1000  )
];

Promise.race(pro)
.then(function(va){
    console.log(va)
})
.catch(e => {
    console.log(e)
})
