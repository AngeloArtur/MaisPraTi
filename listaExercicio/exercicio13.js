// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();
let soma = 0;
let num;

do {
  num = Number(
    parseFloat(
      prompt(
        "Digite um número para fazer a sua soma, ao digitar 0 você receberá soma de todos os números digitados: "
      )
    )
  );

  soma += num;
} while (num !== 0);

console.log(`A soma dos números é: ${soma}`);
