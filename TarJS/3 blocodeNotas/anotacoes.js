const inp = document.querySelector('.tarefainput1');
const btn = document.querySelector('.btntarefa1');
const tarefa = document.querySelector('.tarefa1');

inp.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        if(!inp.value) return;
        criaTarefa(inp.value);    
    }
});

btn.addEventListener('click', function(){
    if(!inp.value)return;
    criaTarefa(inp.value);
});


function criaLi(){ const li = document.createElement('li'); return li;}

function enviaElimpa(){ inp.value = ''; inp.focus(); }

function criabtn(li){
    li.innerText += ' ';
    const botao = document.createElement('button');
    botao.innerText = 'delet';
    botao.setAttribute('class', 'apaga');
    li.appendChild(botao);
}

    

document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('apaga')){
        el.parentElement.remove();
        salvandotr();
    }
});



function criaTarefa(textoinout){

    const li = criaLi();
    li.innerText = textoinout;
    tarefa.appendChild(li);

    enviaElimpa();
    criabtn(li);
    salvandotr();

}


function salvandotr(){


    const lis = tarefa.querySelectorAll('li');
    const lisTexto = [];

    for (let listarefa of lis){
        let listaref = listarefa.innerText;
        listaref = listaref.replace('delet', '').trim();

        lisTexto.push(listaref);
    }

    const salve1 = JSON.stringify(lisTexto);
    localStorage.setItem('ta', salve1);
}

function addtrSalva(){

   const salve2 = localStorage.getItem('ta');
   const salve3 = JSON.parse(salve2);

   for (let salve4 of salve3){
       criaTarefa(salve4);
   }
}

addtrSalva();
