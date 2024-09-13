// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
  {
    nome: "RTX 4090",
    preco: "12799",
  },

  {
    nome: "Teclado EPOMAKER TH80",
    preco: "285",
  },

  {
    nome: "SSD M.2 2TB",
    preco: "860",
  },

  {
    nome: "Monitor 29' Ultrawilde",
    preco: "1100",
  },
];

for (const produto of produtos) {
  desconto = Number(produto.preco) * 0.9;
  console.log(`${produto.nome} R$ ${desconto}`);
}