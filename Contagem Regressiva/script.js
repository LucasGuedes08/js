let dataAlvo = new Date("2027-06-12T00:00:00");

function atualizarContagem() {

    let dataAtual = new Date();

    
    if (dataAtual >= dataAlvo) {

        document.getElementById("anos").innerText = 0;
        document.getElementById("meses").innerText = 0;
        document.getElementById("dias").innerText = 0;
        document.getElementById("horas").innerText = 0;
        document.getElementById("minutos").innerText = 0;
        document.getElementById("segundos").innerText = 0;

        return;
    }

    let anos = dataAlvo.getFullYear() - dataAtual.getFullYear();

    let meses = dataAlvo.getMonth() - dataAtual.getMonth();

    let dias = dataAlvo.getDate() - dataAtual.getDate();

    let horas = dataAlvo.getHours() - dataAtual.getHours();

    let minutos = dataAlvo.getMinutes() - dataAtual.getMinutes();

    let segundos = dataAlvo.getSeconds() - dataAtual.getSeconds();


    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }


     if (minutos < 0) {
        minutos += 60;
        horas--;
    }


    if (horas < 0) {
        horas += 24;
        dias--;
    }


    if (dias < 0) {

        
        let ultimoDiaMesAnterior = new Date(
            dataAlvo.getFullYear(),
            dataAlvo.getMonth(),
            0
        ).getDate();

        dias += ultimoDiaMesAnterior;

        meses--;
    }


    if (meses < 0) {
        meses += 12;
        anos--;
    }


    document.getElementById("anos").innerText = anos;
    document.getElementById("meses").innerText = meses;
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}


atualizarContagem();


setInterval(atualizarContagem, 1000);