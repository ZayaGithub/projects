import { useEffect } from "react";
import { Header, Contact, About, Footer } from "@/components/layouts";

export default function Home() {
  return (
    <div>
      <Header />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
