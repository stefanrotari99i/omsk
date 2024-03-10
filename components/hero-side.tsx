"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu2Line } from "react-icons/ri";

const HeroSide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[10vw] h-[calc(100%-100px)] hidden md:flex flex-col items-center justify-between px-4 relative">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{
          duration: 0.3,
          type: "tween",
          stiffness: 2,
          damping: 200,
        }}
        className="fixed w-[20vw] top-0 left-0 flex flex-col items-start justify-between shadow-xl h-screen border-r border-[#242424] bg-[#060606] z-50  p-6 "
      >
        <div className="flex items-center justify-between w-full h-20 ">
          <Link href="/">
            <span
              className={`text-3xl uppercase text-[#A4A289] font-black ml-2
        `}
            >
              OMSK Team
            </span>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="bg-transparent text-[#A4A289] border-none outline-none focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GrClose size={24} />
          </motion.button>
        </div>
        <div className="flex flex-col items-start gap-6 justify-center w-full h-full">
          <Link
            href="/"
            className="text-[#A4A289] text-2xl uppercase font-black tracking-wider hover:text-[#B97962] transition-all duration-300 ease-in-out"
          >
            About us
          </Link>
          <Link
            href="/"
            className="text-[#A4A289] text-2xl uppercase font-black tracking-wider hover:text-[#B97962] transition-all duration-300 ease-in-out"
          >
            Gallery
          </Link>
          <Link
            href="/"
            className="text-[#A4A289] text-2xl uppercase font-black tracking-wider hover:text-[#B97962] transition-all duration-300 ease-in-out"
          >
            Team
          </Link>
          <Link
            href="/"
            className="text-[#A4A289] text-2xl uppercase font-black tracking-wider hover:text-[#B97962] transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-start justify-start gap-6 -ml-2">
          <Link href="/" className="text-[#BBB891] hover:text-[#A4A289]">
            <FaFacebookF size={18} />
          </Link>
          <Link href="/" className="text-[#BBB891]">
            <FaInstagram size={18} />
          </Link>
          <Link href="/" className="text-[#BBB891]">
            <FaYoutube size={18} />
          </Link>
        </div>
      </motion.div>

      <button
        className="bg-transparent text-[#B5B5B5] border-none outline-none focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMenu2Line size={24} />
      </button>
      <div className="flex flex-col items-center justify-center gap-6">
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
  );
};

export default HeroSide;
