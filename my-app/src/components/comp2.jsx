export const Score = (props) => {
  let { score } = props;

  return (
    <div>
      {score.map((el) => {
        return <p>{el.score}</p>;
      })}
    </div>
  );
};
