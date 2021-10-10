function ramd(max, min){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject("error");
        setTimeout(() => {
            resolve(msg + ' Pasado');
        }, tempo);
    })
        
}

esperaAi('men 1 ', ramd(1, 3))
.then( e => {
    console.log(e);
    return esperaAi('men 2 ', ramd(1, 3));
})

.then(e => {
    console.log(e);
    return esperaAi(3, ramd(1, 3)) ; 
})
.then(i => {
    console.log(i)
})
.catch(v => {
    console.log(v);
})
    

const promesssa = [
    // 'O primeiro',
    esperaAi('f1', 1000),
    esperaAi('f2', 1000),
    esperaAi(3, 5000),
    'O Ultimo',
];

Promise.all(promesssa)
.then(x => {
    console.log(x)
})
.catch(q => {
    console.log(q);
})

Promise.race(promesssa)
.then(function(val){
console.log(val);
})
.catch(z => {
    console.log(z);
})