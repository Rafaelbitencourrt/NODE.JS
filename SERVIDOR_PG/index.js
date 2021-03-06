const fs = require("fs");
const http = require("http");
const url = require("url");

http
  .createServer((request, response) => {
    let path = reqUrl.pathname;
    if (path == " " || path == "/") {
      path = "/index.html";
    }

    let fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
      if (err) {
        response.writeHead(404, { "Content-type": "text/html" });
        response.end("<h1>Página não encontrada</h1>");
      } else {
        response.writeHead(200, { "Content-type": "text/html" });
        response.write(data);
        response.end();
      }
    });

    response.end();
  })
  .listen(3000, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Servidor rodando na porta 3000");
    }
  });
