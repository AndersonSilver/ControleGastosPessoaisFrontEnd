async function SaldoAtual(){

    const token = localStorage.getItem('resulttoken');
    const id = localStorage.getItem('resultid');
  
    const responseReceita = await fetch(`http://localhost:3000/searchReceita?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  
    const responseDespesas = await fetch(`http://localhost:3000/searchDespesa?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  
    const dadosReceita = await responseReceita.json();
    const dadosDespesa = await responseDespesas.json();

    let TotalReceita = 0;
    let TotalDespesa = 0;
    let Superafit = 0;

    const SaldoAtual  = document.getElementById("SaldoAtual");


    dadosDespesa.forEach((userDespesas) => {
        TotalDespesa += userDespesas.valor;
    });

    dadosReceita.forEach((userReceitas) => {
        TotalReceita += userReceitas.valor;
    });

    Superafit = TotalReceita - TotalDespesa;

    const valorFormatado = Superafit.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    SaldoAtual.innerHTML = valorFormatado;

}

SaldoAtual();