const botao = document.getElementById("calcular");

botao.addEventListener("click", () => {

    const bandeira = document.getElementById("bandeira").value;
    const valor = Number(document.getElementById("valor").value);
    const parcelas = Number(document.getElementById("parcelas").value);

    const resultado = document.getElementById("resultado");

    let taxa = 0;

    switch (bandeira) {

        case "visa":
            taxa = 0.02;
            break;

        case "master":
            taxa = 0.0185;
            break;

        case "elo":
            taxa = 0.03;
            break;
    }

    const valorTaxa = valor * taxa;

    const juros = valor * (0.015 * parcelas);

    const taxaMensal = parcelas * 12.50;

    const valorTotal = valor + valorTaxa + juros + taxaMensal;

    const valorParcela = valorTotal / parcelas;

    resultado.innerHTML = `
        Taxa: R$ ${valorTaxa.toFixed(2)} <br>
        Juros: R$ ${juros.toFixed(2)} <br>
        Parcela: R$ ${valorParcela.toFixed(2)}
    `;
});