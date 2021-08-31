var express = require("express");
var app = express();

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
  res.send("Hello World");
});

app.get("/aluno", (req, res, next) => {
  console.log(req.body);

  let aluno = alunos[req.body.id];
  if (aluno) {
    res.json(aluno);
  } else {
    next();
  }
});

app.get("/aluno", (req, res, next) => {
  console.log(req.query);

  let aluno = alunos[req.query.id];
  if (aluno) {
    res.json(aluno);
  } else {
    res.send("Aluno não encontrado");
  }
});

app.get("/aluno/all", (req, res) => {
  res.json(JSON.stringify(alunos));
});

app.get("/aluno/:id", (req, res) => {
  console.log(req.params.id);
  let aluno = alunos[req.params.id];
  res.json(aluno);
});

app.listen(3000, () => console.log("Server rodando..."));
