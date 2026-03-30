const bicho = document.getElementById("raposaIA");
const btn = document.getElementById("raposaIA_comendo");

const estados = {
    normal: "raposaIA.png",
    clicado: "raposaIA_comendo.png",
    alimentado: "raposaIA_feliz.png",
    fome30: "raposaIA_puto.png",
    fome60: "raposaIA_morto.png",

}

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

function init_cont(){
    if(intervalo) clearInterval(intervalo);

    intervalo = setInterval(()=>{
        if(contador < 60){
            contador++;
            console.log("Tempo: ", contador);

            if(contador == 30){
                bicho.src = estados.fome30;
            }
            if(contador == 60){
                bicho.src = estados.fome60;
            }
        }
    }, 1000);
}

function alimentar(){
    if(contador < 60){
        bicho.src = estados.clicado;
        contador = 0;
        console.log("Comendo");

        if(time_click) clearInterval(time_click)

            time_click = setTimeout (()=>{
                bicho.src = estados.alimentado;
                time_out = setTimeout(()=>{
                    bicho.src = estados.normal;
                }, 1000);
            }, 2000);
    }
}

init_cont();