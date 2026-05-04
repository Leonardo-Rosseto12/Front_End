function revelar() {

    const img = document.getElementById("ImagemJogador");
    img.src = "img/_vinicius_junior.png";

    document.getElementById("Nome").innerText = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("Data_Nas").innerText = "12/07/2000 (25 anos)";
    document.getElementById("Altura").innerText = "1,76 m";
    document.getElementById("Posicao").innerText = "Ponta-esquerda / Atacante";
    document.getElementById("Rank").innerText = "9,5";

    const spans = document.querySelectorAll("span");

    spans.forEach(span => {
        span.classList.remove("placeholder");

        span.classList.add("card-text");
    });

        document.querySelectorAll(".placeholder-glow").forEach(el => {
        el.classList.remove("placeholder-glow");
    });
}