async function searchAllUsersTransacoes() {

  const token = localStorage.getItem('resulttoken');
  const id = localStorage.getItem('resultid');
  
  const responseDespesas = await fetch(`http://localhost:3000/searchDespesa?id=${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  const responseReceitas = await fetch(`http://localhost:3000/searchReceita?id=${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const dadosDespesas = await responseDespesas.json();

  const dadosReceitas = await responseReceitas.json();

  if (dadosDespesas === null || dadosReceitas === null) {

    console.log('Não foi possível carregar os dados');

  }

  const dadosTransacoes = dadosReceitas.concat(dadosDespesas);

  dadosTransacoes.sort((a, b) => new Date(b.data) - new Date(a.data));

  const userTable = document.getElementById("ListTransacoes");

  dadosTransacoes.forEach((transacao) => {


    const row = userTable.insertRow();
    const tipo = row.insertCell();
    const valor = row.insertCell();
    const status = row.insertCell();
    const data = row.insertCell();
    const descricao = row.insertCell();
    const categoria = row.insertCell();
    const conta = row.insertCell();


    tipo.innerHTML = transacao.tipo === 'Receita' ? 'Receita' : 'Despesa';
    status.innerHTML = transacao.status;
    data.innerHTML = transacao.data;
    descricao.innerHTML = transacao.descricao;
    categoria.innerHTML = transacao.categoria;
    conta.innerHTML = transacao.conta;

        valor.innerHTML = transacao.valor;
    if (tipo.innerHTML === 'Receita') {
      valor.style.color = "green";
      valor.innerHTML = " R$  " + valor.innerHTML;
    } else {
      valor.style.color = "red";
      valor.innerHTML = " - R$  " + valor.innerHTML;
    }

  });
  
}

searchAllUsersTransacoes();
