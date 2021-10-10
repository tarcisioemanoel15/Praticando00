function rend(max = 1, min = 3){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera (msg, temp){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Error');
        setTimeout(() => {
            resolve(msg)

        }, temp)
    })
}

async function chama(){
    try{

        // setTimeout(() => {
        //     console.log('eeeeee', 3)
        // }, 1000)

        const fase1 = await espera('f1', rend());
        console.log(fase1)
        const fase2 = await espera('f2', rend());
        console.log(fase2)
        const fase3 = await espera(3, rend());
        console.log(fase3)
    }catch(t){
        console.log(t);
    }
}

chama();