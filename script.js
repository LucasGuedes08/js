const input = document.getElementById("input");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

function traduzirClima(codigo) {
  if (codigo === 0) return { texto: "Céu limpo", icone: "☀️" };
  if (codigo === 1) return { texto: "Poucas nuvens", icone: "🌤️" };
  if (codigo === 2) return { texto: "Parcialmente nublado", icone: "⛅" };
  if (codigo === 3) return { texto: "Nublado", icone: "☁️" };
  if (codigo === 45 || codigo === 48) return { texto: "Neblina", icone: "🌫️" };
  if (codigo >= 51 && codigo <= 57) return { texto: "Garoa", icone: "🌦️" };
  if (codigo >= 61 && codigo <= 67) return { texto: "Chuva", icone: "🌧️" };
  if (codigo >= 71 && codigo <= 77) return { texto: "Neve", icone: "❄️" };
  if (codigo >= 80 && codigo <= 82) return { texto: "Pancadas de chuva", icone: "🌦️" };
  if (codigo >= 85 && codigo <= 86) return { texto: "Neve", icone: "❄️" };
  if (codigo >= 95 && codigo <= 99) return { texto: "Tempestade", icone: "⛈️" };
  return { texto: "Não informado", icone: "🌡️" };
}

function mostrarClima(dadosClima, cidade) {
  const atual = dadosClima.current;
  const clima = traduzirClima(atual.weather_code);
  const dia = new Date(atual.time).toLocaleDateString("pt-BR", {
    weekday: "long", day: "numeric", month: "long"
  });

  const painel = document.createElement("section");
  painel.className = "clima-atual";
  painel.innerHTML = `
    <div class="clima-principal">
      <span class="rotulo">CLIMA AGORA</span>
      <h2 class="cidade-nome"></h2>
      <p class="data-hoje">${dia}</p>
      <div class="temperatura-grande">
        <span class="icone-grande" aria-hidden="true">${clima.icone}</span>
        <strong>${Math.round(atual.temperature_2m)}°</strong>
      </div>
      <p class="descricao-clima">${clima.texto}</p>
    </div>
    <div class="detalhes-clima">
      <div class="detalhe"><span class="detalhe-icone">🌡️</span><div><small>Sensação térmica</small><strong>${Math.round(atual.apparent_temperature)}°C</strong></div></div>
      <div class="detalhe"><span class="detalhe-icone">💧</span><div><small>Umidade do ar</small><strong>${atual.relative_humidity_2m}%</strong></div></div>
      <div class="detalhe"><span class="detalhe-icone">💨</span><div><small>Vento</small><strong>${Math.round(atual.wind_speed_10m)} km/h</strong></div></div>
    </div>`;

  painel.querySelector(".cidade-nome").textContent = cidade.name + ", " + (cidade.country_code || "");
  resultado.appendChild(painel);
}

function mostrarPrevisao(dadosClima) {
  const dias = dadosClima.daily;
  const secao = document.createElement("section");
  secao.innerHTML = `
    <div class="titulo-previsao">
      <h2>Previsão para 7 dias</h2>
      <p>Temperaturas máximas e mínimas de cada dia</p>
    </div>
    <div class="dias-grid"></div>`;

  const lista = secao.querySelector(".dias-grid");

  for (const [indice, data] of dias.time.entries()) {
    const clima = traduzirClima(dias.weather_code[indice]);
    const dia = new Date(data + "T12:00:00");
    const nomeDia = indice === 0 ? "Hoje" : dia.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
    const dataFormatada = dia.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    const maxima = Math.round(dias.temperature_2m_max[indice]);
    const minima = Math.round(dias.temperature_2m_min[indice]);

    const cartao = document.createElement("div");
    cartao.className = "dia-card";
    cartao.innerHTML = `
      <span class="dia-nome">${nomeDia}</span>
      <span class="dia-data">${dataFormatada}</span>
      <span class="dia-icone" aria-hidden="true">${clima.icone}</span>
      <span class="dia-condicao">${clima.texto}</span>
      <div class="temperaturas"><span class="max">${maxima}°</span><span class="min">${minima}°</span></div>`;
    lista.appendChild(cartao);
  }

  resultado.appendChild(secao);
}

async function buscarClima(cidadeNome) {
  cidadeNome = cidadeNome.trim();
  if (!cidadeNome) {
    resultado.innerHTML = '<p class="mensagem">Digite o nome de uma cidade.</p>';
    return;
  }

  resultado.innerHTML = '<p class="mensagem">Consultando a previsão do tempo...</p>';
  buscar.disabled = true;

  try {
    const geolocalizacao = await fetch(
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
      encodeURIComponent(cidadeNome) + "&count=1&language=pt&format=json"
    );
    if (!geolocalizacao.ok) throw new Error("Falha na localização");

    const dados = await geolocalizacao.json();
    if (!dados.results || dados.results.length === 0) {
      resultado.innerHTML = '<p class="mensagem">Cidade não encontrada. Tente outro nome.</p>';
      return;
    }

    const cidade = dados.results[0];
    const parametros = new URLSearchParams({
      latitude: cidade.latitude,
      longitude: cidade.longitude,
      current: "temperature_2m,relative_humidity_2m,weather_code,apparent_temperature,wind_speed_10m",
      daily: "temperature_2m_max,temperature_2m_min,weather_code",
      timezone: "auto",
      forecast_days: "7"
    });

    const resposta = await fetch("https://api.open-meteo.com/v1/forecast?" + parametros);
    if (!resposta.ok) throw new Error("Falha na previsão");
    const dadosClima = await resposta.json();

    resultado.innerHTML = "";
    input.value = cidade.name;
    mostrarClima(dadosClima, cidade);
    mostrarPrevisao(dadosClima);
  } catch (erro) {
    resultado.innerHTML = '<p class="mensagem">Falha ao conectar com a API. Tente novamente.</p>';
  } finally {
    buscar.disabled = false;
  }
}

document.getElementById("form-busca").addEventListener("submit", function(evento) {
  evento.preventDefault();
  buscarClima(input.value);
});

document.querySelectorAll("[data-cidade]").forEach(botaoAtalho => {
  botaoAtalho.addEventListener("click", () => buscarClima(botaoAtalho.dataset.cidade));
});

buscarClima("São Paulo");