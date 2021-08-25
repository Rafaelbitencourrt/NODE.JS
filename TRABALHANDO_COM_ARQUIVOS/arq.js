let fs = require("fs");

/* fs.writeFile("teste.txt", "Hello World", function (error) {
  if (error) throw error;

  console.log("Arquivo criado com sucesso");
}); */

/* fs.appendFile("teste.txt", " - Olá Mundo", function (error) {
  if (error) throw error;

  console.log("Arquivo modificado com sucesso");
}); */

/* fs.unlink("teste.txt", function (error) {
  if (error) throw error;

  console.log("Arquivo apagado com sucesso");
}); */

fs.rename("teste.txt", "novoNome.txt", function (error) {
  if (error) throw error;

  console.log("Arquivo renomeado com sucesso");
});
