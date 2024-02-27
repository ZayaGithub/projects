import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const disabledText = (name === "") | (age === "") | (email === "");
  const createData = async () => {
    const response = await fetch("http://localhost:3005/user", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    }).then((response) => response.json());
    console.log(response);
    setData(response);
  };
  const addData = () => {
    createData();
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="container m-auto py-10 min-h-screen px-[20px] flex flex-col gap-[20px]  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <div className="font-bold text-[36px] pb-[50px] bg-gradient-to-r from-indigo-500 via-purple-500 flex justify-center pt-[30px]">
            CRUD test
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex justify-center items-center w-[50%] p-[20px] rounded-md shadow-md bg-slate-900">
              <div className="w-[40%] flex flex-col gap-[30px]">
                <input
                  className="p-[5px] bg-slate-50 rounded-md shadow-md"
                  type="text"
                  placeholder="UserName"
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  className="p-[5px] bg-slate-50 rounded-md shadow-md"
                  placeholder="Age"
                  onChange={(event) => setAge(event.target.value)}
                />
                <input
                  className="p-[5px] bg-slate-50 rounded-md shadow-md"
                  placeholder="E-mail"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  disabledText
                  onClick={addData}
                  className=" w-full py-[5px] px-[20px] bg-purple-600 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="w-[45%] p-[20px] rounded-md shadow-md bg-slate-900">
              <table className="table-fixed ">
                <thead className=" bg-slate-400 border-b-2 border-gray-200">
                  <tr className="">
                    <th className="p-2 text-sm font-semibold tracking-wide text-left">
                      No.
                    </th>
                    <th className="p-2 text-sm font-semibold tracking-wide text-left">
                      Name
                    </th>
                    <th className="p-2 text-sm font-semibold tracking-wide text-left">
                      Age
                    </th>
                    <th className="p-2 text-sm font-semibold tracking-wide text-left">
                      E-mail
                    </th>
                    <th className="p-2 text-sm font-semibold tracking-wide text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  {data?.map((el, i) => (
                    <tr className=" bg-white">
                      <td>{i++}</td>
                      <td>{el.name}</td>
                      <td>{el.age}</td>
                      <td>{el.email}</td>
                      <td className="flex gap-[10px]">
                        <button className=" text-green-400 underline hover: underline-offset-2 hover:text-green-600">
                          Edit
                        </button>
                        <button className=" text-red-400 underline hover: underline-offset-2 hover:text-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
