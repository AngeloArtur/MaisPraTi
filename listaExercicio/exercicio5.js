//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require("prompt-sync")();

let peso = Number(prompt("Insira seu peso: "));
let altura = Number(prompt("Insira sua altura em metros: "));

const imc = peso / altura ** 2;

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
} else if (imc >= 30 && imc < 35) {
  console.log("Obesidade grau I");
} else if (imc >= 35 && imc < 40) {
  console.log("Obesidade grau II");
} else if (imc >= 40) {
  console.log("Obesidade grau III");
}
