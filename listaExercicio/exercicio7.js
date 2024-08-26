//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
const prompt = require("prompt-sync")();

const qntdMacas = Number(prompt("Digite a quantidade de maças que deseja: "));

if(qntdMacas >= 12) {
  console.log(`O valor de maças é: R$${(qntdMacas*0.25).toFixed(2)}`);
} else {
  console.log(`O valor de maças é: R$${(qntdMacas * 0.3).toFixed(2)}`);
}