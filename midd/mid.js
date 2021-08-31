var express = require("express");
var app = express();

var saudacao = (req, res) => {
  res.send("hello world");
};

/* let tipmetodo = (req, res, next) => {
  console.log(req.method);
  next();
}; */

app.get("/", saudacao);

app.post("/", saudacao);

app.listen(3000, () => console.log("Server rodando"));
