
console.log("--- EXERCÍCIO 1 ---");
let idade1 = Number(prompt("Ex 1 - Digite sua idade:"));

if (idade1 >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}


console.log("--- EXERCICIO 2 ----");
let numero1 = Number(prompt("Ex 2 - Digite um numero:"));

if (numero1 >= 1) {
    console.log("Numero positivo");
} else {
    console.log("Numero negativo")
}

console.log("--- EXERCICIO 3 ----");
let prova3 = Number(prompt("Ex 3 - Digite a nota:"));

if (prova3 >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado")
}

console.log("--- EXERCICIO 4 ----");
let numero = Number(prompt("Ex 4 - Digite um numero positivo, negativo ou zero"));

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}

console.log("--- EXERCICIO 5 ----");
let idade2 = Number(prompt("Ex 5 - Digite sua idade"));

if (idade2 >= 18) {
    console.log("Adulto (18+) ");
} else if (numero < 13) {
    console.log("Criança (0-12)");
} else {
    console.log("Adolescente (13-17)");
}

console.log("--- EXERCICIO 6----");
let divisivel = Number(prompt("Ex 6 - Digite par ou impar."));

if (divisivel % 2 === 0) {
    console.log("O número é par )");
} else {
    console.log("O número é ímpar)");
} 

console.log("---- Exercícios de Repetição ----");

console.log("--- CONTAGEM DE 1 ate 10 ---");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("--- TABUADA ---");


let numeroTabuada = Number(prompt("Digite um número para ver a tabuada dele:"));


for (let i = 1; i <= 10; i++) {
   
    let resultado = numeroTabuada * i;
    
    console.log(numeroTabuada + " x " + i + " = " + resultado);
}

console.log("--- SOMA NUMEROS ---");

let N = Number(prompt("Digite um número):"));

let somaTotal = 0;
let expressaoTexto = "";

for (let i = 1; i <= N; i++) {
    somaTotal = somaTotal + i; 
    
    if (i === 1) {
        expressaoTexto = expressaoTexto + i;
    } else {
        expressaoTexto = expressaoTexto + " + " + i;
    }
}
console.log(expressaoTexto + " = " + somaTotal);