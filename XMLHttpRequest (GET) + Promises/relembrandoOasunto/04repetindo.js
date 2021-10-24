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
    .then(e => {
        if(e.status !== 200) throw new Error('Erro MEU');
        return e.text();
    })
    .then(e => {
        recarrega(e);
    })
    .catch(e => {console.log(e)})
}

function recarrega(tre){
    const res = document.querySelector('.circulo');
    res.innerHTML = tre;
}