function calcularGorjeta() {
    // Obtém os valores inseridos
    let valorConta = parseFloat(document.getElementById("valorConta").value);
    let nivelSatisfacao = document.getElementById("satisfacao").value;
  
    // Verifica se o valor da conta é válido
    if (isNaN(valorConta) || valorConta <= 0) {
      alert("Por favor, insira um valor válido para a conta.");
      return;
    }
  
    // Define a porcentagem da gorjeta com base no nível de satisfação
    let porcentagemGorjeta;
    if (nivelSatisfacao === "bom") {
      porcentagemGorjeta = 0.10; // 10%
    } else if (nivelSatisfacao === "otimo") {
      porcentagemGorjeta = 0.15; // 15%
    } else if (nivelSatisfacao === "excelente") {
      porcentagemGorjeta = 0.20; // 20%
    }
  
    // Calcula o valor da gorjeta
    let valorGorjeta = valorConta * porcentagemGorjeta;
  
    // Calcula o valor total a pagar
    let totalPagar = valorConta + valorGorjeta;
  
    // Exibe os resultados na tela
    document.getElementById("valorGorjeta").textContent = valorGorjeta.toFixed(2);
    document.getElementById("totalPagar").textContent = totalPagar.toFixed(2);
  }
  