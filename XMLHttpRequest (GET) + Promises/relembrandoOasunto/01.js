const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.errorr(xhr.statusText);
        }
    })
}

document.addEventListener('click',  e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        caregapaj(el);
    }

    
})

function caregapaj(el){
const hreff = el.getAttribute('href');
request({
    method: "GET",
    url: hreff,

    success(response){ recarega(response)},
    errorr(errorText){console.log(errorText)}

})

}

function recarega(response){
    const res = document.querySelector('.circulo');
    res.innerHTML = response;
}