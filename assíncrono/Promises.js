function calbackk(){

    function rand (min, max){
        max *= 1000;
        min *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
}

function esperaai(msg, tempo, cb ){
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    },tempo)
}

esperaai('frase 1', rand(1, 3), function(){
    esperaai('frase 2', rand(1, 3), function(){
    })
    esperaai('frase 3', rand(1, 3), function(){
        esperaai('frase 4', rand(1, 3), function(){
        })
    })
})
}
//  calbackk();


/**/

function rand (max, min){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaai(msg, temp){


    return new Promise((resove, reject) => {

        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resove(msg);
            
        }, temp)

    })

}



esperaai('f1', rand(1, 3))
.then(res => {
    console.log(res);
    return esperaai('f2', rand(1, 3));
})
.then(ress => {
    return ress + ' vai pro outro than';
})
.then( res => {
    console.log(res)
})
    
.then(() => {
    return esperaai('f3', rand(1, 3));
})
    
.then(ar => {
    console.log(ar);
    return esperaai(4 , rand(1, 4));
})
.then(res => {
console.log(res)
})




.catch(aaa => {
    console.log('erro', aaa);
});




    






