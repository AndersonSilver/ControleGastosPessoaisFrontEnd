
async function UpdateContaBancaria(){

    const token = localStorage.getItem('resulttoken');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    if (!id) {
        console.log('id is not defined');
        return;
    }

    console.log(id);

    const instituicao = document.getElementById('instituicao').value;     
    const descricao = document.getElementById('descricao').value;         
    const saldo = document.getElementById('saldo').value;               
    const tipoConta = document.getElementById('tipoConta').value;

    const dataUpdate = {
        instituicao,
        descricao,
        saldo,
        tipoConta
    }

    if (instituicao === '' || descricao === '' || saldo === '' || tipoConta === '') {
        alert('Preencha todos os campos');
        return;
    }else{

    
        const response = await fetch(`http://localhost:3000/updateContaBancaria?id=${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        
            body: JSON.stringify(dataUpdate)

            
        });
            const dados = await response.json();

        if (dados === null) {
            console.log('Não foi possível carregar os dados');
        }
    }
}