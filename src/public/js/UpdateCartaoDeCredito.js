
async function UpdateCartaoDeCredito(){

    const token = localStorage.getItem('resulttoken');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    if (!id) {
        console.log('id is not defined');
        return;
    }

    console.log(id);

    const nome = document.getElementById('nome').value;     
    const dataVencimento = document.getElementById('dataVencimento').value;         
    const dataFechamento = document.getElementById('dataFechamento').value;               
    const limite = document.getElementById('limite').value;             
    const bandeira = document.getElementById('bandeira').value; 

    const dataUpdate = {
        nome,
        dataVencimento,
        dataFechamento,
        limite,
        bandeira
    }

    if (nome === '' || dataVencimento === '' || dataFechamento === '' || limite === '' || bandeira === '') {
        alert('Preencha todos os campos');
        return;
    }else{

    
        const response = await fetch(`http://localhost:3000/updateCartaoCredito?id=${id}`, {
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