import Image from "next/image";
import Link from "next/link";

interface AboutProps {
  position?: "left" | "right";
  title: string;
  description: string;
  image: string;
  height?: string;
  mxAuto?: boolean;
}

const About = ({
  position,
  title,
  description,
  image,
  mxAuto = true,
  height = "h-[500px]",
}: AboutProps) => {
  return (
    <div
      className={`max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 my-20 p-2
      ${mxAuto ? "mx-auto" : ""}
    `}
    >
      <div
        className={`w-full ${height} relative image-border before:hidden md:before:block ${
          position === "left" ? "" : "md:order-2"
        }`}
      >
        <Image
          src={image}
          fill
          className={`object-cover w-full h-full brightness-90 ${
            position === "left" ? "md:-skew-x-6" : "md:skew-x-6"
          }`}
          alt="hero"
        />
      </div>
      <div className="flex flex-col items-start gap-4 justify-center max-w-screen-sm ">
        <h2 className="text-3xl font-bold text-[#BBB891] line-down">{title}</h2>
        <p className="text-md text-[#C8C8C8] font-medium leading-7">
          {description}
        </p>
        <Link href="/">
          <p className="text-sm text-[#A4A289]/80 tracking-wide font-semibold  cursor-pointer">
            Learn More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default About;
