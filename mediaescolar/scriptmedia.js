document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário para não recarregar a página
  
    // Captura os valores inseridos no formulário
    let nomeDoCandidato = prompt("Digite seu nome:"); // Pergunta o nome do candidato
    let nota1 = parseFloat(document.getElementById("nota1").value); // Captura a primeira nota
    let nota2 = parseFloat(document.getElementById("nota2").value); // Captura a segunda nota
    let nota3 = parseFloat(document.getElementById("nota3").value); // Captura a terceira nota
  
    // Cálculo da média
    let media = (nota1 + nota2 + nota3) / 3;
  
    // Exibe a mensagem de acordo com a média
    let resultado = document.getElementById("resultado");
    
    if (media >= 8 && media <= 10) {
      resultado.textContent = `Parabéns, ${nomeDoCandidato}! Você foi aprovado. Sua média foi: ${media.toFixed(2)}. Você é Altamente Qualificado!`;
    } else if (media >= 5 && media < 8) {
      resultado.textContent = `Parabéns, ${nomeDoCandidato}! Você foi aprovado. Sua média foi: ${media.toFixed(2)}`;
    } else {
      resultado.textContent = `Reprovado, ${nomeDoCandidato}. Mais sorte da próxima vez. Sua média foi: ${media.toFixed(2)}`;
    }
  });
  