import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

import Link from "next/link";

const Contacts = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-40 grid grid-cols-1 md:grid-cols-2 gap-20 p-2">
      <div className="flex flex-col items-start justify-start">
        <h2 className="text-3xl  font-semibold text-[#BBB891] mb-10">
          Kontaktieren Sie uns
        </h2>
        <p className="text-lg text-[#C8C8C8] font-medium  mb-6">
          Aristide-Briand-Str. 21 77933 Lahr Baden/Württemberg
        </p>
        <div className="flex flex-col items-start gap-4 justify-center max-w-screen-sm ">
          <Link
            href={"tel:+4917620987142"}
            className="text-lg text-[#C8C8C8] font-medium "
          >
            <span className="text-[#B3B3B3] font-semibold">Michel Smith :</span>{" "}
            017620987142
          </Link>
          <Link
            href={"tel:+4917634555548"}
            className="text-lg text-[#C8C8C8] font-medium "
          >
            <span className="text-[#B3B3B3] font-semibold">Pavel Marker :</span>{" "}
            017634555548
          </Link>
          <Link
            href={"tel:+4917662517211"}
            className="text-lg text-[#C8C8C8] font-medium "
          >
            <span className="text-[#C8C8C8] font-semibold">lja Obert :</span>{" "}
            017662517211
          </Link>
          <Link
            href={"mailto:o.m.s.k@gmx.de"}
            className="text-lg text-[#C8C8C8] font-medium  mt-6"
          >
            o.m.s.k@gmx.de
          </Link>
        </div>
        <div className="w-[2px] rounded-2xl h-[6vh] bg-[#BBB891] my-10"></div>
        <div className="flex items-start justify-start gap-6 -ml-2">
          <Link href="/" className="text-[#BBB891]">
            <FaFacebookF size={18} />
          </Link>
          <Link href="/" className="text-[#BBB891]">
            <FaInstagram size={18} />
          </Link>
          <Link href="/" className="text-[#BBB891]">
            <FaYoutube size={18} />
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <form className="flex flex-col items-start justify-start gap-6 w-full">
          <h2 className="text-3xl  font-semibold text-[#BBB891]">
            Angebot anfordern
          </h2>
          <div className="grid grid-cols-2 gap-4 w-full">
            <input
              type="text"
              placeholder="Vorname"
              name="name"
              className="w-full h-12 text-[#BBB891] placeholder:text-[#A2A2A2] bg-[#101010] px-4 outline-none focus:outline-none border-b border-[#A4A289]"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Nachname"
              className="w-full h-12 text-[#BBB891] placeholder:text-[#A2A2A2] bg-[#101010] px-4 outline-none focus:outline-none border-b border-[#A4A289]"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-12 text-[#BBB891] placeholder:text-[#A2A2A2] bg-[#101010] px-4 outline-none focus:outline-none border-b border-[#A4A289]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            className="w-full h-12 text-[#BBB891] placeholder:text-[#A2A2A2] bg-[#101010] px-4 outline-none focus:outline-none border-b border-[#A4A289]"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Nachricht"
            className="w-full bg-[#101010] text-[#BBB891] placeholder:text-[#A2A2A2]  p-4 outline-none focus:outline-none border-b border-[#A4A289]"
          ></textarea>
          <button
            className="bg-transparent text-[#A4A289] border border-[#A4A289] uppercase font-semibold text-sm py-3 px-10 w-full
          hover:bg-[#A4A289] hover:text-[#101010] transition-all duration-300 ease-in-out focus:outline-none
          active:bg-[#A4A289] active:text-[#101010] active:scale-95
          "
          >
            Angebot anfordern
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
