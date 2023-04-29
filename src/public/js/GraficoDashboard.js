async function somatorioReceita() {
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
  let dadosArrayDespesas = [];
  let dadosArrayReceitas = [];

  if (dadosReceita === null) {
    console.log('Não foi possível carregar os dados');
  }
  if (dadosDespesa === null) {
  console.log('Não foi possível carregar os dados'); 
  }

  dadosReceita.forEach((userReceitas) => {
    dadosArrayReceitas.push(userReceitas.valor);
  });

  dadosDespesa.forEach((userDespesas) => {
    dadosArrayDespesas.push(userDespesas.valor);
  });

  const ctx = document.getElementById('meuGrafico').getContext('2d');

const meuGrafico = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Receitas', 'Despesas'],
    datasets: [{
      label: 'Valor',
      data: [dadosArrayReceitas.reduce((a, b) => a + b, 0), dadosArrayDespesas.reduce((a, b) => a + b, 0)],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

   
}

somatorioReceita(); 
