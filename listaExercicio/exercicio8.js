//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));

let maiorNum = null;
if (num1 !== num2) {
  if (num1 > num2) maiorNum = num1;
  else maiorNum = num2;
  console.log(`O maior número é ${maiorNum}`);
} else {
  console.log("por favor digite números diferentes");
}
