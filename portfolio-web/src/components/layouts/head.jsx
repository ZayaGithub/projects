export const MiniHead = (props) => {
  return (
    <div className="flex justify-center">
      <div className="dark:text-white pt-8 flex justify-center text-gray-600 text-xl pb-12 w-[576px] text-center">
        {props.text}
      </div>
    </div>
  );
};
