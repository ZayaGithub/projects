export const Profile = () => {
  return (
    <div className=" dark:bg-black">
      <div className=" py-[64px] px-[16px] sm:flex w-320 sm:px-20 sm:py-24 gap-12">
        <div className="container m-auto flex flex-col-reverse gap-[48px] items-center sm:flex-row sm:px-[32px] justify-between ">
          <div className="sm:w-3/5">
            <div>
              <h1 className="text-[36px] sm:text-6xl font-bold pb-[10px]">
                Hi, I'am Sagar 👋
              </h1>
              <p className="dark:text-white w-[100%] sm:w-[95%] text-[16px] text-stone-600">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div className="pt-16 gap-4">
              <div className="flex gap-2">
                <img src="location.svg" alt="" />
                <p>Ahmedabad, India</p>
              </div>
              <div className="flex pl-2 gap-4">
                <img src="green point.svg" alt="" />
                <p>Available for new projects</p>
              </div>
            </div>
            <div className="flex pt-16 gap-4">
              <img className="cursor-pointer" src="cat.svg" alt="" />
              <img className="cursor-pointer" src="twit.svg" alt="" />
              <img className="cursor-pointer" src="dn.svg" alt="" />
            </div>
          </div>
          <div className="sm:pl-32 md:h-4/5 pt-10 sm:w-fit ">
            <div className="dark:bg-[#374751] w-72 h-80 bg-gray-200 absolute"></div>
            <img
              className=" dark: relative sm:relative bottom-[40px] right-[40px]"
              src="Pic.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
