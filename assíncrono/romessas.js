function rand(max, min){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);    
}

function asdf(msg, temp){

    return new Promise((resove, reject) => {
        if(typeof msg !== 'string') reject('Error')

        setTimeout(() => {
            resove(msg);
        }, temp)
    })
}

asdf('a', rand(1, 3))
.then(a1 => {
    console.log(a1)
   return asdf('b', rand(1, 3));
})
.then(b2 => {
    console.log(b2)
    return asdf(5, rand(1, 3))
})
.then(C3 => {
    console.log(C3)
})
.catch(c3 => {
    console.log(c3);
})