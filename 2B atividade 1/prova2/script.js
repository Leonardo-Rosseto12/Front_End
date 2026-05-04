function proximo() {

    document.getElementById("tituloA").innerText = "Grupo D";
    document.getElementById("listaA").innerHTML = `
        <li>Estados Unidos</li>
        <li>Paraguai</li>
        <li>Austrália</li>
        <li>Turquia</li>
    `;
    document.getElementById("fatoA").innerText =
        "Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.";

    document.getElementById("tituloB").innerText = "Grupo E";
    document.getElementById("listaB").innerHTML = `
        <li>Alemanha</li>
        <li>Equador</li>
        <li>Costa do Marfim</li>
        <li>Curaçao</li>
    `;
    document.getElementById("fatoB").innerText =
        "Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.";

    document.getElementById("tituloC").innerText = "Grupo F";
    document.getElementById("listaC").innerHTML = `
        <li>Holanda</li>
        <li>Japão</li>
        <li>Tunísia</li>
        <li>Suécia</li>
    `;
    document.getElementById("fatoC").innerText =
        "Holanda e Japão já fizeram confrontos equilibrados. Suécia tem tradição em Copas.";
}