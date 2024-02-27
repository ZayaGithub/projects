export const TechCardComp = () => {
  let arr = [
    { name: "React" },
    { name: "Next.js" },
    { name: "Typescript" },
    { name: "Nest.js" },
    { name: "PostgreSQL" },
    { name: "Tailwindcss" },
    { name: "Figma" },
    { name: "Cypress" },
    { name: "Storybook" },
    { name: "Git" },
  ];
  return (
    <div className="flex gap-[10px] flex-wrap w-[80%]">
      {arr.map((el) => {
        return (
          <div className="dark:bg-slate-700 dark:text-white rounded-2xl px-[20px] py-[4px] bg-slate-200 text-gray-600">
            {el.name}
          </div>
        );
      })}
    </div>
  );
};
