const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        } );
    })
}



document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        selecionapag(el)
    }
})


async function selecionapag(el){

    const href = el.getAttribute('href');
    const tes = {
        method: 'GET',
        url: href
    }

try{
    const response = await request(tes);
    carregaPagina(response);
}catch(e){
    console.log(e)
}
}


function carregaPagina(response){
    const ress = document.querySelector('.circulo');
    ress.innerHTML = response;
};