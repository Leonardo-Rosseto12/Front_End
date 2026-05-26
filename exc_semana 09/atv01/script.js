function validarCPF() {
    let cpf = document.getElementById("cpf").value.replace(/\D/g, '');
    let resultado = document.getElementById("resultado");

    if (cpf.length !== 11) {
        resultado.textContent = "CPF Inválido";
        resultado.className = "invalido";
        return;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        resultado.textContent = "CPF Inválido";
        resultado.className = "invalido";
        return;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        resultado.textContent = "CPF Inválido";
        resultado.className = "invalido";
        return;
    }

    resultado.textContent = "CPF Válido";
    resultado.className = "valido";
}