
async function CreateDespesa(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const valor = document.getElementById('valor').value;   
    const status = document.getElementById('status').value;   
    const descricao = document.getElementById('descricao').value;   
    const categoria = document.getElementById('categoria').value;   
    const data = document.getElementById('data').value;   
    const conta = document.getElementById('conta').value;   

    const dataDespesa = {
        valor,
        status,
        descricao,
        categoria,
        data,
        conta,
    }

    const response = await fetch(`http://localhost:3000/createDespesa?id=${id}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(dataDespesa)
    });

    const dados = await response.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }


}