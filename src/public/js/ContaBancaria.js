async function searchAllUsersContaBancaria(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const responseContaBancaria = await fetch(`http://localhost:3000/searchContaBancaria?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dados = await responseContaBancaria.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

    const userTable = document.getElementById("ListContabancaria");

    dados.sort((a, b) => new Date(b.data) - new Date(a.data));
    dados.forEach((user) => {
    
    const row = userTable.insertRow();

    const InstituicaoCell = row.insertCell();
    InstituicaoCell.innerText = user.instituicao;

    const descricaoCell = row.insertCell();
    descricaoCell.innerText = user.descricao;

    const tipoContaCell = row.insertCell();
    tipoContaCell.innerText = user.tipoConta;

    const saldoCell = row.insertCell();
    saldoCell.innerText = user.saldo;

    
    const acoesCell = row.insertCell();


    const botaoEditarAcoes = document.createElement('button');
    const botaoDeletarAcoes = document.createElement('button');  

    botaoEditarAcoes.innerText = 'Editar';
    botaoEditarAcoes.classList.add('btnReceita');
    botaoEditarAcoes.style.display = 'inline-block';

    botaoEditarAcoes.addEventListener('click', () => {
    console.log('Botão clicado!', user); 
    });

    acoesCell.appendChild(botaoEditarAcoes);


    botaoDeletarAcoes.innerText = 'Deletar';
    botaoDeletarAcoes.classList.add('btnReceita'); 
    botaoDeletarAcoes.style.display = 'inline-block';

    botaoDeletarAcoes.addEventListener('click', async () => {
      
      const responseDelete = await fetch(`http://localhost:3000/deleteContaBancaria?id=${user.id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        
      });
        const retorno = await responseDelete.json();
        console.log(retorno);
        setTimeout(function() {
          location.reload();
      }, 1);
    });

    acoesCell.appendChild(botaoDeletarAcoes); 
    });

}

searchAllUsersContaBancaria()