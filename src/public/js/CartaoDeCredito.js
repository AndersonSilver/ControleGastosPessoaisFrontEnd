async function searchAllUsersDespesas(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const responseCartaoDeCredito = await fetch(`http://localhost:3000/searchCartaoCredito?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dados = await responseCartaoDeCredito.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

    const userTable = document.getElementById("ListCartaoDeCredito");

    dados.forEach((user) => {
    
    const row = userTable.insertRow();

    const nomeCell = row.insertCell();
    nomeCell.innerText = user.nome;

    const limiteCell = row.insertCell();
    limiteCell.innerText = "R$ " + user.limite;

    const dataVencimentoCell = row.insertCell();
    dataVencimentoCell.innerText = user.dataVencimento;

    const dataFechamentoCell = row.insertCell();
    dataFechamentoCell.innerText = user.dataFechamento;

    const bandeiraCell = row.insertCell();
    bandeiraCell.innerText = user.bandeira;
    
    const acoesCell = row.insertCell();

    // acoesCell.style.width = "150px";
    const botaoEditarAcoes = document.createElement('button'); // Cria o elemento de botão
    const botaoDeletarAcoes = document.createElement('button');  

    botaoEditarAcoes.innerText = 'Editar'; // Define o texto do botão
    botaoEditarAcoes.classList.add('btnReceita'); // Adiciona classes ao botão, se necessário
    botaoEditarAcoes.style.display = 'inline-block';
    // Adicione um event listener ao botão, se desejar
    botaoEditarAcoes.addEventListener('click', () => {
      
      // Lógica da ação do botão aqui
    console.log('Botão clicado!', user); // Exemplo de ação do botão, você pode substituir por sua lógica
    });

    acoesCell.appendChild(botaoEditarAcoes); // Adiciona o botão à célula da coluna "Ações"


    botaoDeletarAcoes.innerText = 'Deletar'; // Define o texto do botão
    botaoDeletarAcoes.classList.add('btnReceita'); // Adiciona classes ao botão, se necessário
    botaoDeletarAcoes.style.display = 'inline-block';
    // Adicione um event listener ao botão, se desejar
    botaoDeletarAcoes.addEventListener('click', async () => {
      
      const responseDelete = await fetch(`http://localhost:3000/deleteCartaoCredito?id=${user.id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
      });
        const retorno = await responseDelete.json();
        console.log(retorno);
     
    });

    acoesCell.appendChild(botaoDeletarAcoes); // Adiciona o botão à célula da coluna "Ações"

    });

}

searchAllUsersDespesas();