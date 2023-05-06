dadosContaBancaria()
async function dadosContaBancaria() {
    const token = localStorage.getItem('resulttoken');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    const response = await fetch(`http://localhost:3000/searchContaBancariaUni?id=${id}`, {
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

    const instituicaoElement = document.getElementById('instituicao');

    if (instituicaoElement !== null) {
      instituicaoElement.value = ResultFinal.instituicao;
    }

    const descricaoElement = document.getElementById('descricao');

    if (descricaoElement !== null) {
      descricaoElement.value = ResultFinal.descricao;
    }

    const saldoElement = document.getElementById('saldo');

    if (saldoElement !== null) {
      saldoElement.value = ResultFinal.saldo;
    }

    const tipoContaElement = document.getElementById('tipoConta');

    if (tipoContaElement !== null) {
      tipoContaElement.value = ResultFinal.tipoConta;
    }
    
    return ResultFinal;
  }
  
