document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
 
    if(tag === 'a'){
        e.preventDefault();
        carrega(el);
    }
      
 })
 
 async function carrega(el){

    try{
        const ref = el.getAttribute('href');
        const reff = await fetch(ref);

        if(reff.status !== 200) throw new Error('EEEror');
        const html = await reff.text();

         response(html); 

    }catch(e){console.log(e)}
}

function response(reff){
   const res = document.querySelector('.circulo');
   res.innerHTML = reff;
}

 