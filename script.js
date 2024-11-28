document.getElementById("meuForm").addEventListener(submit, function (e) {
  e.preventDefault(); // Impede o envio do formulário

  // Captura o valor inserido no campo quantity
  let quantidade = document.getElementById("quantity").value;

  // Gera um número aleatório entre 1 e 10
  let numeroSorteado = Math.floor(Math.random() * 10) + 1;

  if (quantidade >= 1 && quantidade <= 10) {
    alert(`Você inseriu a quantidade: ${quantidade}`);
    if (quantidade === numeroSorteado) {
      document.getElementById(
        "resultado"
      ).textContent = `Parabéns, você acertou! O número sorteado foi ${numeroSorteado}.`;
    } else {
      document.getElementById(
        "resultado"
      ).textContent = `Tente novamente! O número sorteado foi ${numeroSorteado}.`;
    }
  } else {
    document.getElementById("resultado").textContent =
      "Por favor, insira um número válido entre 1 e 10.";
  }
});
