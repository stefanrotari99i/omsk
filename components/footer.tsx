import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

import { bague } from "@/app/layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-2xl mx-auto border-t border-[#A4A289]/10 py-6 px-2">
      <div className="flex items-center justify-center sm:justify-between flex-wrap gap-8 ">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Link href="/">
            <span
              className={`text-3xl uppercase text-[#A4A289] font-black
        ${bague.className}`}
            >
              OMSK Team
            </span>
          </Link>
          <p className="text-sm text-[#A4A289] font-medium  sm:pr-6 ">
            Erfahrung und Qualität für Ihr Projekt
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/">
            <p className="text-[#A4A289] font-medium text-sm">About us</p>
          </Link>
          <Link href="/">
            <p className="text-[#A4A289] font-medium text-sm">Gallery</p>
          </Link>
          <Link href="/">
            <p className="text-[#A4A289] font-medium text-sm">Team</p>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link href="/" className="text-[#B97962]">
            <FaFacebookF size={18} />
          </Link>
          <Link href="/" className="text-[#B97962]">
            <FaInstagram size={18} />
          </Link>
          <Link href="/" className="text-[#B97962]">
            <FaYoutube size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
