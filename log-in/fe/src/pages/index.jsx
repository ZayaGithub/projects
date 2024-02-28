import { useEffect, useState } from "react";

// console.log(name);
export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [data, setData] = useState([]);
  const createData = async () => {
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    }).then((response) => response.json());
    console.log(response);
    setData(response);
  };
  const addData = () => {
    createData();
  };
  // const fetchData = async () => {
  //   const data = await fetch("http://localhost:3000/").then((res) =>
  //     res.json()
  //   );
  //   console.log(data);
  //   return data;
  // };
  // useEffect(() => {
  //   fetchData();
  // });
  return (
    <>
      <div className="flex justify-center">
        <div className="container m-auto py-10 felx flex-col gap-4">
          <div className="">hello</div>
          <div className="flex flex-row gap-[20px]">
            <input
              className="border p-[5px]"
              type="text"
              placeholder="userName"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="border p-[5px]"
              placeholder="age"
              onChange={(event) => setAge(event.target.value)}
            />
            <button onClick={addData}>submit</button>
          </div>
          <div className="flex flex-row gap-[20px]">
            <ul>
              {data?.map((el) => (
                <div>
                  <li>{el.name}</li>
                  <li>{el.age}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
