import Image from "next/image";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Hero2 from "./components/Hero2";
// import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Hero2 />
      
    </>
  );
}
