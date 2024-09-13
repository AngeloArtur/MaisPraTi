// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const filmes = [
  {
    nome: "O poderoso Chefão",
    diretor: "Francis Ford Coppola",
    anoLancamento: "1972",
  },
  {
    nome: "Senhor dos anéis: O retorno do rei",
    diretor: "Peter Jackson",
    anoLancamento: "2003",
  },
  {
    nome: "Star Wars: O Ataque dos Clones",
    diretor: "George Lucas",
    anoLancamento: "2002",
  },
  {
    nome: "Mad Max: A Estrada da Furia",
    diretor: "George Miller",
    anoLancamento: "2015",
  },
];

let titulosFilmes = [];
filmes.forEach((filme) => {
  titulosFilmes.push(filme.nome);
});

console.log(titulosFilmes);
