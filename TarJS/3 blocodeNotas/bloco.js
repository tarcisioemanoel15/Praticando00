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
    ul.innerText = '*******';
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

    const input = document.querySelector('.displayInput');
    const btnTarefa = document.querySelector('.btnTarefas');
    const tarefa = document.querySelector('.tarefa');


    input.addEventListener('keypress', e => {
        if(e.keyCode === 13){
            if(!input.value) return;
            criaTarefa(input.value);
        }

    })

    btnTarefa.addEventListener('click', () => {
        if(!input.value) return;
        criaTarefa(input.value);
    });

    function criaLi(){ const li = document.createElement('li'); return li; }
        
    this.limpainput = () => {
        input.value = '';
        input.focus();
    }


    this.criaBtn = (li) => {
        li.innerHTML += '  ';
        const botao = document.createElement('button');
        botao.innerText = 'delet';
        botao.setAttribute('class', 'apaga');
        li.appendChild(botao);

    }

    document.addEventListener('click', e => {
        const el = e.target;
        if(el.classList.contains('apaga')){
            el.parentElement.remove();
            this.salvando();
        }
    })


    
    function criaTarefa(textoin){
        const li = criaLi();
        li.innerText = textoin;
        tarefa.appendChild(li);
        this.limpainput();
        this.criaBtn(li);

        this.salvando();
    }

    this.salvando = () => {
        const lis = tarefa.querySelectorAll('li');
        const lisTexto = [];

        for (let lista of lis){
            let listarefa = lista.innerText;
            listarefa = listarefa.replace('delet', '');
            lisTexto.push(listarefa);
        }
        const salveJson = JSON.stringify(lisTexto);
        localStorage.setItem('tarefa1', salveJson);
    }

    addlistaSalva = () => {
        const salv1 = localStorage.getItem('tarefa1');
        const salv2 = JSON.parse(salv1);

        for (let salv3 of salv2 ){
            criaTarefa(salv3);
        }
    }

    this.addlistaSalva();
    
    
    
}






blocoDeNotas();
iniciandofuncao();