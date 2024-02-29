import { ButtonTag } from "../ui/Button";
import { MiniHead } from ".";

export const Experienses = (props) => {
  const Arr = [
    {
      logo: "/logo-upwork.png",
      head: "Sr. Frontend Developer",
      list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      list2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
      list3: "Sed quis justo ac magna.",
      list4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Nov 2021 - Present",
    },
    {
      logo: "/logo-upwork.png",
      head: "Team Lead",
      list1: "Sed quis justo ac magna.",
      list2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      list3: "Sed quis justo ac magna.",
      list4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Jul 2017 - Oct 2021",
    },
    {
      logo: "/logo-upwork.png",
      head: "Full Stack Developer",
      list1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Dec 2015 - May 2017",
    },
  ];
  return (
    <div className="dark:bg-slate-900">
      <div className="container m-auto dark:bg-slate-900 px-[16px] py-[64px] bg-slate-50 sm:px-20 sm:py-24 gap-12">
        <ButtonTag text="Experienses" />
        <MiniHead text="Here is a quick summary of my most recent experiences:" />
        <div className="flex justify-center">
          <div className=" flex-col justify-center">
            {Arr.map((el) => {
              return (
                <div className="flex pb-12">
                  <div className=" w-[100%] dark:bg-slate-800  sm:flex p-8 bg-white sm:w-[896px] rounded-2xl drop-shadow-md">
                    <div className="w-[50%]">
                      <img src="logo-upwork.png" alt="" />
                    </div>
                    <div className="w-[100%] flex-col-reverse sm:flex-row sm:w-[95%] flex">
                      <div className="w-[100%]">
                        <h1 className=" font-bold text-[20px] pb-[16px]">
                          {el.head}
                        </h1>
                        <ul className="pl-[15px] sm:pl-0 list-disc">
                          {el.list1 && <li>{el.list1}</li>}
                          {el.list2 && <li>{el.list2}</li>}
                          {el.list3 && <li>{el.list3}</li>}
                          {el.list4 && <li>{el.list4}</li>}
                        </ul>
                      </div>
                      <div className="w-[100%] sm:flex sm:w-[80%] justify-end py-[16px]">
                        {el.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
