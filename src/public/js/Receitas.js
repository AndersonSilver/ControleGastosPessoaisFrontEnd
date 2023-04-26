async function searchAllUsers(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const response = await fetch(`http://localhost:3000/searchReceita?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dados = await response.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

    const userTable = document.getElementById("ListReceitas");

    dados.forEach((user) => {
    
    const row = userTable.insertRow();

    const ValorCell = row.insertCell();
    ValorCell.innerText = user.valor;

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
      
      // Lógica da ação do botão aqui
    console.log('Botão clicado!', user); // Exemplo de ação do botão, você pode substituir por sua lógica
    });

    acoesCell.appendChild(botaoEditarAcoes); // Adiciona o botão à célula da coluna "Ações"


    botaoDeletarAcoes.innerText = 'Deletar'; // Define o texto do botão
    botaoDeletarAcoes.classList.add('btnReceita'); // Adiciona classes ao botão, se necessário
    botaoDeletarAcoes.style.display = 'inline-block';
    // Adicione um event listener ao botão, se desejar
    botaoDeletarAcoes.addEventListener('click', () => {
      
      // Lógica da ação do botão aqui
    console.log('Botão clicado!', user); // Exemplo de ação do botão, você pode substituir por sua lógica
    });

    acoesCell.appendChild(botaoDeletarAcoes); // Adiciona o botão à célula da coluna "Ações"

    
    });

}

searchAllUsers();