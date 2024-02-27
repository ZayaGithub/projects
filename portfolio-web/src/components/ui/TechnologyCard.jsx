import { TechCardComp } from "../layouts/techCardComp";

export const TechCards = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="dark:bg-slate-700 p-[32px] sm:p-[50px] w-[100%] sm:w-[50%] bg-slate-50 ">
        <img className="w-[100vw] " src="Picture.png" alt="" />
      </div>
      <div className="dark:bg-slate-800 p-[32px] sm:p-[50px] w-[100%] sm:w-[50%]">
        <h1 className=" font-bold text-[20px] pb-[24px]">Fiskil</h1>
        <p className="pb-[24px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="pb-[24px]">
          <TechCardComp />
        </div>
        <img src="Icon.png" alt="" />
      </div>
    </div>
  );
};
export const TechCardsX = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <div className="dark:bg-slate-800 p-[32px] w-[100%] sm:p-[50px] sm:w-[50%]">
        <h1 className="font-bold text-[20px] pb-[24px]">Fiskil</h1>
        <p className="pb-[24px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="pb-[24px]">
          <TechCardComp />
        </div>
        <img src="Icon.png" alt="" />
      </div>
      <div className="dark:bg-slate-700 p-[32px] sm:p-[50px] w-[100%] sm:w-[50%] bg-slate-50 ">
        <img className="w-[100vw] " src="Picture.png" alt="" />
      </div>
    </div>
  );
};
