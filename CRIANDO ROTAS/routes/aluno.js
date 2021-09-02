const { Router } = require("express");
var express = require("express");
var router = express.Router();

let alunos = [
  {
    id: 0,
    nome: "José",
  },
  { id: 1, nome: "Maria" },
  { id: 2, nome: "Rafael" },
  { id: 3, nome: "Michelle" },
];

router.get("/aluno", (req, res, next) => {
  console.log(req.body);

  let aluno = alunos[req.body.id];
  if (aluno) {
    res.json(aluno);
  } else {
    next();
  }
});

router.get("/aluno", (req, res, next) => {
  console.log(req.query);

  let aluno = alunos[req.query.id];
  if (aluno) {
    res.json(aluno);
  } else {
    res.send("Aluno não encontrado");
  }
});

router.get("/aluno/all", (req, res) => {
  res.json(JSON.stringify(alunos));
});

router.get("/aluno/:id", (req, res) => {
  console.log(req.params.id);
  let aluno = alunos[req.params.id];
  res.json(aluno);
});

module.exports = router;
