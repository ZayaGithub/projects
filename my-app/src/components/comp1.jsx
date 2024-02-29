import { Name2 } from "@/components/comp4";

export const Name = (props) => {
  let { name } = props;
  let lastnameArr = name.map((el) => {
    return { lastname: el.lastname };
  });
  return (
    <div>
      <div>
        {name.map((el) => {
          return <p>{el.firstName}</p>;
        })}
      </div>
      <Name2 lastnameArr={lastnameArr}></Name2>
    </div>
  );
};
