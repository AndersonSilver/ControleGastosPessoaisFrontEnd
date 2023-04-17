
async function dadosLogin() {

    const response = await fetch(`http://localhost:3000/searchDadosPessoais?email=teste@teste.com`);
    const result = await response.json();
    const dados = result;
    console.log(dados);
}

