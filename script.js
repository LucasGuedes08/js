// 1 - Área de um Retângulo
let largura = 10;
let altura = 5;

let area = largura * altura;

console.log("1 - Área:", area);


// 2 - Dobro e Metade
let numero = 20;

console.log("2 - Dobro:", numero * 2);
console.log("2 - Metade:", numero / 2);


// 3 - Média Aritmética
let n1 = 8;
let n2 = 7;
let n3 = 9;

let media = (n1 + n2 + n3) / 3;

console.log("3 - Média:", media);


// 4 - Conversão de Temperatura
let celsius = 30;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log("4 - Fahrenheit:", fahrenheit);


// 1 - Comparando dois números
let numero1 = 10;
let numero2 = 20;

console.log("5 - Primeiro é maior:", numero1 > numero2);
console.log("5 - Primeiro é menor ou igual:", numero1 <= numero2);
console.log("5 - Os números são iguais:", numero1 === numero2);


// 2 - Maioridade
let idade = 65;

console.log("6 - É maior de idade:", idade >= 18);
console.log("6 - É idosa:", idade >= 60);


// 1 - Verificação de Maioridade
let idadeMaioridade = 20;

if (idadeMaioridade >= 18) {
    console.log("7 - Você é maior de idade");
} else {
    console.log("7 - Você é menor de idade");
}


// 2 - Verificação de Aprovado
let nota = 8;

if (nota >= 7) {
    console.log("8 - Aprovado");
} else {
    console.log("8 - Reprovado");
}


// 3 - Verificar Temperatura
let temperatura = 32;

if (temperatura > 30) {
    console.log("9 - Está quente");
} else {
    console.log("9 - Está frio");
}


// 4 - Classificação de Idade
let idadeClassificacao = 25;

if (idadeClassificacao < 12) {
    console.log("10 - Criança");
} else if (idadeClassificacao < 17) {
    console.log("10 - Adolescente");
} else if (idadeClassificacao < 59) {
    console.log("10 - Adulto");
} else {
    console.log("10 - Idoso");
}


// 5 - Sistema de Notas
let notaEscolar = 85;

if (notaEscolar > 90) {
    console.log("11 - A");
} else if (notaEscolar > 80) {
    console.log("11 - B");
} else if (notaEscolar > 70) {
    console.log("11 - C");
} else if (notaEscolar > 60) {
    console.log("11 - D");
} else {
    console.log("11 - F");
}


// 6 - Classificação de Pistas
let distancia = 1000;

if (distancia < 400) {
    console.log("12 - Pista curta");
} else if (distancia < 800) {
    console.log("12 - Pista média");
} else if (distancia < 1500) {
    console.log("12 - Pista longa");
} else {
    console.log("12 - Pista muito longa");
}


// 7 - Pontuação do Jogo
let pontuacao = 7500;

if (pontuacao < 1000) {
    console.log("13 - Iniciante");
} else if (pontuacao < 5000) {
    console.log("13 - Intermediário");
} else if (pontuacao < 10000) {
    console.log("13 - Avançado");
} else {
    console.log("13 - Mestre");
}



// 1 - Elegível para Promoção
let anos = 6;
let projetos = 5;

if (anos >= 5 || projetos > 10) {
    console.log("14 - Você está elegível para promoção");
} else {
    console.log("14 - Você não está elegível para promoção");
}


// 2 - Entrar em um Evento
let idadeEvento = 25;

if (idadeEvento >= 18 && idadeEvento <= 30) {
    console.log("15 - Você pode entrar no evento");
} else {
    console.log("15 - Você não pode entrar no evento");
}


// 3 - Verificação de Login
let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("16 - Login bem-sucedido");
} else {
    console.log("16 - Nome de usuário ou senha incorretos");
}


// 4 - Intervalo de Valores
let numeroIntervalo = 35;

if (numeroIntervalo >= 10 && numeroIntervalo <= 20) {
    console.log("17 - O número está dentro do intervalo entre 10 e 20");
} else if (numeroIntervalo >= 30 && numeroIntervalo <= 50) {
    console.log("17 - O número está dentro do intervalo entre 30 e 50");
} else {
    console.log("17 - Ele não está dentro do intervalo de 10 e 20, nem 30 e 50");
}


// 1 - Dias da Semana
let dia = 3;

switch (dia) {
    case 1:
        console.log("18 - Domingo");
        break;

    case 2:
        console.log("18 - Segunda-feira");
        break;

    case 3:
        console.log("18 - Terça-feira");
        break;

    case 4:
        console.log("18 - Quarta-feira");
        break;

    case 5:
        console.log("18 - Quinta-feira");
        break;

    case 6:
        console.log("18 - Sexta-feira");
        break;

    case 7:
        console.log("18 - Sábado");
        break;

    default:
        console.log("18 - Número inválido. Insira um valor entre 1 e 7.");
}


// 2 - Classificação de Idade
let idadeJuvenil = 15;

switch (idadeJuvenil) {
    case 5:
        console.log("19 - Infantil A");
        break;

    case 10:
        console.log("19 - Infantil B");
        break;

    case 15:
        console.log("19 - Juvenil A");
        break;

    case 20:
        console.log("19 - Juvenil B");
        break;

    case 30:
        console.log("19 - Adulto");
        break;

    default:
        console.log("19 - Idade inválida. Insira 5, 10, 15, 20 ou 30.");
}


// 3 - Turno de Trabalho
let turno = "M";

switch (turno) {
    case "M":
        console.log("20 - Bom dia!");
        break;

    case "V":
        console.log("20 - Boa tarde!");
        break;

    case "N":
        console.log("20 - Boa noite!");
        break;

    default:
        console.log("20 - Turno inválido. Insira M, V ou N.");
}


// 4 - Estações do Ano
let estacao = 2;

switch (estacao) {
    case 1:
        console.log("21 - Primavera");
        break;

    case 2:
        console.log("21 - Verão");
        break;

    case 3:
        console.log("21 - Outono");
        break;

    case 4:
        console.log("21 - Inverno");
        break;

    default:
        console.log("21 - Estação inválida. Insira um número de 1 a 4.");
}