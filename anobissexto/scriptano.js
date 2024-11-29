function verificar() {
    const ano = parseInt(document.getElementById('ano').value);
    const resultado = document.getElementById('resultado');
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado.innerText = "O ano é bissexto!";
    } else {
        resultado.innerText = "O ano não é bissexto.";
    }
}