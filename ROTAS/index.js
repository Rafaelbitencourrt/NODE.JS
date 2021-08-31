var express = require("express");
var app = express();
var bodyParser = require("body-parser");

let alunos = [
  {
    id: 0,
    nome: "José",
  },
  { id: 1, nome: "Maria" },
  { id: 2, nome: "Rafael" },
  { id: 3, nome: "Michelle" },
];

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/alunos", (req, res) => {
  res.json(JSON.stringify(alunos));
});

app.get("/aluno", (req, res) => {
  console.log(req.body);
  let aluno = alunos[req.body.id];
  res.json(aluno);
});

app.listen(3000, () => console.log("Server rodando"));
