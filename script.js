const input = document.getElementById("input");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
let pokemonAtual = null;

const nomesTipos = {
  normal: "Normal", fire: "Fogo", water: "Água", grass: "Planta",
  electric: "Elétrico", ice: "Gelo", fighting: "Lutador",
  poison: "Venenoso", ground: "Terra", flying: "Voador",
  psychic: "Psíquico", bug: "Inseto", rock: "Pedra",
  ghost: "Fantasma", dragon: "Dragão", dark: "Sombrio",
  steel: "Aço", fairy: "Fada"
};

const nomesStatus = {
  hp: "HP", attack: "Ataque", defense: "Defesa",
  "special-attack": "Atq. Esp.", "special-defense": "Def. Esp.",
  speed: "Velocidade"
};

function formatarNome(nome) {
  return nome.replaceAll("-", " ").replace(/\b\w/g, letra => letra.toUpperCase());
}

async function buscarPokemon(nome) {
  nome = String(nome).trim().toLowerCase().replaceAll(" ", "-");
  if (!nome) {
    resultado.innerHTML = '<p class="mensagem">Digite o nome ou número de um Pokémon.</p>';
    return;
  }

  resultado.innerHTML = '<p class="mensagem">Procurando Pokémon...</p>';
  botao.disabled = true;

  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + encodeURIComponent(nome));

    if (!resposta.ok) {
      if (resposta.status === 404) {
        resultado.innerHTML = '<p class="mensagem">Pokémon não encontrado. Tente outro nome ou número.</p>';
        return;
      }
      throw new Error("Falha ao consultar a API");
    }

    const dados = await resposta.json();
    pokemonAtual = dados.id;
    input.value = formatarNome(dados.name);

    const imagem = dados.sprites.other["official-artwork"].front_default || dados.sprites.front_default;
    const tipos = dados.types.map(item => {
      const tipo = item.type.name;
      return `<span class="tipo ${tipo}">${nomesTipos[tipo] || formatarNome(tipo)}</span>`;
    }).join("");

    const estatisticas = dados.stats.map(item => {
      const nomeStatus = nomesStatus[item.stat.name] || formatarNome(item.stat.name);
      const valor = item.base_stat;
      const largura = Math.min(100, (valor / 200) * 100);
      return `<div class="estatistica">
        <span>${nomeStatus}</span><span class="valor">${valor}</span>
        <div class="barra"><span style="width: ${largura}%"></span></div>
      </div>`;
    }).join("");

    const habilidades = dados.abilities
      .map(item => formatarNome(item.ability.name)).join(", ");

    resultado.innerHTML = `
      <div class="pokemon-grid">
        <div class="painel-imagem">
          <div class="tela-topo"><span></span><span></span></div>
          <div class="tela"><img src="${imagem}" alt="Imagem do Pokémon ${formatarNome(dados.name)}"></div>
          <span class="mini-texto">POKÉMON IDENTIFICADO</span>
        </div>
        <div class="painel-dados">
          <span class="numero">Nº ${String(dados.id).padStart(4, "0")}</span>
          <h2 class="nome-pokemon">${formatarNome(dados.name)}</h2>
          <div class="tipos">${tipos}</div>
          <div class="infos-rapidas">
            <div class="info"><small>Altura</small><strong>${(dados.height / 10).toFixed(1)} m</strong></div>
            <div class="info"><small>Peso</small><strong>${(dados.weight / 10).toFixed(1)} kg</strong></div>
          </div>
          <h3 class="secao-titulo">Estatísticas base</h3>
          ${estatisticas}
          <p class="habilidades"><strong>Habilidades:</strong> ${habilidades}</p>
        </div>
      </div>`;

    anterior.disabled = dados.id <= 1;
    proximo.disabled = false;
  } catch (erro) {
    resultado.innerHTML = '<p class="mensagem">Erro ao conectar com a PokéAPI. Tente novamente.</p>';
  } finally {
    botao.disabled = false;
  }
}

document.getElementById("form-busca").addEventListener("submit", function(evento) {
  evento.preventDefault();
  buscarPokemon(input.value);
});

document.querySelectorAll("[data-pokemon]").forEach(botaoAtalho => {
  botaoAtalho.addEventListener("click", () => buscarPokemon(botaoAtalho.dataset.pokemon));
});

anterior.addEventListener("click", () => {
  if (pokemonAtual > 1) buscarPokemon(pokemonAtual - 1);
});
proximo.addEventListener("click", () => {
  if (pokemonAtual !== null) buscarPokemon(pokemonAtual + 1);
});

buscarPokemon("pikachu");