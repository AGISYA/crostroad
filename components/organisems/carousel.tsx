"use client";

import Image from "next/image";

const Banner = () => {
  const bannerData = {
    image: "/images/ifoto-ai_1737776980351.png",
    mobileImage: "/images/ifoto-ai_1737776980351.png",
    title: "Dessert Lezat",
    description: "Nikmati kelezatan dessert terbaik kami.",
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-full h-screen flex-shrink-0 relative">
        <Image
          src={isMobile ? bannerData.mobileImage : bannerData.image}
          alt={bannerData.title}
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="absolute md:-mt-0 -mt-52 mx-0 md:mx-10 left-0 top-1/2 transform -translate-y-1/2 px-8 py-4 text-[#bc3162] w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center md:text-left">
            {bannerData.title}
          </h2>
          <p className="text-lg mt-2 sm:text-xl md:text-2xl text-center md:text-left">
            {bannerData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
