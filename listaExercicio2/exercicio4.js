// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

const pessoas = [
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
    idade: "21",
    cidade: "São Paulo",
  },
];

for (const pessoa of pessoas) {
  console.log(pessoa);
}