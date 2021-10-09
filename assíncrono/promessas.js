function ran (max, min){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resove, rejct) => {
        if(typeof msg !== 'string') rejct('ERROR');
        
        
        setTimeout(() => {
            resove(msg);
        }, tempo);
            
    })
}



esperaAi('frse 1', ran(1, 3))
.then(p1 => {
    console.log(p1);
    return esperaAi('frse 2', ran(1, 3))
})
.then(p2 => {
    console.log(p2);
   return esperaAi('frse 3', ran(1, 3));
})
.then(p3 => {
    console.log(p3);
})
.then(p4 => {
   return esperaAi( 4, ran(1, 3));
})
.then(p4 => {
    console.log(p4 + ' ultimo' )
})
    
.catch(p6 => {
    console.log(p6)
})

