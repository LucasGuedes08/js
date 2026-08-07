// Funções de texto
// Manipulando Texto
let frase = prompt("Digite uma frase:");

// Quantidade de caracteres
console.log("Quantidade de caracteres: " + frase.length);

// Frase em maiúsculas
console.log("Maiúsculas: " + frase.toUpperCase());

// Frase em minúsculas
console.log("Minúsculas: " + frase.toLowerCase());

// Substituindo uma palavra
let palavraAntiga = prompt("Qual palavra deseja substituir?");
let palavraNova = prompt("Digite a nova palavra:");

let novaFrase = frase.replace(palavraAntiga, palavraNova);
console.log("Frase modificada: " + novaFrase);

// Verificando se existe uma palavra
let palavra = prompt("Digite uma palavra para verificar se existe na frase:");

if (frase.includes(palavra)) {
    console.log("A palavra existe na frase.");
} else {
    console.log("A palavra não existe na frase.");
}

// Mostrando o caractere da posição 5
console.log("Caractere da posição 5: " + frase.charAt(4));

// Funções Matemáticas
// Adivinhar o números
let numero = Math.floor(Math.random() * 10) + 1
let palpite = Number(prompt("Adivinhe um número entre 1 e 10"))
if(palpite == numero) {
    console.log("Parabéns! Você acertou!")
} else {
    console.log("Você errou! O número era " + numero)
}

// Arredondando valores
let arredonda = Number(prompt("Digite um número decimal:"))
console.log(Math.ceil(arredonda))
console.log(Math.floor(arredonda))
console.log(Math.round(arredonda))

// Manipulando números
let numeros = [12, 45, 8, 67, 23, 90, 5, 34, 18, 55];

console.log("Maior número: " + Math.max(...numeros));
console.log("Menor número: " + Math.min(...numeros));

// Soma de Dois Números
let numero = Number(prompt("Digite um número:"));

console.log("Valor absoluto: " + Math.abs(valor));
console.log("Elevado à sexta potência: " + Math.pow(valor, 6));
console.log("Raiz quadrada: " + Math.sqrt(valor));

// Funções Declarativas:
// Saudação
function saudacao() {
    console.log("Olá! Seja bem-vindo!");
}

saudacao();

// Contar Caracteres
function contarCaracteres() {
    let palavra = prompt("Digite uma palavra:");
    return palavra.length;
}

console.log(contarCaracteres());

// Maior Número
function maiorNumero() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));

    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(maiorNumero());

// Potência
function potencia() {
    let base = Number(prompt("Digite a base:"));
    let expoente = Number(prompt("Digite o expoente:"));

    return Math.pow(base, expoente);
}

console.log(potencia());

// Contagem
function contagem(inicio, fim) {
    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }
}

contagem(5, 15);

// Funções com Parâmetros
// Saudação
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Lucas");

// Soma de Dois Números
function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(10, 20));

// Número Par ou Ímpar
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(parOuImpar(7));

// Média de Três Notas
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log(media(8, 7, 9));

// Dobro de um Número
function dobro(numero) {
    return numero * 2;
}

console.log(dobro(15));

// Aprovação
function aprovacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(aprovacao(8));

// Calculadora
function calculadora(n1, n2, operacao) {

    if (operacao == "+") {
        return n1 + n2;
    } else if (operacao == "-") {
        return n1 - n2;
    } else if (operacao == "*") {
        return n1 * n2;
    } else if (operacao == "/") {
        return n1 / n2;
    } else {
        return "Operação inválida";
    }

}

console.log(calculadora(10, 5, "*"));

// Desafio: Fatorial
function fatorial(numero) {

    let resultado = 1;

    for (let i = numero; i >= 1; i--) {
        resultado = resultado * i;
    }

    return resultado;
}

console.log(fatorial(5));