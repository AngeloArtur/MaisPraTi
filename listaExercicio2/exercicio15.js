// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

const transacoes = [
  {
    tipo: "entrada",
    valor: "200",
  },

  {
    tipo: "saída",
    valor: "50",
  },

  {
    tipo: "saída",
    valor: "100",
  },

  {
    tipo: "entrada",
    valor: "150",
  },

  {
    tipo: "saída",
    valor: "150",
  },
];
let valor = 0;
transacoes.forEach((transacao) => {
  if (transacao.tipo === "entrada") {
    valor += Number(transacao.valor);
  } else {
    valor -= Number(transacao.valor);
  }
});
console.log(`O saldo final é de: R$${valor}`);
