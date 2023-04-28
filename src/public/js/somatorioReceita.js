async function somatorioReceita() {
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

  const valores = [];

  dados.forEach((user) => {
    valores.push(user.valor);
  });

  total = valores.reduce((a, b) => a + b, 0);

  const valorFormatado = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  somatorioReceita.innerHTML = valorFormatado;

  const ctx = document.getElementById('grafico').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Receitas'],
      datasets: [{
        label: 'Valor Total',
        data: valores,
        backgroundColor: 'green'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            }
          }
        }]
      }
    }
  });
}

somatorioReceita();  // Call the function to generate the chart
