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

    dados.forEach((user) => {
    
    const row = userTable.insertRow();

    const ValorCell = row.insertCell();

    ValorCell.innerText = " - R$ " + user.valor;
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
    
    });

}

searchAllUsersDespesas();