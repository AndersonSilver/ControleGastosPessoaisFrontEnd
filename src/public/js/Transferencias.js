async function searchAllUsers(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const response = await fetch(`http://localhost:3000/searchTransferencia?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dados = await response.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

    const userTable = document.getElementById("ListTransferencias");

    dados.sort((a, b) => new Date(b.data) - new Date(a.data));
    
    dados.forEach((user) => {
    
    const row = userTable.insertRow();

    const DataCell = row.insertCell();
    DataCell.innerText = user.data;

    const ValorCell = row.insertCell();
    ValorCell.innerText = " R$  " +user.valor;
    ValorCell.style.color = "green";

    const deContaCell = row.insertCell();
    deContaCell.innerText = user.deConta;

    const paraContaCell = row.insertCell();
    paraContaCell.innerText = user.paraConta;

    const observacaoCell = row.insertCell();
    observacaoCell.innerText = user.observacao;



    

    const acoesCell = row.insertCell();

    const botaoEditarAcoes = document.createElement('button');
    const botaoDeletarAcoes = document.createElement('button');  

    botaoEditarAcoes.innerText = 'Editar';
    botaoEditarAcoes.classList.add('btnReceita');
    botaoEditarAcoes.style.display = 'inline-block';

    botaoEditarAcoes.addEventListener('click', () => {
      // window.location.href = '/EditarTransferencias?id=' + user.id;

    });

    acoesCell.appendChild(botaoEditarAcoes); 


    botaoDeletarAcoes.innerText = 'Deletar';
    botaoDeletarAcoes.classList.add('btnReceita');
    botaoDeletarAcoes.style.display = 'inline-block';


    botaoDeletarAcoes.addEventListener('click', async () => {
     
      const responseDelete = await fetch(`http://localhost:3000/deleteTransferencia?id=${user.id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }

        
      });
        const retorno = await responseDelete.json();
        
        setTimeout(() => {
          window.location.reload();
        }
        , 10);

    });

    acoesCell.appendChild(botaoDeletarAcoes); // Adiciona o botão à célula da coluna "Ações"

    
    });

}

searchAllUsers();