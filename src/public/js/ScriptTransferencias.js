
async function transferir() {

    document.getElementById('salvar').addEventListener('click', async (event) => {

                const token = localStorage.getItem('resulttoken');
                const id = localStorage.getItem('resultid');

                const valor = document.getElementById('valor').value;
                const deConta = document.getElementById('deConta').value;
                const paraConta = document.getElementById('paraConta').value;
                const data = document.getElementById('data').value;
                const observacao = document.getElementById('observacao').value;

                const dataTransferencia = {
                    valor,
                    deConta,
                    paraConta,
                    data,
                    observacao,
                };
                
                const response = await fetch(`http://localhost:3000/createTransferencia?id=${id}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    
                    body: JSON.stringify(dataTransferencia)
                });
 
    });
}

transferir();