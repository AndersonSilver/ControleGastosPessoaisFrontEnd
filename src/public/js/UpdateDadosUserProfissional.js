
async function UpdateDadosUserProfissional(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const escolaridade = document.getElementById('Escolaridade').value;     
    const profissao = document.getElementById('Profissao').value;         
    const empresaAtual = document.getElementById('Empresa').value;               
    const atividadeDesenvolvida = document.getElementById('atividadeDesempenhada').value;             
    const emailComercial = document.getElementById('emailComercial').value;             
    const fonteRenda = document.getElementById('fonteDeRenda').value;        
    const rendaMensal = document.getElementById('rendaMensal').value;
    const telefoneComercial = document.getElementById('telefoneComercial').value;


    const data = {
        escolaridade,
        profissao,
        empresaAtual,
        atividadeDesenvolvida,
        emailComercial,
        fonteRenda,
        rendaMensal,
        telefoneComercial
    }
    
        const response = await fetch(`http://localhost:3000/createProfissional?id=${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const dados = await response.json();
    console.log(dados);

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

    console.log(dados);
 
}