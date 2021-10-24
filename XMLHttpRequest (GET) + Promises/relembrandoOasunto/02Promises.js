const req = obj => {
    return new Promise((resolv, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolv(xhr.responseText);
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
        this.selecionapagina(el);
    }
});

this.selecionapagina = (el) => {
    const ref = el.getAttribute('href');

  const resovendo = {
        method: "GET",
        url: ref,
    }

    req(resovendo)
    .then(response => { camapaj(response);  })
    .catch(er => { console.log(er)})
    
}

function camapaj(response){
    const ress = document.querySelector('.circulo');
    ress.innerHTML = response;
}
