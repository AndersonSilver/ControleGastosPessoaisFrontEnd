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

    
    // Esse dados abaixo e para o formulário de cadastro de dados pessoais

    const nameCompletoElement = document.getElementById('NomeCompleto');

    if (nameCompletoElement !== null) {
      nameCompletoElement.value = dados.nameCompleto;
    }

    const SerChamadoElement = document.getElementById('SerChamado');

    if (SerChamadoElement !== null) {
      SerChamadoElement.value = nomeChamado;
    }

    const SerChamadoPerfilElement = document.getElementById('SerChamadoPerfil');

    if (SerChamadoPerfilElement !== null) {
      SerChamadoPerfilElement.value = nomeChamado;
    }

    const emailElement = document.getElementById('email');

    if (emailElement !== null) {
      emailElement.value = email;
    }

    const telefoneElement = document.getElementById('telefone');

    if (telefoneElement !== null) {
      telefoneElement.value = dados.telefone;
    }

    const cepElement = document.getElementById('cep');

    if (cepElement !== null) {
      cepElement.value = dados.cep;
    }

    const estadoElement = document.getElementById('estado');

    if (estadoElement !== null) {
      estadoElement.value = dados.estado;
    }

    const cidadeElement = document.getElementById('cidade');

    if (cidadeElement !== null) {
      cidadeElement.value = dados.cidade;
    }

    const dataNascimentoElement = document.getElementById('dataNascimento');

    if (dataNascimentoElement !== null) {
      dataNascimentoElement.value = dados.aniversario;
    }

    const sexoElement = document.getElementById('sexo');

    if (sexoElement !== null) {
      sexoElement.value = dados.sexo;
    }

    const cpfElement = document.getElementById('cpf');

    if (cpfElement !== null) {
      cpfElement.value = dados.cpf;
    }

    const objetivoFinanceiroElement = document.getElementById('objetivoFinanceiro');

    if (objetivoFinanceiroElement !== null) {
      objetivoFinanceiroElement.value = dados.objetivoFinanceiro;
    }

    // Esse dados abaixo e para o formulário de cadastro de dados profissionais

    const EscolaridadeElement = document.getElementById('Escolaridade');

    if (EscolaridadeElement !== null) {
      EscolaridadeElement.value = dadosProfissionalFinal.escolaridade;
    }

    const ProfissaoElement = document.getElementById('Profissao');

    if (ProfissaoElement !== null) {
      ProfissaoElement.value = dadosProfissionalFinal.profissao;
    }

    const EmpresaElement = document.getElementById('Empresa');

    if (EmpresaElement !== null) {
      EmpresaElement.value = dadosProfissionalFinal.empresaAtual;
    }

    const AtividadeDesempenhadaElement = document.getElementById('atividadeDesempenhada');

    if (AtividadeDesempenhadaElement !== null) {
      AtividadeDesempenhadaElement.value = dadosProfissionalFinal.atividadeDesenvolvida;
    }

    const EmailComercialElement = document.getElementById('emailComercial');

    if (EmailComercialElement !== null) {
      EmailComercialElement.value = dadosProfissionalFinal.emailComercial;
    }

    const FonteDeRendaElement = document.getElementById('fonteDeRenda');

    if (FonteDeRendaElement !== null) {
      FonteDeRendaElement.value = dadosProfissionalFinal.fonteRenda;
    }

    const RendaMensalElement = document.getElementById('rendaMensal');

    if (RendaMensalElement !== null) {
      RendaMensalElement.value = dadosProfissionalFinal.rendaMensal;
    }

    const TelefoneComercialElement = document.getElementById('telefoneComercial');

    if (TelefoneComercialElement !== null) {
      TelefoneComercialElement.value = dadosProfissionalFinal.telefoneComercial;
    }

    return dados,dadosProfissionalFinal;
  }
  
