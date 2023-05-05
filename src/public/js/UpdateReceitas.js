
async function UpdateReceitas(){

    const token = localStorage.getItem('resulttoken');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    if (!id) {
        console.log('id is not defined');
        return;
    }

    console.log(id);

    const valor = document.getElementById('valor').value;     
    const status = document.getElementById('status').value;         
    const descricao = document.getElementById('descricao').value;               
    const categoria = document.getElementById('categoria').value;             
    const data = document.getElementById('data').value;             
    const conta = document.getElementById('conta').value;

    const dataUpdate = {
        valor,
        status,
        descricao,
        categoria,
        data,
        conta,
    }

    if (valor === '' || status === '' || descricao === '' || categoria === '' || data === '' || conta === '') {
        alert('Preencha todos os campos');
        return;
    }else{

    
        const response = await fetch(`http://localhost:3000/updateReceita?id=${id}`, {
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