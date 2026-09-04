// Função Anônima
// Mensagem
let mensagem = function() {
    console.log("Olá mundo!")
}
mensagem()

console.log("-----------------------")

// // Dobro
// let dobro = function(numero) {
//     return numero * 2
// }
// let numero = Number(prompt("Diga um número:"))
// console.log(dobro(numero))

console.log("-----------------------")

// // Média
// let calcularMedia = function(n1, n2, n3) {
//     return (n1 + n2 + n3) / 3
// }
// let n1 = Number(prompt("Qual é a sua primera nota?"))
// let n2 = Number(prompt("Qual é a sua segunda nota?"))
// let n3 = Number(prompt("Qual é a sua terceira nota?"))
// console.log(calcularMedia(n1, n2, n3))



// // Situação
// let verficarSituacao = function(media) {
//     if (media >= 7) {
//         return "Aprovado"
//     } else if (media <= 5) {
//         return "Recuperação"
//     } else {
//         return "Reprovado"
//     }
// }

// console.log(verficarSituacao(calcularMedia(n1, n2, n3)))

console.log("-----------------------")

// // Calculadora 
// let somar = function(n1, n2) {
//     return n1 + n2
// }

// let subtrair = function(n1, n2) {
//     return n1 - n2
// }

// let multiplicar = function(n1, n2) {
//     return n1 * n2
// }

// let dividir = function(n1, n2){
//     return n1 / n2
// }

// let n1 = Number(prompt("Diga um número:"))
// let n2 = Number(prompt("Diga outro:"))
// console.log(somar(n1, n2))
// console.log(subtrair(n1, n2))
// console.log(multiplicar(n1, n2))
// console.log(dividir(n1, n2))

console.log("-----------------------")

// // Arrow Function
// // Multiplicação
// let mult = (num1, num2) => {
//     return num1 * num2
// }
// let num1 = Number(prompt("Digite um número:")) 
// let num2 = Number(prompt("Digite outro e veja a multiplicação:"))
// console.log(mult(num1, num2))

console.log("-----------------------")

// // Triplo
// let triplo = (nume) => {
//     return nume * 3
// }
// let nume = Number(prompt("Digite um número e veja seu triplo:"))
// console.log(triplo(nume))

// // Par ou Ímpar
// let parOuimpar = (n4) => {
//     if(n4 % 2 === 0) {
//         return "Par"
//     } else {
//         return "Ímpar"
//     }
// }
// let n4 = Number(prompt("Qual é o número:"))
// console.log(parOuimpar(n4))

console.log("-----------------------")

// // Maior Número
// let maiorNumero = (numero1, numero2) => {
//     if(numero1 > numero2) {
//         return numero1
//     } else {
//         return numero2
//     }
// }
// let numero1 = Number(prompt("Qual é o primeiro número?"))
// let numero2 = Number(prompt("E o segundo?"))
// console.log(maiorNumero(numero1, numero2))

console.log("-----------------------")

// // Positivo, negativo ou zero. 
// let verificarNumero = (number) => {
//     if(number > 0) {
//         return "Positivo"
//     } else if (number < 0) {
//         return "Negativo"
//     } else {
//         return "Zero"
//     }
// }
// let number = Number(prompt("Diga um número:")) 
// console.log(verificarNumero(number))

console.log("-----------------------")

// DOM – Manipulação
// Trocando Textos
let texto = document.getElementById("texto")
function trocar() {
    texto.innerText = "Texto alterado com JS!"
}

// Personalizando a div
let fundo = document.getElementById("fundo")
function background() {
    fundo.style.backgroundColor = "blue"
}

// Personalização
let titulo = document.getElementById("titulo")
let text = document.getElementById("text")
function personalizar() {
    text.style.color = "blue"
    text.style.fontSize = "20px"
    titulo.style.color = "green"
    titulo.style.fontSize = "35px"
}

// Escondendo o elemento
let tex = document.getElementById("tex")
function esconde() {
    if(tex.style.display == "none") {
        tex.style.display = "block"
    } else {
        tex.style.display = "none"
    }
}

// Trocando textos
let texto1 = document.getElementById("texto1")
function trocando() {
    if(texto1.innerText === "Neymar Jr") {
        texto1.innerText = "Lionel Messi"
    } else {
        texto1.innerText = "Neymar Jr"
    }
}

// Arredondar imagem
let naverdathi = document.getElementById("naverdathi")
function arredondar() {
    naverdathi.style.borderRadius = "500px"
}

// Personalizando o botão
    let mudar = document.getElementById("mudar")
    mudar.addEventListener("click", function() {
            mudar.style.backgroundColor = "blue"
            mudar.style.color = "white"
            mudar.style.border = "2px solid black"
            mudar.style.borderRadius = "15px"
    })


