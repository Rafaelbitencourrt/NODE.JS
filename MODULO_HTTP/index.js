const http = require("http");
const url = require("url");

http
  .createServer((request, response) => {
    console.log(url.parse(request.url));

    response.end();
  })
  .listen(3000, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Servidor rodando na porta 3000");
    }
  });
