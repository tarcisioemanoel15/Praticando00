fetch('pessoas.json')
.then(e => e.json())
.then(json => carregapaj(json));

function carregapaj(json){
    const tabela = document.createElement('table');

    for(let pesoa of json){
        const tr = document.createElement('tr');
    
        let td = document.createElement('td');
        td.innerHTML  = pesoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML  = pesoa.idade;
        tr.appendChild(td);


        td = document.createElement('td');
        td.innerHTML  = pesoa.email;
        tr.appendChild(td);
        
        tabela.appendChild(tr);
        
    }
    const res = document.querySelector('.circulo');
    res.appendChild(tabela)
    console.log(tabela)
}


