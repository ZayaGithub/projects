import { Name } from "@/components/comp1";
import { Score } from "@/components/comp2";
import { AgeWork } from "@/components/comp3";

const array = [
  {
    firstName: "Duluun",
    lastName: "Dill",
    score: "100",
    age: 141414,
    work: "coach",
  },
  {
    firstName: "Burnee",
    lastName: "Bill",
    score: "69",
    age: 121212,
    work: "Pinecone",
  },
  {
    firstName: "Hurlee",
    lastName: "Bat",
    score: "140",
    age: 323232,
    work: "MCS",
  },
];

let name = array.map((el) => {
  return { firstName: el.firstName, lastName: el.lastName };
});

let score = array.map((el) => {
  return { score: el.score };
});

let agework = array.map((el) => {
  return { age: el.age, work: el.work };
});

export default function Home() {
  return (
    <div>
      <Name name={name}></Name>
      <Score score={score}></Score>
      <AgeWork agework={agework}></AgeWork>
    </div>
  );
}
