export const Name2 = (props) => {
  const { lastnameArr } = props;
  return (
    <div>
      {lastnameArr.map((el) => {
        return <p>{el.lastnameArr}</p>;
      })}
    </div>
  );
};
