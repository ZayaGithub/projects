import { useContext } from "react";
import { FirstContext } from "@/utils/context";
import Link from "next/link";

export const BlogPostCards = () => {
  const { filteredArray, loadMore, isLoading } = useContext(FirstContext);
  if (isLoading) {
    return (
      <div className="max-w-screen-xl m-auto pb-[200px]">
        <div className="container flex gap-[40px] flex-wrap justify-between">
          {Array(9)
            .fill("1")
            .map(() => {
              return (
                <div className="flex flex-col gap-[10px] bg-slate-200 p-[10px] rounded-lg w-[384px] h-[500px]">
                  <div className="rounded-lg h-[200px] w-[360px] bg-slate-400"></div>
                  <button className=" rounded-md w-[100px] h-[30px] bg-slate-400 pt-[10px]"></button>
                  <div className=" font-bold text-[24px]"></div>
                  <div className="flex items-end"></div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-screen-xl m-auto pb-[10px]">
      <div className="container flex justify-between gap-3 flex-wrap w-[100%]">
        {filteredArray.map((article) => {
          return (
            <div className="flex flex-col border-[1px] rounded-xl shadow-md border-black-200 m-3 h-[500px] w-[30%] p-[20px]">
              <Link
                href={{ pathname: "/single-post", query: { id: article.id } }}
              >
                <div className="flex flex-col gap-[30px]">
                  <div className=" h-[200px]">
                    <img
                      className="rounded-lg min-h-full"
                      src={article.cover_image}
                      alt=""
                    />
                  </div>

                  <button className=" bg-blue-50 px-[10px] py-1 rounded-md text-sm w-fit text-blue-600">
                    {article.tag_list[0]}
                  </button>
                  <div className=" font-bold text-[24px]">{article.title}</div>
                  <div className="flex items-end">
                    {article.readable_publish_date}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="pt-[100px] pb-[100px] flex justify-center">
        <button
          onClick={loadMore}
          className="rounded-[5px] border border-solid border-gray-400  p-[10px] hover:bg-slate-100 active:bg-slate-400 active: shadow-md"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
