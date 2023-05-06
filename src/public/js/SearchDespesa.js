dadosDespesas()
async function dadosDespesas() {
    const token = localStorage.getItem('resulttoken');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    if (id === null) {
      console.log('Não foi possível carregar os dados');
    }

    const response = await fetch(`http://localhost:3000/searchDespesaUni?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dadosArray = await response.json();
    const ResultFinal = dadosArray[0]

    if (dadosArray === null) {
      console.log('Não foi possível carregar os dados');
    }

    console.log(ResultFinal);

    const valorElement = document.getElementById('valor');

    if (valorElement !== null) {
      valorElement.value = ResultFinal.valor;
    }

    const statusElement = document.getElementById('status');

    if (statusElement !== null) {
      statusElement.value = ResultFinal.status;
    }

    const descricaoElement = document.getElementById('descricao');

    if (descricaoElement !== null) {
      descricaoElement.value = ResultFinal.descricao;
    }

    const categoriaElement = document.getElementById('categoria');

    if (categoriaElement !== null) {
      categoriaElement.value = ResultFinal.categoria;
    }

    const dataElement = document.getElementById('data');

    if (dataElement !== null) {
      dataElement.value = ResultFinal.data;
    }

    const contaElement = document.getElementById('conta');

    if (contaElement !== null) {
      contaElement.value = ResultFinal.conta;
    }


    return ResultFinal;
  }
  
