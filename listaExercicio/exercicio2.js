//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require("prompt-sync")();

const faixaEtaria = Number(parseInt(prompt("Digite sua idade: ")));

if (faixaEtaria >= 0 && faixaEtaria < 13) {
  console.log("Criança");
} else if (faixaEtaria >= 13 && faixaEtaria < 18) {
  console.log("Adolescente");
} else if (faixaEtaria >= 18 && faixaEtaria < 60) {
  console.log("Adulto");
} else if (faixaEtaria >= 60) {
  console.log("Idoso");
} else {
  console.log("Valor Inválido");
}
