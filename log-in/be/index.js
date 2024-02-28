import express, { response } from "express";
import cors from "cors";

// const port = 3000; ingej bichij bolno
const app = express();
app.use(cors());
app.use(express.json());

const user = [];

app.get("/user", (request, response) => {
  response.json(user);
});
app.post("/", (request, response) => {
  user.push(request.body);
  console.log(user);
  response.send(user);
});

// app.get("/", (request, response) => {});
// listenii ehnii utga ni port asah gazar
app.listen(3000, () => {
  console.log(`Server started http://localhost:3000`);
});
