const botao = document.getElementById("analisar");

botao.addEventListener("click", () => {

    let numero = document.getElementById("cartao").value;

    numero = numero.replace(/\s/g, "").replace(/\./g, "");

    const resultado = document.getElementById("resultado");

    if (numero.length < 13 || numero.length > 16) {

        resultado.innerHTML = `
            Status: Inválido
        `;

        return;
    }

    let soma = 0;
    let inverter = false;

    for (let i = numero.length - 1; i >= 0; i--) {

        let digito = Number(numero[i]);

        if (inverter) {

            digito *= 2;

            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;

        inverter = !inverter;
    }

    const valido = soma % 10 === 0;

    let bandeira = "Desconhecida";
    let setor = "Financeiro";
    let banco = "Banco Não Identificado";

    if (numero.startsWith("4")) {
        bandeira = "Visa";
        banco = "Infinity Visa Bank";
    }

    else if (
        numero.startsWith("51") ||
        numero.startsWith("52") ||
        numero.startsWith("53") ||
        numero.startsWith("54") ||
        numero.startsWith("55")
    ) {
        bandeira = "MasterCard";
        banco = "Infinity Master Bank";
    }

    else if (numero.startsWith("34") || numero.startsWith("37")) {
        bandeira = "American Express";
        banco = "Infinity Express";
    }

    resultado.innerHTML = `
        Status: ${valido ? "Válido" : "Inválido"} <br>
        Bandeira: ${bandeira} <br>
        Categoria: ${setor} <br>
        Banco Emissor: ${banco}
    `;
});