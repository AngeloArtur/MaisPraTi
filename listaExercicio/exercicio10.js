//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

const number = Number(prompt("Digite um número: "));
for (let i = 1; i < 11; i++) {
  console.log(`Contagem ${i}: ${number}`);
}
