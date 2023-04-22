
async function UpdateDadosUserFinanceiro(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const tipoMoradia = document.getElementById('tipoMoradia').value;
    const qtdPessoas = document.getElementById('qtdPessoas').value;
    const qtdCartaoCredito = document.getElementById('qtdCartaoCredito').value;
    const valorPatrimonio = document.getElementById('valorPatrimonio').value;
    const possuiVeiculo = document.getElementById('possuiVeiculo').value;
    const tipoVeiculo = document.getElementById('tipoVeiculo').value;

    const data={
        tipoMoradia,
        qtdPessoas,
        qtdCartaoCredito,
        valorPatrimonio,
        possuiVeiculo,
        tipoVeiculo
    }

    const response = await fetch(`http://localhost:3000/createFinanceiro/?id=${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const dados = await response.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

}