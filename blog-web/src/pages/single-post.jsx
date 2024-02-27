import { useContext } from "react";
import { FirstContext } from "@/utils/context";
import { Header, About, Footer } from "@/components/layouts";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SinglePost() {
  const router = useRouter();
  const id = router.query.id;

  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      const resId = await fetch(`https://dev.to/api/articles/${id}
          `);
      const dataId = await resId.json();
      setArticles(dataId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <Header />
      <div className="max-w-screen-md m-auto pb-[50px]">
        <div className="flex flex-col gap-[40px]">
          <div className="text-[36px] font-bold">{articles.title}</div>
          <p className="flex items-center gap-[10px]">
            <img src="hun.png" alt="" />
            <p className="pr-[40px]">{articles?.user?.name}</p>
            <p>{articles.readable_publish_date}</p>
          </p>
          <div className="">
            <img
              className="rounded-xl min-h-[400px]"
              src={articles.cover_image}
              alt=""
            />
          </div>

          <div className="w-fit">{articles.title}</div>
          <div className="w-fit">{articles.title}</div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}
