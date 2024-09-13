// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

const alunos = [
  {
    nome: "Ângelo",
    nota1: "8",
    nota2: "9",
  },

  {
    nome: "João",
    nota1: "10",
    nota2: "2",
  },

  {
    nome: "Maria",
    nota1: "8",
    nota2: "7",
  },
];

for (const aluno of alunos) {
  let media = (Number(aluno.nota1) + Number(aluno.nota2)) / 2;
  console.log(`${aluno.nome}, média: ${media}`);
}
