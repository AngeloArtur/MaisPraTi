// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const pedidos = [
  {
    produto: "Fone de ouvido bluetooth",
    qntd: "2",
    valor: "150",
  },

  {
    produto: "Capinha de celular",
    qntd: "2",
    valor: "15",
  },

  {
    produto: "Pelicula de celular",
    qntd: "1",
    valor: "20",
  },

  {
    produto: "Carregador USB C",
    qntd: "2",
    valor: "80",
  },
];

let totalVendas = 0;
pedidos.forEach((produto) => {
  totalVendas += (Number(produto.qntd) * Number(produto.valor));
});

console.log(`O total de vendas foi de: R$ ${totalVendas}`);
