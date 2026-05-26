const botao = document.getElementById("calcular");

botao.addEventListener("click", () => {

    const pacote = Number(document.getElementById("pacote").value);
    const pessoas = Number(document.getElementById("pessoas").value);

    const resultado = document.getElementById("resultado");

    const custoBruto = pacote * pessoas;

    const taxaServico = custoBruto * 0.10;

    const valorComTaxa = custoBruto + taxaServico;

    let desconto = 0;

    if (pessoas > 100) {
        desconto = valorComTaxa * 0.05;
    }

    const totalFinal = valorComTaxa - desconto;

    resultado.innerHTML = `
        Custo Bruto: R$ ${custoBruto.toFixed(2)} <br>
        Taxa de Serviço: R$ ${taxaServico.toFixed(2)} <br>
        Desconto: R$ ${desconto.toFixed(2)} <br>
        Total Final: R$ ${totalFinal.toFixed(2)}
    `;
});