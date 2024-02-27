import { ButtonTag } from "../ui/Button";
import { MiniHead } from ".";
import { TechCards } from "../ui/TechnologyCard";
import { TechCardsX } from "../ui/TechnologyCard";

export const Work = () => {
  return (
    <div className="dark:bg-black">
      <div className="container m-auto px-[16px] py-[64px] sm:px-20 sm:py-24 gap-12">
        <ButtonTag text="Work" />
        <MiniHead text="Some of the noteworthy projects I have built:" />
        <div className="">
          <TechCards />
          <TechCardsX />
          <TechCards />
        </div>
      </div>
    </div>
  );
};
