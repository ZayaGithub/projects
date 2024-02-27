import { log } from "console";
import fs from "fs";

// {age: 18, name: "Bilguundul"}
// const data = fs.readFileSync("text.txt");
// fs.readFile("text.txt", (err, data) => console.log(data.toString()));
//

fs.writeFileSync("writeFile.txt", "writeFile", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("amjilttai bollo");
  }
});

const dataB = fs.readFileSync("text.txt");
fs.readFile("text.txt", (err, dataB) => console.log(dataB.toString()));
console.log("dataB", dataB.toString());

const data = { age: 18, name: "Zayak" };
fs.writeFileSync("db.json", JSON.stringify(data));

const stringify = JSON.stringify(data);
const parse = JSON.parse(stringify);
console.log(stringify);
console.log(stringify, "===", parse);
//
// fs.writeFile("writefile.txt", "writefile", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//   }
// });

// folder uusgej bga
//
// fs.mkdir("test1", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Amjilttai uusglee");
//   }
// });
