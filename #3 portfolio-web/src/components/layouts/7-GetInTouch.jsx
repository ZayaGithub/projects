import { MiniHead } from ".";
import { ButtonTag } from "../ui/Button";

export const GetInTouch = () => {
  return (
    <div className="dark:bg-black">
      <div className="container m-auto px-[16px] py-[64px] sm:px-[112px] sm:py-[96px] items-center justify-between">
        <ButtonTag text="Get in touch" />
        <MiniHead text="What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
        <div className="pt-[48px] pb-[48px]">
          <div className="flex justify-center gap-[20px]">
            <img src="msg.png" alt="" />
            <h2 className=" font-bold sm:text-[36px]">
              reachsagarshah@gmail.com
            </h2>
            <img src="Icon Button.png" alt="" />
          </div>
          <div className="flex justify-center gap-[20px]">
            <img src="phone.png" alt="" />
            <h2 className=" font-bold sm:text-[36px]">+91 8980500565</h2>
            <img src="Icon Button.png" alt="" />
          </div>
        </div>
        <div className="gap-[10px]">
          <MiniHead text="You may also find me on these platforms!" />
          <div className="flex gap-4 justify-center">
            <img src="cat.svg" alt="" />
            <img src="twit.svg" alt="" />
            <img src="dn.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
