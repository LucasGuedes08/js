// Estrutura Condicional - Operador Ternário: 
// Maior de idade: 
let idade = Number(prompt("Qual a sua idade?"))
let situacao = idade >= 18? "Maior de idade" : "Menor de idade"

console.log(situacao)

console.log("-------------------------")

// Número par ou ímpar:
let numero = Number(prompt("Diga um número"))
let operacao = numero % 2 === 0? "Par" : "Ímpar"

console.log(operacao)

console.log("-------------------------")

// Aprovado ou Reprovado:
let nota = Number(prompt("Qual foi sua nota?"))
let aprovacao = nota >= 7? "Aprovado" : nota < 7? "Reprovado" : "Nota inválida"
console.log(aprovacao)

console.log("-------------------------")

// Maior número:
let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro"))
let maior = n1 > n2? n1 : n2 > n1? n2 : "São iguais"
console.log(maior)

console.log("-------------------------")

// Desconto:
let valor = Number(prompt("Digite o valor da compra:"))

let desconto = valor >= 100 ? valor * 0.10 : 0
let valorFinal = valor - desconto

console.log("Valor final: R$ " + valorFinal.toFixed(2))

console.log("-------------------------")

// Positivo, negativo ou zero:
let num = Number(prompt("Digite um número"))
let posicao = num > 0? "Positivo" : num < 1? "Negativo" : "Zero"
console.log(posicao)

console.log("-------------------------")

// Laço de Repetição - While: 
// Contador 
let numero1 = 1 
while(numero1 <= 10) {
    console.log(numero1)
    numero1++
}

console.log("-------------------------")

// Contagem Regressiva:
let num1 = 10
while(num1 >= 1) {
    console.log(num1)
    num1--
}

console.log("-------------------------")

// Verificação de senha:
let senha = Number(prompt("Digite a senha"))
while(senha !== 12345) {
   senha = Number(prompt("Senha incorreta, tente novamente"))
} 
 console.log("Bem-Vindo!")

console.log("-------------------------")

// Sequência numérica:
let number = 0
while(number <= 100) {
    console.log(number)
    number += 5
}

console.log("-------------------------")

// Mostrando mensagem:
let contador = 1
while(contador <= 5){
    console.log("Eu gosto de JavaScript")
    contador++
}

console.log("-------------------------")

// Laço de Repetição - Do…While:
// Contador
let num2 = 1 
do {
    console.log(num2)
    num2++
} while (num2 <= 20)

console.log("-------------------------")

// Resposta do usuário:
let continuar = prompt("Deseja continuar?")
do{
    continuar = prompt("Deseja continuar?")
} while(continuar == "s")

console.log("-------------------------")

// Sequência numérica:
let inicio = 1
let sequencia = Number(prompt("Diga o número final de uma sequência:"))
do{
    console.log(inicio)
    inicio++
}while (sequencia > inicio)

console.log("-------------------------")

// Contador:
let num3 = 1
do {
    console.log(num3)
    num3+= 2
} while(num3 <= 31)

console.log("-------------------------")

// Laço de Repetição - For: 
// Contador
for(let n1 = 1; n1 <= 30; n1++) {
    console.log(n1)
}

console.log("-------------------------")

// Contagem Regressiva
for(let n2 = 30; n2 >= 1; n2--){
    console.log(n2)
}

console.log("-------------------------")

// Contagem Personalizada
let inicio1 = Number(prompt("Digite o número inicial:"));
let fim = Number(prompt("Digite o número final:"));

if (inicio1 <= fim) {
    for (let i = inicio1; i <= fim; i++) {
        console.log(i);
    }
} else {
    for (let i = inicio1; i >= fim; i--) {
        console.log(i);
    }
}

console.log("-------------------------")

// Sequência
for(let n3 = 50; n3 >= 30; n3--){
    console.log(n3)
}

console.log("-------------------------")
// Números Alternados
for(let n4 = 1; n4 <= 50; n4+= 2){
    console.log(n4)
}

console.log("-------------------------")

// Array: 
// Filmes favoritos:
let filmes = ["gente grande", "homem-aranha", "vingadores"]
console.log(filmes[0])

console.log("-------------------------")

// Criando e acessando um array:
let frutas = ["uva", "banana", "melancia", "laranja", "pera"]
console.log(frutas[2])

console.log("-------------------------")

// Adicionando elementos:
let cores = ["azul", "amarelo", "verde"]
cores.push("preto")
console.log(cores)

console.log("-------------------------")

// Removendo elementos:
let numeros1 = ["1", "2", "3", "4"]
numeros1.pop()
console.log(numeros1)

console.log("-------------------------")

// Adicionando no início:
let cidades = ["Suzano", "Mogi"]
cidades.unshift("São Paulo")
console.log(cidades)