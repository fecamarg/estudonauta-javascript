function tabuada() {
    // Obtém a referência do elemento de entrada de número e do select
    const numInput = document.getElementById('txtn');
    const tabSelect = document.getElementById('seltab');
  
    // Verifica se o campo de número está vazio ou é menor ou igual a zero
    if (numInput.value.length === 0 || numInput.value <= 0) {
      window.alert('Por favor, digite um número!');
      return;
    }
  
    // Obtém o valor do número digitado pelo usuário
    const num = parseInt(numInput.value);
    
    // Limpa as opções existentes no select
    tabSelect.innerHTML = '';
  
    // Gera as opções da tabuada e adiciona ao select
    for (let c = 1; c <= 10; c++) {
      // Cria uma nova opção
      const item = document.createElement('option');
      
      // Define o texto da opção com a expressão da tabuada
      item.textContent = `${num} x ${c} = ${num * c}`;
      
      // Define o valor da opção
      item.value = `tab${c}`;
      
      // Adiciona a opção ao select
      tabSelect.appendChild(item);
    }
  }
  