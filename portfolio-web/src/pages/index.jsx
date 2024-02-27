import {
  Header,
  Profile,
  About,
  Skill,
  Experienses,
  Work,
  GetInTouch,
  Footer,
} from "@/components/layouts";
import { useEffect, useState } from "react";

export default function Home() {
  // useEffect(() => {
  //   const isDark = localStorage.getItem("isDark");
  //   if (!isDark) {
  //     localStorage.setItem("isDark", "true");
  //   } else {
  //     setDarkMode(isDark);
  //   }
  // });
  return (
    <div className="">
      <Header />
      <Profile />
      <About />
      <Skill />
      <Experienses />
      <Work />
      <GetInTouch />
      <Footer />
    </div>
  );
}

// import { useEffect } from "react";

// const Test = () => {
//   const [count, setCount] = useState;

//   useEffect(() => {
//     document.title = "Hello test";
//   }, []);
//   return <div>Hello</div>;
// };
