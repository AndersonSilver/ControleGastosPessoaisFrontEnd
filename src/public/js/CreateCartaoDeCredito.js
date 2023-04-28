
async function CreateCartaoDeCredito(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const nome = document.getElementById('nome').value;   
    const limite = document.getElementById('limite').value;   
    const dataVencimento = document.getElementById('dataVencimento').value;   
    const dataFechamento = document.getElementById('dataFechamento').value;   
    const bandeira = document.getElementById('bandeira').value; 

    const dataCartaoDeCredito = {
        nome,
        limite,
        dataVencimento,
        dataFechamento,
        bandeira
    }

    const response = await fetch(`http://localhost:3000/createCartaoCredito?id=${id}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(dataCartaoDeCredito)
    });

    const dados = await response.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }


}
