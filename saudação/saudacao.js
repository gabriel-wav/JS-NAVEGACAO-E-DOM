const saudacao = document.getElementById('saudacao');
        const hora = new Date().getHours();
        if (hora >= 6 && hora < 12) {
            saudacao.innerText = "Bom dia!";
        } else if (hora >= 12 && hora < 18) {
            saudacao.innerText = "Boa tarde!";
        } else {
            saudacao.innerText = "Boa noite!";
        }