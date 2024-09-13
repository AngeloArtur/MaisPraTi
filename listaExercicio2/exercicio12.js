// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
  {
    produto: "Teclado",
    qntd: 3,
    minimo: 5,
  },

  {
    produto: "Headset",
    qntd: 8,
    minimo: 3,
  },

  {
    produto: "Mouse",
    qntd: 6,
    minimo: 15,
  },

  {
    produto: "Filtro de linha",
    qntd: 5,
    minimo: 5,
  },
];

estoque.forEach((produto) => {
  while (produto.qntd < produto.minimo) {
    produto.qntd *= 2;
  }
  console.log(produto);
});
