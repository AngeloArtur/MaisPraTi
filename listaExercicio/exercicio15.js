//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let fibonacci0 = 0;
let fibonacci1 = 1;

let fibonacci10 = 1;

for (let i = 1; i <= 10; i++) {
  console.log(`Termo ${i}: `, fibonacci10);

  fibonacci10 = fibonacci0 + fibonacci1;
  fibonacci0 = fibonacci1;
  fibonacci1 = fibonacci10;
}