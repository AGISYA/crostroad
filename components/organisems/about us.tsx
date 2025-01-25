import Image from "next/image";

export default function About() {
  return (
    <div className="w-full bg-white mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Judul Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#bc3162]">
          Tentang Kami
        </h1>
        <p className="mt-4 text-xs sm:text-lg text-[#bc3162]">
          Kami adalah penyedia dessert berkualitas yang mengutamakan rasa
          autentik dan pengalaman tak terlupakan.
        </p>
      </div>

      {/* Section Tentang Kami */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Teks Kiri */}
        <div className="md:col-span-1 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#bc3162] mb-4">
            Selamat Datang di CROSTROAD
          </h2>
          <p className="text-[#bc3162] leading-relaxed text-xs sm:text-base mb-4">
            Nikmati berbagai dessert lezat yang diracik dengan sentuhan cinta
            dan dedikasi. Kami menawarkan pilihan dessert seperti kue artisan,
            pastry premium, dan hidangan khas kami.
          </p>
        </div>

        {/* Gambar Tengah */}
        <div className="md:col-span-1 flex justify-center w-full">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
            <Image
              src="/images/12.jpeg"
              alt="Dessert Crostroad"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Teks Kanan */}
        <div className="md:col-span-1 flex flex-col justify-center text-center md:text-left">
          <p className="text-[#bc3162] leading-relaxed text-xs sm:text-base mb-4">
            Setiap dessert dibuat dengan bahan-bahan pilihan untuk memastikan
            rasa yang autentik dan pengalaman kuliner terbaik di setiap gigitan.
          </p>
          <p className="text-[#bc3162] leading-relaxed text-xs sm:text-base">
            Hidangan khas kami, seperti Croissant Signature, menggabungkan
            tekstur renyah di luar dan kelembutan sempurna di dalam yang pasti
            memanjakan selera Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
