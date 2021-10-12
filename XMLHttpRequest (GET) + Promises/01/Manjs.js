const request = obj => {

    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {

        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.statusText)
        }
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


function caregapagina(el){
const hreff = el.getAttribute('href');


request({
    method: 'GET',
    url: hreff,
    
    success(response){caregaresultado(response);},
    error(errorText){console.log(errorText)}   
})
}

function caregaresultado(response){
const res = document.querySelector('.res');

res.innerHTML = response;

}