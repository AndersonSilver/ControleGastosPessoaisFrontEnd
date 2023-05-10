async function dadosContaBancaria() {
    const token = localStorage.getItem('resulttoken');
  
    const response = await fetch(`http://localhost:3000/searchContaBancariaAll`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  
    const dadosArray = await response.json();
  
    if (dadosArray === null) {
      console.log('Não foi possível carregar os dados');
      return;
    }
    const selectContas = document.getElementById('contas');
  
    // Remove as opções existentes do select
    selectContas.innerHTML = '';
  
    // Adiciona uma opção padrão para selecionar uma conta
    const optionPadrao = document.createElement('option');
    optionPadrao.value = '';
    optionPadrao.text = 'Selecione uma conta';
    selectContas.add(optionPadrao);
  
    // Adiciona uma opção para cada conta bancária
    dadosArray.forEach(conta => {
      const optionConta = document.createElement('option');
      optionConta.value = conta.instituicao;
      optionConta.text = `${conta.instituicao}`;
      selectContas.add(optionConta);
    });
  }
  window.addEventListener('load', dadosContaBancaria);
  