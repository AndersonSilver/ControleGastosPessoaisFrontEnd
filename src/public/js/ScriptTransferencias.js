
async function transferir() {

    document.getElementById('salvar').addEventListener('click', async (event) => {

                event.preventDefault();

                const token = localStorage.getItem('resulttoken');

                const valor = document.getElementById('valor').value;
                const deConta = document.getElementById('deConta').value;
                const paraConta = document.getElementById('paraConta').value;
                const data = document.getElementById('data').value;
                const observacao = document.getElementById('observacao').value;
    

                console.log({
                valor,
                deConta,
                paraConta,
                data,
                observacao

                });


   
    });
}

transferir();