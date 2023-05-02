dadosReceita()
async function dadosReceita() {
    const token = localStorage.getItem('resulttoken');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    const response = await fetch(`http://localhost:3000/searchReceitaUni?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const dadosArray = await response.json();
    const ResultFinal = dadosArray[0]

    if (dadosArray === null) {
      console.log('Não foi possível carregar os dados');
    }

    console.log(ResultFinal);

  }
  
