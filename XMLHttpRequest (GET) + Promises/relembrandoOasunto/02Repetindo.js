
const req = obj => {
    return new Promise((resolv, reject) => {

        const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status <300){
        resolv(xhr.responseText);           
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
        this.selecionaP(el);
    }
})

this.selecionaP = (el) => {
    const ref = el.getAttribute('href');

    const recebe = {
        method: 'GET',
        url: ref
    }

    req(recebe).then(response => { this.carrpag(response)})
    .catch(e => {console.log(e)});
}

this.carrpag = (response) => {
    const rees = document.querySelector('.circulo');
    rees.innerHTML = response;
}

    


