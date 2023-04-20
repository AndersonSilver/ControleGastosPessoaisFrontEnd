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
    const dados = await response.json();

    if (dados === null) {
      console.log('Não foi possível carregar os dados');
    }

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

    console.log(dados);
    return dados;
  }
  
    