fetch('pessoas.json')
.then(resposta => resposta.json())
.then(json => carregapaj(json));

function carregapaj(json){

    const tabela = document.createElement('table');

    for(let pesoa of json){

        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pesoa.nome;
        tr.appendChild(td);
       
        let td1 = document.createElement('td');
        td1.innerHTML = pesoa.idade;
        tr.appendChild(td1);
        
        let td2 = document.createElement('td');
        td2.innerHTML = pesoa.salario;
        tr.appendChild(td2);

        tabela.appendChild(tr);
        
    }
    const res = document.querySelector('.res');
    res.appendChild(tabela);
}