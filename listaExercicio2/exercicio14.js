// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
  departamentos: [
    {
      departamento: "Marketing",
      funcionarios: ["Adriano", "Célia", "Eduardo", "Bete"],
    },

    {
      departamento: "Recursos Humanos",
      funcionarios: ["Thiago", "Cíntia", "Maíra"],
    },

    {
      departamento: "Suporte",
      funcionarios: ["Lucas", "Daiane", "Samanta", "Emanoel", "Fábio"],
    },

    {
      departamento: "Desenvolvimento",
      funcionarios: ["Maitê", "Bruno", "Adriano", "Augusto", "Renata"],
    },
  ],
};

for (const departamento in empresa.departamentos) {
  let nomeDepartamento = empresa.departamentos[departamento];
  console.log(`\nDepartamento: ${nomeDepartamento.departamento}\n`);
  for (const funcionario of nomeDepartamento.funcionarios) {
    console.log(`funcionario: ${funcionario}`);
  }
}
