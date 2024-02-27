import { useContext, useState } from "react";
import { FirstContext } from "@/utils/context";
import Link from "next/link";
export const Carousel = () => {
  const { articles, isLoading } = useContext(FirstContext);
  const [current, setCurrent] = useState(0);
  const prev = () => {
    setCurrent((current) =>
      current === 0 ? articles.length - 1 : current - 1
    );
  };
  const next = () => {
    setCurrent((current) =>
      current === articles.length - 1 ? 0 : current + 1
    );
  };
  if (isLoading) {
    return (
      <div className="max-w-screen-xl m-auto">
        <div className="flex overflow-hidden">
          {Array(1)
            .fill("1")
            .map(() => {
              return (
                <div class=" h-[640px] bg-slate-200 shadow rounded-xl p-4 w-full mx-auto animate-pulse flex items-end">
                  <div class="w-[50%] h-[40%] bg-slate-400 rounded-xl"></div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="flex overflow-hidden">
        {articles.map((el) => {
          return (
            <div
              className="min-w-full min-h-full transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <Link href={{ pathname: "/single-post", query: { id: el.id } }}>
                <div className="relative cursor-pointer">
                  <img
                    className="min-w-full min-h-full rounded-xl"
                    src={el.social_image}
                    alt=""
                  />
                  <div className="w-[50%] absolute bottom-[10px] left-[10px] bg-white rounded-xl p-[20px] flex flex-col gap-[10px]">
                    <span className="px-[10px] py-1 rounded-md text-sm w-fit bg-indigo-500 text-white">
                      Technology
                    </span>
                    <h1 className="text-4xl font-semibold">{el.title}</h1>
                    <p className="text-gray-600">{el.readable_publish_date}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-end gap-1 *:p-3 *:border *:size-10  *: *:rounded-md *:border-gray-800">
        <img onClick={prev} className="cursor-pointer" src="<.svg" alt="" />
        <img
          on
          onClick={next}
          className="cursor-pointer rotate-180"
          src="<.svg"
          alt=""
        />
      </div>
    </div>
  );
};
