alert("Bem vindo ao operações básicas!")

let name = prompt("Usuário, qual o seu nome? ")

let numberOne = prompt(`Olá, ${name}! Digite o primeiro número para fazer as operações: `)

let numberTwo = prompt(`Agora digite o segundo número para fazer as operações: `) 

let Operator1 = Number(numberOne)
let Operator2 = Number(numberTwo)

let sum = Operator1 + Operator2
let sub = Operator1 - Operator2
let mult = Operator1 * Operator2
let div = (Operator1 / Operator2).toFixed(1)
let restDiv = Operator1 % Operator2

alert(`
A soma de ${Operator1} + ${Operator2} é = ${sum}
A subtração de ${Operator1} - ${Operator2} é = ${sub}
A multiplicação de ${Operator1} * ${Operator2} é = ${mult}
A divisão de ${Operator1} / ${Operator2} é = ${div}
O resto da divisão de ${Operator1} / ${Operator2} é = ${restDiv}
`)

alert("Agora vamos ver se a soma das operações vão ser PAR ou IMPAR :)")

if(sum % 2 === 0) {
  alert("A soma das operações foi PAR!")
} else {
  alert("A soma das operações foi IMPAR!")
}

alert("E por último, você digitou os números iguais? Deixe-me advinhar!")

if(numberOne === numberTwo) {
  alert("Você inseriu números iguais.")
} else { 
  alert("Você inseriu números diferentes.")
}