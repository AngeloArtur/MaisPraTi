// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: "2015"
}

for (const key in carro) {
  console.log(carro[key])
}