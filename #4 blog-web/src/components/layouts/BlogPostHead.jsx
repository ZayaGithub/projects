import Link from "next/link";
import { useContext } from "react";
import { FirstContext } from "@/utils/context";

export const BlogPostHead = () => {
  const { filteredTag } = useContext(FirstContext);
  return (
    <div className="max-w-screen-xl m-auto pb-[50px] pt-[50px]">
      <h1 className="pb-[30px] font-bold text-[28px]">All Blog post</h1>
      <div className="container flex justify-between">
        <div className="flex gap-[40px]">
          <button onClick={() => filteredTag("")}>All</button>
          <button onClick={() => filteredTag("java")}>Java</button>
          <button onClick={() => filteredTag("css")}>CSS</button>
          <button onClick={() => filteredTag("github")}>Github</button>
          <button onClick={() => filteredTag("nextjs")}>Nextjs</button>
          <button onClick={() => filteredTag("html")}>Html</button>
        </div>
        <div>
          <Link href="/blog">
            <p>View All</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
