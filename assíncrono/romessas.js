
function rand(max, min){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo){
    return new Promise((aceita, regeita) => {
        if(typeof msg !== 'string') regeita('ERROR');
        setTimeout(() => {
            aceita(msg);
        }, tempo)
    })
}

esperaAI('f1', rand(1, 3))
.then(f1 => {
    console.log(f1)
    return esperaAI('f2', rand(1, 3));
})
.then(f2 => {
    console.log(f2);
    return esperaAI('f3', rand(1, 3));
})
.then(f3 => {
    console.log(f3);
})


.catch(f12 => {
    console.log(f12);
})