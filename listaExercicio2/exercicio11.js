// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
  {
    cliente: "João",
    produto: "Camisas",
    qntd: "12",
  },

  {
    cliente: "Jorge",
    produto: "Bermudas",
    qntd: "2",
  },

  {
    cliente: "Mauricio",
    produto: "Toalhas",
    qntd: "8",
  },

  {
    cliente: "Adriana",
    produto: "Vestido",
    qntd: "1",
  },
];
let novosPedidos = {};

pedidos.forEach((pedido) => {
  novosPedidos[pedido.cliente] = pedido.qntd;
});

console.log(pedidos);
console.log(novosPedidos);
