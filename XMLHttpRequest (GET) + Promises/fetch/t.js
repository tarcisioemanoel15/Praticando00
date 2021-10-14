/*
const response = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        } )
    })
}
                
*/
        

        

document.addEventListener('click', e => {
   const el = e.target;
   const tag = el.tagName.toLowerCase();

   if(tag === 'a'){
       e.preventDefault();
       carrega(el);
   }
     
})

function carrega(el){
    const href = el.getAttribute('href');
    

fetch(href)
.then(response => {
    if(response.status !== 200 ) throw new Error('erro 404 NOSSo')
    return response.text()
})
.then(response => ultimacarrega(response))
.catch(e => console.log(e))           
}

function ultimacarrega(response){
    const res = document.querySelector('.res');
    res.innerHTML = response;
}

