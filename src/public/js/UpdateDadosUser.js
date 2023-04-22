
async function UpdateDadosUser(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const nameCompleto = document.getElementById('NomeCompleto').value;     
    const telefone = document.getElementById('telefone').value;         
    const cep = document.getElementById('cep').value;               
    const estado = document.getElementById('estado').value;             
    const cidade = document.getElementById('cidade').value;             
    const aniversario = document.getElementById('dataNascimento').value;        
    const sexo = document.getElementById('sexo').value;
    const cpf = document.getElementById('cpf').value;
    const objetivoFinanceiro = document.getElementById('objetivoFinanceiro').value;


    const data = {
        nameCompleto,
        telefone,
        cep,
        estado,
        cidade,
        aniversario,
        sexo,
        cpf,
        objetivoFinanceiro,
    }

    
        const response = await fetch(`http://localhost:3000/createDadosPessoais/?id=${id}`, {
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