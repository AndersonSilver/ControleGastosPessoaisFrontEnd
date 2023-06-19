let meuGrafico; // Variável global para armazenar o gráfico

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

  if (dadosReceita === null) {
    console.log('Não foi possível carregar os dados de receita');
  }
  if (dadosDespesa === null) {
    console.log('Não foi possível carregar os dados de despesa');
  }

  const labelsReceita = dadosReceita.map((userReceitas) => userReceitas.descricao);
  const valoresReceita = dadosReceita.map((userReceitas) => userReceitas.valor);
  
  const labelsDespesa = dadosDespesa.map((userDespesas) => userDespesas.descricao);
  const valoresDespesa = dadosDespesa.map((userDespesas) => userDespesas.valor);

  const canvas = document.getElementById('meuGrafico');

// Restante do código do gráfico...


  const ctx = document.getElementById('meuGrafico').getContext('2d');

  if (meuGrafico) {
    meuGrafico.destroy(); // Destruir gráfico existente, se houver
  }

  meuGrafico = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [...labelsReceita, ...labelsDespesa],
      datasets: [{
        label: 'Valor',
        data: [...valoresReceita, ...valoresDespesa],
        backgroundColor: [
          ...generateRandomColors(labelsReceita.length),
          ...generateRandomColors(labelsDespesa.length)
        ],
        borderColor: [
          ...generateRandomColors(labelsReceita.length),
          ...generateRandomColors(labelsDespesa.length)
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        r: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    }
  });
}

// Função auxiliar para gerar cores aleatórias
function generateRandomColors(quantity) {
  const colors = [];
  for (let i = 0; i < quantity; i++) {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, 0.2)`;
    colors.push(color);
  }
  return colors;
}

somatorioReceita();
