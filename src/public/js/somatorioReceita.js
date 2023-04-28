async function somatorioReceita(){
    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const responseReceita = await fetch(`http://localhost:3000/searchReceita?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dados = await responseReceita.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

    const somatorioReceita  = document.getElementById("somatorioReceitas");
    let total = 0;

    dados.forEach((user) => {

    total += user.valor;
    
    });
    const valorFormatado = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    somatorioReceita.innerHTML = valorFormatado;

}

somatorioReceita();