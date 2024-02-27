import Link from "next/link";
import { useContext } from "react";
import { FirstContext } from "@/utils/context";

export const Header = () => {
  const { handleSearch } = useContext(FirstContext);
  return (
    <div className="max-w-screen-xl m-auto pb-[50px] pt-[30px] sticky top-0 bg-white">
      <div className="container flex items-center h-[36px] gap-[118px]">
        <div className="">
          <Link href="/">
            <img className=" max-h-[36px]" src="Logo.png" alt="" />
          </Link>
        </div>
     
        <div className="flex w-[90%] gap-[21px]">
          <div className="flex w-[70%] justify-center gap-[40px] items-center">
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/blog">
              <p>Blog</p>
            </Link>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </div>
          <div className="flex p-[8px] gap-[12px] bg-slate-50">
            <input
              onChange={handleSearch}
              type="text"
              className="bg-slate-50"
              placeholder="search"
            />
            <img src="search-outline.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
