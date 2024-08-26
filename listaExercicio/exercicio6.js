//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

const ladoA = Number(prompt("Digite o lado A: "));
const ladoB = Number(prompt("Digite o lado B: "));
const ladoC = Number(prompt("Digite o lado C: "));

if(ehTriangulo(ladoA, ladoB, ladoC)) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("triângulo EQUILATERO");
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    console.log("triângulo ISOCELES");
  } else if (ladoA !== ladoB && ladoB !== ladoC) {
    console.log("triângulo ESCALENO");
  }
} else {
  console.log("Não é triângulo");
}

function ehTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB)
    return true;
  else return false;
}