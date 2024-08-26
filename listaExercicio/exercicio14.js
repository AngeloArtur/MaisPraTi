//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require("prompt-sync")();

const numFatorial = Number(
  parseInt(prompt("Digite um número e saiba o seu fatorial: "))
);
let resultadoFatorial = 1;

for (let i = numFatorial; i > 0; i--) {
  resultadoFatorial *= i;
}

console.log(`O resultado de ${numFatorial}! é: ${resultadoFatorial}`);
