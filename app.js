NomesDosAmigos = [];
function adicionarAmigo() {
    if (document.getElementById('amigo') == '') {
        alert('Preencha o campo')
    }
    else {
        var nome = document.getElementById('amigo')
        console.log(nome.value)
        NomesDosAmigos.push(nome.value)
        console.log(NomesDosAmigos)
        document.getElementById('amigo').value = ''
        var listaAmigos = document.getElementById('listaAmigos')
        var novoItem = document.createElement('li')
        novoItem.textContent = NomesDosAmigos[NomesDosAmigos.length - 1];
        listaAmigos.appendChild(novoItem);
}
    }

function sortearAmigo() {
    alert("O amigo sorteado foi o " + NomesDosAmigos[Math.floor(Math.random() * NomesDosAmigos.length)])
}

