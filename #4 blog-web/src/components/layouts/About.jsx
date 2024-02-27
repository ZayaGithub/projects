import Link from "next/link";

export const About = () => {
  return (
    <div className=" bg-slate-100">
      <div className="max-w-screen-xl m-auto py-[30px]">
        <div className="container flex justify-between w-[80%] text-gray-500">
          <div className="w-[30%]">
            <h1 className="font-bold pb-6 text-black">About</h1>
            <p className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do
              eiusmod tempor incididunt ut labore et dolore magna ariqua. Ut
              enim minim veniam at
            </p>
            <p className="pb-3">Email: info@jstemplete.net</p>
            <p>Phone: 880 123 456 789</p>
          </div>
          <div className="flex flex-col gap-[12px]">
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
          <div className="flex items-start gap-[20px]">
            <img src="Negative.svg" alt="" />
            <img src="twit.svg" alt="" />
            <img src="insta.svg" alt="" />
            <img src="linkedIn.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
