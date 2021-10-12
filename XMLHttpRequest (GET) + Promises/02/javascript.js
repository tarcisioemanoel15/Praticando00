

const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.ax(xhr.responseText);
        } else {
            obj.az(xhr.statusText);
        }
    })
}


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregapag(el);
    }
})


function carregapag(el) {
    const hreff = el.getAttribute('href');
    
    request({
        method: 'GET',
        url: hreff,
        ax(response){ asdf(response)},
        az(errorText){console.log(errorText)}
    })
}


function asdf(response){
    const w = document.querySelector('.ress');
    w.innerHTML = response;
}
