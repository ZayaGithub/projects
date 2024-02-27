import express, { response } from "express";
import cors from "cors";
import fs from "fs";

// const port = 3000; ingej bichij bolno
const app = express();
const database = "db.json";
app.use(cors());
app.use(express.json());

app.get("/user", (request, response) => {
  const user = JSON.parse(fs.readFileSync(database));
  response.json(user);
});

app.post("/user", (request, response) => {
  const addUser = request.body;
  const user = JSON.parse(fs.readFileSync(database));
  user.push(addUser);
  fs.writeFileSync(database, JSON.stringify(user));
  response.status(200).send(user);
});

app.get("/categoies/:id", (request, response) => {
  const { id } = request.params;
});

// listenii ehnii utga ni port asah gazar
app.listen(3005, () => {});