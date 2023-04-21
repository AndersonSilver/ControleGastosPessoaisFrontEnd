dadosLogin();

async function dadosLogin() {
    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');
    const nomeChamado = localStorage.getItem('name');
    const email = localStorage.getItem('ResultEmail');

    const response = await fetch(`http://localhost:3000/searchDadosPessoais?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const responseProfissional = await fetch(`http://localhost:3000/searchProfissional?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dadosProfissional = await responseProfissional.json();
    const dadosProfissionalFinal = dadosProfissional[0];

    const dados = await response.json();

    if (dadosProfissional === null) {
      console.log('Não foi possível carregar os dados');
    }

    if (dados === null) {
      console.log('Não foi possível carregar os dados');
    }
    
    console.log(dados);
    console.log(dadosProfissionalFinal);
    // Esse dados abaixo e para o formulário de cadastro de dados pessoais

    document.getElementById('NameComplet').value = dados.nameCompleto;
    document.getElementById('SerChamado').value = nomeChamado;
    document.getElementById('email').value = email;
    document.getElementById('telefone').value = dados.telefone;
    document.getElementById('cep').value = dados.cep;
    document.getElementById('estado').value = dados.estado;
    document.getElementById('cidade').value = dados.cidade;
    document.getElementById('dataNascimento').value = dados.aniversario;
    document.getElementById('sexo').value = dados.sexo;
    document.getElementById('cpf').value = dados.cpf;
    document.getElementById('objetivoFinanceiro').value = dados.objetivoFinanceiro;

    // Esse dados abaixo e para o formulário de cadastro de dados profissionais

    document.getElementById('Escolaridade').value = dadosProfissionalFinal.escolaridade;
    document.getElementById('Profissao').value = dadosProfissionalFinal.profissao;
    document.getElementById('Empresa').value = dadosProfissionalFinal.empresa;
    document.getElementById('atividadeDesempenhada').value = dadosProfissionalFinal.atividadeDesempenhada;
    document.getElementById('emailComercial').value = dadosProfissionalFinal.emailComercial;
    document.getElementById('fonteDeRenda').value = dadosProfissionalFinal.fonteDeRenda;
    document.getElementById('rendaMensal').value = dadosProfissionalFinal.rendaMensal;
    document.getElementById('telefoneComercial').value = dadosProfissionalFinal.telefoneComercial;
    

    return dados;
  }
  
    