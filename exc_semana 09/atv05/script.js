const input = document.getElementById("nome");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

let convidados = [];

botao.addEventListener("click", () => {

    const nome = input.value.trim();

    if (nome === "") {
        return;
    }

    convidados.push(nome);

    criarItem(nome);

    input.value = "";
});

function criarItem(nome) {

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = nome;

    const div = document.createElement("div");
    div.classList.add("acoes");

    const concluir = document.createElement("button");
    concluir.textContent = "Concluir";

    const editar = document.createElement("button");
    editar.textContent = "Editar";

    const excluir = document.createElement("button");
    excluir.textContent = "Excluir";

    concluir.addEventListener("click", () => {
        span.classList.toggle("riscado");
    });

    editar.addEventListener("click", () => {

        const novoNome = prompt("Novo nome:");

        if (novoNome && novoNome.trim() !== "") {
            span.textContent = novoNome;
        }
    });

    excluir.addEventListener("click", () => {
        li.remove();
    });

    div.appendChild(concluir);
    div.appendChild(editar);
    div.appendChild(excluir);

    li.appendChild(span);
    li.appendChild(div);

    lista.appendChild(li);
}