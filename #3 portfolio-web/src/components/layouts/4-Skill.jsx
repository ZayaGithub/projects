import { ButtonTag } from "../ui/Button";
import { MiniHead } from "./head";

export const Skill = () => {
  const cardsArr = [
    { img: "/icon-javscript.svg", text: "Javascript" },
    { img: "/icon-typescript.svg", text: "Typescript" },
    { img: "/icon-react.svg", text: "React" },
    { img: "/icon-nextjs.svg", text: "Next.js" },
    { img: "/icon-nodejs.svg", text: "Node.js" },
    { img: "/icon-express.svg", text: "Express.js" },
    { img: "/icon-nest.svg", text: "Nest.js" },
    { img: "/icon-socket.svg", text: "Socket.io" },
    { img: "/icon-postgresql.svg", text: "PostgreSQL" },
    { img: "/icon-mongodb.svg", text: "MogoDB" },
    { img: "/icon-sass.svg", text: "Sass/Scss" },
    { img: "/icon-tailwindcss.svg", text: "Tailwindcss" },
    { img: "/icon-figma.svg", text: "Figma" },
    { img: "/icon-cypress.svg", text: "Cypress" },
    { img: "/icon-storybook.svg", text: "Storybook" },
    { img: "/icon-git.svg", text: "Git" },
  ];
  return (
    <div className="dark:bg-black">
      <div className="container m-auto px-[16px] py-[64px] sm:px-20 sm:py-24">
        <ButtonTag text="Skills" />
        <MiniHead text="The skills, tools and technologies I am really good at:" />
        <div className="grid grid-cols-3 sm:grid sm:grid-cols-8 grid-rows-2] gap-y-[48px]">
          {cardsArr.map((el) => {
            return (
              <div className="flex justify-center">
                <div className="w-[99px]">
                  <img className="pl-[15px] sm:pb-[8px]" src={el.img} alt="" />
                  <div className="flex justify-center">{el.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
