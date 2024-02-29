export const Work = (props) => {
  let { work } = props;
  return (
    <div>
      {work.map((el) => {
        return <p>{el.work}</p>;
      })}
    </div>
  );
};
