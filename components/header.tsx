import { bague } from "@/app/layout";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sm:w-[90vw] p-2 sm:p-0 flex items-center justify-between ml-auto h-20 ">
      <Link href="/">
        <span
          className={`text-2xl sm:text-3xl uppercase text-[#A4A289] font-black sm:ml-2
        ${bague.className}`}
        >
          OMSK Team
        </span>
      </Link>
      <Link
        href={"mailto:o.m.s.k@gmx.de"}
        className="text-sm text-[#A4A289] font-medium p-0  sm:pr-6 "
      >
        o.m.s.k@gmx.de
      </Link>
    </header>
  );
};

export default Header;
