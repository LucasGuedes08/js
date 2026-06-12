const slides = document.querySelectorAll(".slide");

let atual = 0;

setInterval(() => {

    slides[atual].classList.remove("ativo");

    atual++;

    if(atual >= slides.length){
        atual = 0;
    }

    slides[atual].classList.add("ativo");

},3000);


function animarContador(id, valorFinal){

    let valor = 0;

    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        valor += Math.ceil(valorFinal/100);

        if(valor >= valorFinal){
            valor = valorFinal;
            clearInterval(intervalo);
        }

        elemento.innerText = valor + "+";

    },20);
}

animarContador("clientes",1000);
animarContador("anos",10);
animarContador("destinos",50);
animarContador("fotos",5000);


document
.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Cadastro realizado com sucesso!");

    this.reset();

});