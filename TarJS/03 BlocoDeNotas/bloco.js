const displayTarefas = document.querySelector('.input-tarefa');
const btnTarefas = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefa');

function criaLi(){ const li = document.createElement('li');  return li; } 

function criabtnApagar(li){
    li.innerText += ' ';
    let btnApagar = document.createElement('button');
    btnApagar.innerText = 'apagar';
    btnApagar.setAttribute('class', 'apagar')
    li.appendChild(btnApagar);
}

function limpaInput(){
    displayTarefas.value = '';
    displayTarefas.focus();
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    
    limpaInput();
    criabtnApagar(li);
    salvarTarefa();
}
        
btnTarefas.addEventListener('click', () => {
    if(!displayTarefas.value) return;
    criaTarefa(displayTarefas.value);
});

displayTarefas.addEventListener('keypress', e => {
    if(e.keyCode === 13){
        if(!displayTarefas.value) return;
        criaTarefa(displayTarefas.value);
    }
}); 
    
document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefa()
    
    }
});



function salvarTarefa(){

    const listarefas = tarefas.querySelectorAll('li');
    const tarefasArrays = [];
    
    for(let taref of listarefas){
        let tarefaTex = taref.innerText;
        tarefaTex = tarefaTex.replace('apagar', ' ');

        tarefasArrays.push(tarefaTex);

    } 

    const tarefaJASON = JSON.stringify(tarefasArrays);
    localStorage.setItem('tr', tarefaJASON );

}


function addtarefasSalva(){
    const tre = localStorage.getItem('tr');
    const listadeTarefas = JSON.parse(tre);

    for(let tarefa of listadeTarefas){
        criaTarefa(tarefa)
    }
}

addtarefasSalva();
