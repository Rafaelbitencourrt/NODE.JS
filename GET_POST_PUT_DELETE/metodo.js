const { json } = require("express");
const express = require("express");
const path = require("path");

const app = express();

app.use("/meusite", express.static(path.join(__dirname, "client")));
//sempre seguir ordem req, res//////
app.get("/", (req, res) => {
  //res.set('content-type', 'text/html')

  res.send("<h1>Hello world from get </h1>");
});

app.post("/", (req, res) => {
  res.send("<h1>Hello world from post </h1>");
});

app.put("/", (req, res) => {
  res.send("<h1>Hello world from put </h1>");
});

app.delete("/", (req, res) => {
  res.send("<h1>Hello world from delete </h1>");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
