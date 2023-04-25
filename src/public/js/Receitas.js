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
    
    });

}

searchAllUsers();