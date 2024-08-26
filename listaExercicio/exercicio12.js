// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require("prompt-sync")();

const number = Number(prompt("Digite um número para saber sua tabuada: "));

console.log("Soma:");
for (let i = 1; i <= 10; i++) {
  let resultado = number + i;
  console.log(`${number} + ${i} = ${resultado}`);
}

console.log("Subtração:");
for (let i = 1; i <= 10; i++) {
  let resultado = number - i; ;
  console.log(`${number} - ${i} = ${resultado}`);
}

console.log("Multiplicação:");
for (let i = 1; i <= 10; i++) {
  let resultado = number * i;
  console.log(`${number} x ${i} = ${resultado}`);
}

console.log("Divisão:");
for (let i = 1; i <= 10; i++) {
  let resultado = number / i;
  console.log(`${number} / ${i} = ${resultado}`);
}