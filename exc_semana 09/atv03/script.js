const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const nome = document.getElementById("nome").value;

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;

    resultado.classList.remove("aprovado", "exame", "reprovado");

    if (media >= 7 && media <= 10) {

        resultado.textContent = `${nome} foi aprovado com média ${media.toFixed(2)}`;

        resultado.classList.add("aprovado");

    } else if (media >= 4 && media < 7) {

        const falta = (10 - media).toFixed(2);

        resultado.textContent = `${nome} está em exame com média ${media.toFixed(2)}. Faltam ${falta} pontos para 10`;

        resultado.classList.add("exame");

    } else {

        resultado.textContent = `${nome} foi reprovado com média ${media.toFixed(2)}`;

        resultado.classList.add("reprovado");
    }

});