dadosCartaoDeCredito()
async function dadosCartaoDeCredito() {
    const token = localStorage.getItem('resulttoken');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    const response = await fetch(`http://localhost:3000/searchCartaoCreditoUni?id=${id}`, {
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

    const nomeElement = document.getElementById('nome');

    if (nomeElement !== null) {
      nomeElement.value = ResultFinal.nome;
    }

    const dataVencimentoElement = document.getElementById('dataVencimento');

    if (dataVencimentoElement !== null) {
      dataVencimentoElement.value = ResultFinal.dataVencimento;
    }

    const dataFechamentoElement = document.getElementById('dataFechamento');

    if (dataFechamentoElement !== null) {
      dataFechamentoElement.value = ResultFinal.dataFechamento;
    }

    const limiteElement = document.getElementById('limite');

    if (limiteElement !== null) {
      limiteElement.value = ResultFinal.limite;
    }

    const bandeiraElement = document.getElementById('bandeira');

    if (bandeiraElement !== null) {
      bandeiraElement.value = ResultFinal.bandeira;
    }

    return ResultFinal;
  }
  
