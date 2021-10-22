
// terminar depois


function criap(){const p = document.createElement('p'); return p; }

function btnmaisinput(){
    const p = criap();

    const input = document.createElement('input');
    input.setAttribute('class', 'displayInput')
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btnTarefas')
    btn.innerText = 'btn';

    p.appendChild(input);
    p.appendChild(btn);
    return p;
}

function criaul(){
    const ul = document.createElement('ul');
    ul.classList.add('tarefa')
    ul.innerText = '.....';
    return ul;
}

function blocoDeNotas(){
    document.querySelector('body').style.textAlign = 'center';
    const body = document.querySelector('body');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Bloco de Notas'; 
    body.appendChild(h1);

    body.appendChild(btnmaisinput())
    body.appendChild(criaul());

}
    
function iniciandofuncao(){

    const input = document.querySelector('displayInput');
    const btnTarefa = document.querySelector('.btnTarefas');
    const tarefa = document.querySelector('.tarefa');

    btnTarefa.addEventListener('click', function(){
        if(!input.value) return;
        console.log(input.value);
         // criaTarefa(input.value);
    })



    // function criaLi(){ const li = document.createElement('li'); return li; }
/*

function criaTarefa(textoin){
    
    const li = criaLi();
    li.innerText = textoin;
    tarefa.appendChild(li);
    
    
}
*/
    
}







blocoDeNotas();
iniciandofuncao();