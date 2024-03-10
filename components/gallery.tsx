"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

const gallery = [
  {
    src: "/1.webp",
  },
  {
    src: "/2.webp",
  },
  {
    src: "/3.webp",
  },
  {
    src: "/4.webp",
  },
  {
    src: "/5.webp",
  },
  {
    src: "/6.webp",
  },
  {
    src: "/7.webp",
  },
  {
    src: "/8.webp",
  },
  {
    src: "/9.webp",
  },
  {
    src: "/10.webp",
  },
  {
    src: "/11.webp",
  },
  {
    src: "/12.webp",
  },
  {
    src: "/13.webp",
  },
  {
    src: "/14.webp",
  },
  {
    src: "/15.webp",
  },
  {
    src: "/16.webp",
  },
  {
    src: "/17.webp",
  },
  {
    src: "/18.webp",
  },
  {
    src: "/19.webp",
  },
  {
    src: "/20.webp",
  },
];

const Gallery = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);
  return (
    <div className="max-w-screen-2xl mx-auto my-40 p-2">
      <h2 className="text-3xl  font-semibold text-[#BBB891] text-right ">
        Unsere Galerie
      </h2>
      <p className="text-md text-[#B3B3B3] font-medium text-right leading-6 mt-2 ml-auto max-w-screen-md">
        Hier finden Sie einige unserer besten Arbeiten und Projekte.
      </p>
      <Slider
        {...settings}
        className="w-full mt-10 -skew-x-2 md:-skew-x-6"
        ref={sliderRef}
      >
        {gallery.map((item, index) => (
          <GalleryItem key={index} image={item.src} nmbr={index} />
        ))}
      </Slider>
      <div className="flex items-center justify-center gap-10 mt-10 w-full max-w-screen-2xl mx-auto">
        <button
          className=" bg-transparent focus:outline-none border-none text-[#B3B3B3] text-sm font-semibold "
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <LuChevronLeft size={32} />
        </button>
        <div className="w-[2px] h-[30px] bg-[#B3B3B3]/10"></div>
        <button
          className="bg-transparent focus:outline-none border-none text-[#B3B3B3] text-sm font-semibold "
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <LuChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

const GalleryItem = ({
  nmbr = 0,
  image = "/hero.webp",
}: {
  nmbr?: number;
  image: string;
}) => {
  return (
    <div className="w-full aspect-square relative ">
      <p className="absolute bottom-0 left-0 py-2 px-4 bg-[#131213] text-[#B3B3B3] font-black text-4xl z-10">
        {nmbr + 1}
      </p>
      <Image
        src={image}
        alt="hero"
        fill
        className="object-cover w-full h-full p-2 grayscale hover:grayscale-0"
      />
    </div>
  );
};

export default Gallery;
