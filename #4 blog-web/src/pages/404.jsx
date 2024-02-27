import { Header, About, Footer } from "@/components/layouts";
import Link from "next/link";

export default function Custom404() {
  return (
    <h1 className="">
      <Header />
      <div className="flex gap-[10px] justify-center pt-[50px] pb-[100px]">
        <h2 className="text-[50px] flex justify-center items-center">404</h2>
        <div className=" bg-slate-400 w-[1px] mx-[50px]"></div>
        <div className="flex flex-col gap-[20px] w-[20%]">
          <h3 className="text-[28px] font-bold">Page Not Found</h3>
          <p className="text-slate-600">
            We're sorry, This page is unknown or does not eist the page you are
            looking for.
          </p>
          <Link href="/">
            <button className=" w-fit py-[5px] px-[10px] rounded-lg bg-indigo-500 text-white">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
      <About />
      <Footer />
    </h1>
  );
}
