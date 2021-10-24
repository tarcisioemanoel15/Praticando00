document.addEventListener('click', e => {

    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        caregapaj(el);
    }
})


async function caregapaj(el){
    const href = el.getAttribute('href');

    try{
        const resp = await fetch(href);

        if(resp.status !== 200) throw new Error('errorrr');

        const ht = await resp.text();

        recarrega(ht);
        
    }catch(e){

        console.log(el);
    }
}

function recarrega(ht){
    const res = document.querySelector('.circulo');
    res.innerHTML = ht;
}