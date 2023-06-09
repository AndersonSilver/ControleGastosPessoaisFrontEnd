async function searchAllUsersDespesas(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const responseDespesas = await fetch(`http://localhost:3000/searchDespesa?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dados = await responseDespesas.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

    const userTable = document.getElementById("ListDespesas");

    dados.sort((a, b) => new Date(b.data) - new Date(a.data));
    dados.forEach((user) => {
    
    const row = userTable.insertRow();

    const ValorCell = row.insertCell();
    ValorCell.innerText = "- R$ "+user.valor;
    ValorCell.style.color = "red";
    const StatusCell = row.insertCell();
    StatusCell.innerText = user.status;

    const DataCell = row.insertCell();
    DataCell.innerText = user.data;

    const DescricaoCell = row.insertCell();
    DescricaoCell.innerText = user.descricao;

    const CategoriaCell = row.insertCell();
    CategoriaCell.innerText = user.categoria;

    const ContaCell = row.insertCell();
    ContaCell.innerText = user.conta;
    
    const acoesCell = row.insertCell();

    // acoesCell.style.width = "150px";
    const botaoEditarAcoes = document.createElement('button'); // Cria o elemento de botão
    const botaoDeletarAcoes = document.createElement('button');  

    botaoEditarAcoes.innerText = 'Editar'; // Define o texto do botão
    botaoEditarAcoes.classList.add('btnReceita'); // Adiciona classes ao botão, se necessário
    botaoEditarAcoes.style.display = 'inline-block';
    // Adicione um event listener ao botão, se desejar
    botaoEditarAcoes.addEventListener('click', () => {
      window.location.href = '/EditarDespesas?id=' + user.id;
    });

    acoesCell.appendChild(botaoEditarAcoes); // Adiciona o botão à célula da coluna "Ações"


    botaoDeletarAcoes.innerText = 'Deletar'; // Define o texto do botão
    botaoDeletarAcoes.classList.add('btnReceita'); // Adiciona classes ao botão, se necessário
    botaoDeletarAcoes.style.display = 'inline-block';
    // Adicione um event listener ao botão, se desejar
    botaoDeletarAcoes.addEventListener('click', async () => {
      
      const responseDelete = await fetch(`http://localhost:3000/deleteDespesa?id=${user.id}`, {
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

    acoesCell.appendChild(botaoDeletarAcoes); // Adiciona o botão à célula da coluna "Ações"

    });

}

searchAllUsersDespesas();