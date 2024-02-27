import { Gogo } from "@/components/layouts/component2";
import {
  Header,
  Carousel,
  Trend,
  BlogPostHead,
  BlogPostCards,
  About,
  Footer,
} from "@/components/layouts";
import { useState, useEffect } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://dev.to/api/articles");
  const dataBig = await res.json();

  return { props: { dataBig } };
}

export default function Home({ dataBig }) 
{
  return (
    <div>
      <div>
        <Header/>
        <Carousel />
        <Trend />
        <BlogPostHead />
        <BlogPostCards />
        <About />
        <Footer />
      </div>
    </div>
  );
}
