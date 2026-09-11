let pedidos = localStorage.getItem("pedidos");

if (pedidos == null) {
    pedidos = [];
} else {
    pedidos = pedidos.split("|");
}


function adicionarLanche(nome) {

    pedidos.push(nome);

    localStorage.setItem("pedidos", pedidos);

    mostrarPedidos();
}


function mostrarPedidos() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < pedidos.length; i++) {

        let imagem = "";

        if (pedidos[i] == "Hamburguer") {
            imagem = "img/hamburguer.jpg";
        }

        else if (pedidos[i] == "Pizza") {
            imagem = "img/pizza.png";
        }

        else if (pedidos[i] == "Refrigerante") {
            imagem = "img/refrigerante.webp";
        }

        lista.innerHTML += `
            <div class="item">

                <img src="${imagem}" alt="${pedidos[i]}">

                <p>${pedidos[i]}</p>

                <button onclick="removerLanche(${i})">
                    Remover
                </button>

            </div>
        `;
    }

    document.getElementById("quantidade").innerText = pedidos.length;
}


function removerLanche(indice) {

    pedidos.splice(indice, 1);

    localStorage.setItem("pedidos", pedidos);

    mostrarPedidos();
}


mostrarPedidos();