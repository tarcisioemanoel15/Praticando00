document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        caregaPag(el);
    }
})

function caregaPag(el){
    const ref = el.getAttribute('href');

    fetch(ref)
.then(respons => {
    if(respons.status !== 200) throw new Error('meu erro')
      return respons.text();
})

.then(respo => {
recarrega(respo);
})
.catch(e => {alert(e)})
}
    
    

function recarrega(re){
    const res = document.querySelector('.circulo');
    res.innerHTML = re;
}