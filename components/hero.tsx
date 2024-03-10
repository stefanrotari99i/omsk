import { bague } from "@/app/layout";
import HeroSide from "@/components/hero-side";
import Image from "next/image";
import { CgScrollV } from "react-icons/cg";

const Hero = () => {
  return (
    <div className="w-screen h-[calc(100dvh-80px)] flex items-start ">
      <HeroSide />
      <div className="flex-1 w-full h-full relative">
        <Image
          src={"/hero.webp"}
          fill
          className="object-cover w-full h-full brightness-75 "
          alt="hero"
        />
        <div className="flex flex-col items-start gap-4 justify-center absolute top-0 left-0 w-full h-full p-4 sm:p-18 md:p-28">
          <h1
            className={`${bague.className} text-5xl md:text-8xl font-bold text-white`}
          >
            Edelstahlbau
          </h1>
          <p className="text-md sm:text-lg -mt-2 text-white">
            Erfahrung und Qualität für Ihr Projekt
          </p>
          <button className="bg-transparent border text-sm mt-4 border-white font-semibold text-white px-10 py-3 ">
            Learn More
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-[50vw] md:w-[20vw] h-[60px] md:h-[100px] bg-[#060606] z-10  p-2 pl-0 pb-0">
          <p className="text-[#A4A289] text-kg font-semibold text-center flex items-center justify-center gap-4  w-full h-full">
            scroll down <CgScrollV size={24} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
