const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const folder = "./public";

fs.readdirSync(folder).forEach(file => {
  if (!file.endsWith(".jpg") && !file.endsWith(".jpeg")) return;

  const inputPath = path.join(folder, file);
  const outputPath = path.join(folder, file.replace(/\.(jpg|jpeg)/, ".webp"));

  sharp(inputPath)
    .resize({ width: 1200 }) // уменьшает вес
    .webp({ quality: 75 })
    .toFile(outputPath)
    .then(() => {
      console.log("Converted:", file);
    })
    .catch(err => console.error(err));
});