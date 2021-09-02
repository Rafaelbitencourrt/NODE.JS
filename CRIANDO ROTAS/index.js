var express = require("express");
var app = express();
var alunos = require("./routes/aluno");

app.use(express.urlencoded());

app.use("/", alunos);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Server rodando..."));
