
async function CreateReceita(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const valor = document.getElementById('valor').value;   
    const status = document.getElementById('status').value;   
    const descricao = document.getElementById('descricao').value;   
    const categoria = document.getElementById('categoria').value;   
    const data = document.getElementById('data').value;   
    const conta = document.getElementById('conta').value;   

    const dataReceita = {
        valor,
        status,
        descricao,
        categoria,
        data,
        conta,
    }

    const response = await fetch(`http://localhost:3000/createReceita?id=${id}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(dataReceita)
    });

    const dados = await response.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }


}
