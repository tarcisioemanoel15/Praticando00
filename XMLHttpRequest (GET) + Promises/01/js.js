const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
        
    if(tag === 'a'){
        e.preventDefault();
        caregapagina(el);
    }
})
            

async function caregapagina(el){
    const hreff = el.getAttribute('href');
    const objcof = {
        method: 'GET',
        url: hreff
    }


    try{
        const response = await request(objcof); 
        caregaresultado(response);
        
    }catch(e){console.log(e)}
}


function caregaresultado(response){
    const res = document.querySelector('.res');
    res.innerHTML = response;
}


