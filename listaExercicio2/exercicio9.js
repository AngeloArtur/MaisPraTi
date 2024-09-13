// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
  {
    nome: "Ângelo",
    idade: "22",
    cidade: "Fortaleza",
  },

  {
    nome: "João",
    idade: "20",
    cidade: "Ouro Preto",
  },

  {
    nome: "Maria",
    idade: "32",
    cidade: "São Paulo",
  },

  {
    nome: "Jaques",
    idade: "24",
    cidade: "Teresina",
  },

  {
    nome: "Hyago",
    idade: "29",
    cidade: "São Paulo",
  },

  {
    nome: "Edu",
    idade: "32",
    cidade: "Rio de Janeiro",
  },
];

let contador = 0;
clientes.forEach((cliente) => {
  if (Number(cliente.idade) > 30) {
    contador++;
  }
});

console.log(`${contador} Clientes possuem a idade maior que 30 anos`);
