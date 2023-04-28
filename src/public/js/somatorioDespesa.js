async function somatorioDespesas(){
    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');

    const responseDespesas = await fetch(`http://localhost:3000/searchDespesa?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dados = await responseDespesas.json();

    if (dados === null) {
        console.log('Não foi possível carregar os dados');
    }

    const somatorioDespesas  = document.getElementById("somatorioDespesas");
    let total = 0;

    dados.forEach((user) => {

    total += user.valor;
    
    });

    const valorFormatado = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    somatorioDespesas.innerHTML = valorFormatado;

}

somatorioDespesas();