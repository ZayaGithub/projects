import { Header, BlogPostCards, About, Footer } from "@/components/layouts";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { FirstContext } from "@/utils/context";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="max-w-screen-xl m-auto pt-[50px] pb-[30px] font-bold text-[28px]">
        All Blog post
      </h1>
      <BlogPostCards />
      <About />
      <Footer />
    </div>
  );
}
