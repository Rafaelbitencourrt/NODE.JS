var express = require("express");
const app = express();
const fs = require("fs");

let user = {
  id: 0,
  name: "Igor",
  phone: "(222)54321",
};

app.get("/", (req, res) => {
  fs.readFile("./templates/user.html", "utf-8", (err, data) => {
    if (!err) {
      data = data.replace("nome", user.name);

      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log("Server Running on 3000");
});
