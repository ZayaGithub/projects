import { useContext } from "react";
import { FirstContext } from "@/utils/context";

export const Gogo = () => {
  const { filteredArray } = useContext(FirstContext);
  console.log(filteredArray, "component2");
  return (
    <div>
      <p>{filteredArray.map((article)=> {
        return(
          <div>{article.title}</div>
        )
      })}</p>
    </div>
  );
};
