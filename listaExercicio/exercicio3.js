//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

const nota = Number(prompt("Digite sua nota: "));

if (nota <= 10 && nota >= 7) {
  console.log("Aluno aprovado");
} else if (nota < 7 && nota >= 4) {
  console.log("Recuperação");
} else if (nota < 4 && nota >= 0) {
  console.log("Reprovado");
} else {
  console.log("nota inválida");
}
