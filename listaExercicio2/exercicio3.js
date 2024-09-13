// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

function newObject(object, valor) {
  let novoProduto = {};
  for (const key in object) {
    if (key === "valorUnitario" && Number(object[key]) < valor) {
      object[key] = valor.toString();
    }
    novoProduto[key] = object[key];
  }

  return novoProduto;
}

const produto = {
  nome: "Camisa",
  valorUnitario: "35",
  valorRevenda: "28",
};

console.log(newObject(produto, 40));
