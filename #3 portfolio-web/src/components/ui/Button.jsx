export const ButtonTag = (props) => {
  return (
    <div className="flex justify-center">
      <div className="dark:bg-[#374751] flex justify-center items-center rounded-xl bg-slate-200 w-fit py1 px-5">
        {props.text}
      </div>
    </div>
  );
};
