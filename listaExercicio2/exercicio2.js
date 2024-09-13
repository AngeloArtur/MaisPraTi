// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
  titulo: "As crônicas de gelo e fogo",
  autor: "George R R Martin",
  anoPublicacao: "1996",
};

for (const key in livro) {
  if (key !== "editora") {
    livro.editora = "Suma de Letras";
  } else {
    console.log("tem editora");
  }
}

console.log(livro);
