import { Work } from "@/components/comp5";

export const AgeWork = (props) => {
  let { AgeWork } = props;
  let work = AgeWork.map((el) => {
    return { work: el.work };
  });
  return (
    <div>
      <div>
        {AgeWork.map((el) => {
          return <p>{el.age}</p>;
        })}
      </div>
      <Work work={work}></Work>
    </div>
  );
};
