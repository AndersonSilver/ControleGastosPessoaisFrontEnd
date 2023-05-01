
async function CreateContaBancaria(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const instituicao = document.getElementById('instituicao').value;   
    const descricao = document.getElementById('descricao').value;   
    const tipoConta = document.getElementById('tipoConta').value;   
    const saldo = document.getElementById('saldo').value;

    const dataContaBancaria = {
        instituicao,
        descricao,
        tipoConta,
        saldo,
    }

    if(!instituicao || !descricao || !tipoConta || !saldo){
        return
    }else{

    const response = await fetch(`http://localhost:3000/createContaBancaria?id=${id}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(dataContaBancaria)
    });
    setTimeout(() => {
        location.reload();
    }, 1000);

    const dados = await response.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }
    }

}
