const request = obj => {


    return new Promise((resove, reject) => {

        
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    
    xhr.addEventListener('load', () => {
        
        if(xhr.status >= 200 && xhr.status < 300){
            resove(xhr.responseText);
        }else{
            reject(xhr.statusText);
        }
    })
})

}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregapaj(el);
    }
})



async function carregapaj(el){
    const href = el.getAttribute('href');
 
    const resolvendo = {
        method: 'GET',
        url: href,
    }


try{
    const a = await request(resolvendo)
    buscapaj(a)
}catch(e){console.log(e)}
   
    
    // error(errorText){console.log(errorText)}
}







function buscapaj(response){
    const res = document.querySelector('.res');
    res.innerHTML = response;
}
