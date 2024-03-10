import { bague } from "@/app/fonts";
import Link from "next/link";

const LogoLink = ({ slogan }: { slogan?: string }) => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-1">
      <Link href="/">
        <span
          className={`text-3xl uppercase text-[#A4A289] font-black
  ${bague.className}`}
        >
          OMSK Team
        </span>
      </Link>
      {slogan && (
        <p className="text-sm text-[#A4A289] font-medium  sm:pr-6 ">{slogan}</p>
      )}
    </div>
  );
};

export default LogoLink;
