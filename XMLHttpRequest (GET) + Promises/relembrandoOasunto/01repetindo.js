const reuest = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300 ){
            obj.success(xhr.responseText);
        }else{
            obj.errorr(xhr.statusText);
        }

    })
}


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        caregapaj(el);
    }
})
    

function caregapaj(el){
    const rl = el.getAttribute('href');

    reuest({

        method: 'GET',
        url: rl,

        success(response){recaregapaj(response)},
        errorr(errorText){console.log(errorText)}
    })
} 

function recaregapaj(response){
    const rel = document.querySelector('.circulo');
    rel.innerHTML = response;

}

    
