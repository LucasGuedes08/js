// Digitação
let input = document.getElementById("input")
let msg = document.getElementById("msg")
input.addEventListener("input", function() {
    msg.innerText = input.value
})

// Troca de texto
let muda = document.getElementById("muda")
muda.addEventListener("mouseover", function() {
    muda.innerText = "Você passou o mouse!"
})

// Escondendo elementos
let esconda = document.getElementById("esconda")
let text = document.getElementById("text")
esconda.addEventListener("dblclick", function() {
    text.style.display = "none" 
})

// Alterando a fonte
let texto = document.getElementById("texto")
let alterar = document.getElementById("alterar")
alterar.addEventListener("click", function() {
    texto.style.fontSize = "35px"
})

// Mostrar e esconder
let mostrar = document.getElementById("mostrar")
let esconder = document.getElementById("esconder")
let tex = document.getElementById("tex")
mostrar.addEventListener("click", function() {
    tex.innerText = "Apareci!"
})

esconder.addEventListener("click", function() {
    tex.innerText = ""
})

// Troca de cor
let troca = document.getElementById("troca")
let div = document.getElementById("div")
troca.addEventListener("click", function() {
   div.style.backgroundColor = "green"
})

// Alternando destaque
let alternando = document.getElementById("alternando")
let texto2 = document.getElementById("texto2")
alternando.addEventListener("click", function() {
    alternando.classList.toggle("destaque") 
})

// Troca de imagem
let altera = document.getElementById("altera")
let volta = document.getElementById("volta")
let imagem = document.getElementById("imagem")
altera.addEventListener("click", function() {
    imagem.src = "img1.avif"
})
 volta.addEventListener("click", function() {
    imagem.src = "img2.jpg"
 })

// Contador de caracteres
let texto3 = document.getElementById("texto3")
let contador = document.getElementById("contador")

texto3.addEventListener("input", function() {
    contador.innerText = "Caracteres: " + texto3.value.length
    })
    
// Verificação de Idade
 function verificar() {
 let idade = Number(document.getElementById("idade").value)
 let resultado = document.getElementById("resultado")

 if (idade >= 18) {
     resultado.innerText = "Você é maior de idade."
} else {
     resultado.innerText = "Você é menor de idade."
     }
}

// Par ou Ímpar
 function verificarNumero() {
let numero = Number(document.getElementById("numero").value)
let resul = document.getElementById("resul")

if (numero % 2 == 0) {
    resul.innerText = "O número é par."
} else {
    resul.innerText = "O número é ímpar."
    }
}

// Média do aluno
function calcular() {
let nota1 = Number(document.getElementById("nota1").value)
let nota2 = Number(document.getElementById("nota2").value)
let nota3 = Number(document.getElementById("nota3").value)
let media = (nota1 + nota2 + nota3) / 3
let resposta = document.getElementById("resposta")

if (media >= 7) {
    resposta.innerText = "Média: " + media.toFixed(1) + " - Aprovado"
} else if (media >= 5) {
    resposta.innerText = "Média: " + media.toFixed(1) + " - Recuperação"
} else {
    resposta.innerText = "Média: " + media.toFixed(1) + " - Reprovado"
    }
}