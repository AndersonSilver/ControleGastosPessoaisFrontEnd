async function somaTotalConta() {
  const token = localStorage.getItem('resulttoken');

  const response = await fetch('http://localhost:3000/searchReceitaAll', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const dadosArray = await response.json();
  const contasTotais = {}; // Objeto para armazenar os totais das contas

  dadosArray.forEach(async (conta) => {
    const nomeConta = conta.conta;
    const valor = conta.valor;

    if (contasTotais[nomeConta]) {
      // Se a conta já existe no objeto, soma o valor
      contasTotais[nomeConta] += valor;
    } else {
      // Se a conta não existe no objeto, cria a entrada com o valor atual
      contasTotais[nomeConta] = valor;
    }

    try {
      const response = await fetch('http://localhost:3000/searchContaBancariaAll', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const dadosConta = await response.json();
      console.log("DADOS: ",dadosConta);
      // Encontre o registro que corresponde à conta atual
      const contaEncontrada = dadosConta.find((contaBancaria) => contaBancaria.instituicao === nomeConta);

      if (contaEncontrada) {
        const idConta = contaEncontrada.id;

        const updateResponse = await fetch(`http://localhost:3000/updateContaBancaria?id=${idConta}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ saldo: contasTotais[nomeConta]}) // Enviar apenas o novo valor da conta
        });

        if (!updateResponse.ok) {
          console.log(`Falha ao atualizar a conta: ${idConta}`);
        }
      } else {
        console.log(`Conta não encontrada para o nome: ${nomeConta}`);
      }
    } catch (error) {
      console.log(`Erro na requisição de atualização: ${error}`);
    }
  });

  console.log(contasTotais);
}

somaTotalConta();
