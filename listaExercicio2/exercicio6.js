// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

const funcionarios = [
  {
    nome: "Ângelo",
    cargo: "Desenvolvedor",
    salario: "2900",
  },

  {
    nome: "João",
    cargo: "Product Owner",
    salario: "3000",
  },

  {
    nome: "Maria",
    cargo: "Tech Lead",
    salario: "3500",
  },

  {
    nome: "Caio",
    cargo: "Scrum Master",
    salario: "2800",
  },

  {
    nome: "Eduarda",
    cargo: "Tech Lead",
    salario: "3100",
  },
];

for (const funcionario of funcionarios) {
  if (Number(funcionario.salario) >= 3000) {
    console.log(funcionario);
  }
}
