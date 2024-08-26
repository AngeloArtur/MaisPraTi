//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

const menu = prompt(
  "Digite o que deseja selecionar - Hamburguer, Pizza, Sorvete: "
);

switch(menu) {
  case("Hamburguer"):
    console.log("Você escolheu Hamburguer")
    break;
  case("Pizza"):
    console.log("Você escolheu Pizza")
    break;
  case("Sorvete"):
    console.log("Você escolheu Sorvete")
    break;
  default:
    console.log("Escolha uma opção dentro das três disponíveis");
}
