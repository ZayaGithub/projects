import { useContext } from "react";
import { FirstContext } from "@/utils/context";
import Link from "next/link";
export const Trend = () => {
  const { trending, isLoading } = useContext(FirstContext);
  if (isLoading) {
    return (
      <div className="max-w-screen-xl m-auto pt-[200px]">
        <div className="flex gap-4 justify-between">
          {Array(4)
            .fill("1")
            .map(() => {
              return (
                <div className="w-[300px] h-[350px] rounded-xl bg-slate-200">
                  <div className="h-full rounded-xl flex items-end">
                    <div className="flex flex-col p-[20px] pt-[50%] gap-[10px]">
                      <button className=" rounded-md w-[100px] h-[30px] bg-slate-400 "></button>
                      <h1 className=" bg-slate-400 w-[250px] h-[100px] rounded-md "></h1>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-screen-xl m-auto pb-[50px]">
      <h1 className="pb-[30px] font-bold text-[28px]">Trending</h1>
      <div className="flex gap-4 justify-between">
        {trending.map((el) => (
          <TrendingCards {...el} />
        ))}
      </div>
    </div>
  );
};
export const TrendingCards = ({ cover_image, title, id }) => {
  return (
    <Link href={{ pathname: "/single-post", query: { id } }}>
      <div
        className="w-[300px] h-[350px] rounded-xl shadow-lg"
        style={{ backgroundImage: `url(${cover_image})` }}
      >
        <div className="bg-black h-full bg-opacity-40 rounded-xl flex items-end">
          <div className="flex flex-col p-[20px] pt-[50%]">
            <button className="px-[10px] py-1 rounded-md text-sm w-fit bg-indigo-500 text-white">
              Technology
            </button>

            <h1 className="text-[20px] pt-[16px] pb-[24px] text-white cursor-pointer ">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};
