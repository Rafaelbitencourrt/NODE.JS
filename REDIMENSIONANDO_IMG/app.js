const sharp = require("sharp");

const path = process.argv[2];
const width = Number(process.argv[3]);

function resize(path, width) {
  sharp(path)
    .resize({ width: width })
    .toFile("./temp/output.jpg", (Error) => {
      if (Error) {
        console.log(Error);
      } else {
        console.log("Imagem redimensionada com sucesso!");
      }
    });
}

resize(path, width);
