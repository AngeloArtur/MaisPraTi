// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

const carrinho = {
  itens: [
    {
      nome: "Kit Escova de dente",
      qtnd: "2",
      precoUnitario: "16.5",
    },

    {
      nome: "Lâmpada LED",
      qtnd: "4",
      precoUnitario: "9.99",
    },

    {
      nome: "Chinela Havainas",
      qtnd: "1",
      precoUnitario: "28.99",
    },
  ],
};

let valorTotal = 0

carrinho.itens.forEach((item) => {
  valorTotal += Number(item.precoUnitario) * Number(item.qtnd);
})

console.log(`O valor total dos produtos do carrinho é de: R$${valorTotal}`)