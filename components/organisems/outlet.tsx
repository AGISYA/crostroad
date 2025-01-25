import React from "react";
import Image from "next/image";

const OutletPage = () => {
  const outlets = [
    {
      name: "Outlet 1",
      address: "Jl. Sudirman No. 1, Jakarta",
      phone: "081234567890",
      image: "/images/download 10.jpeg", // URL gambar lokal
    },
    {
      name: "Outlet 2",
      address: "Jl. Thamrin No. 2, Jakarta",
      phone: "081234567891",
      image: "/images/So Beautiful.jpeg", // URL gambar lokal
    },
    {
      name: "Outlet 3",
      address: "Jl. Merdeka No. 3, Jakarta",
      phone: "081234567892",
      image: "/images/download (5).jpeg", // URL gambar lokal
    },
  ];

  return (
    <div className="container bg-white mt-5 mx-auto p-4">
      {" "}
      <h1 className="text-3xl mt-10 text-[#bc3162] md:text-4xl font-bold mb-8 text-center">
        Our Outlet
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outlets.map((outlet, index) => (
          <div
            key={index}
            className="rounded-2xl  shadow-lg p-4 border text-[#bc3162] bg-[#bc3162] flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 mb-4 relative">
              <Image
                src={outlet.image}
                alt={outlet.name}
                className="rounded-full object-cover"
                layout="fill"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{outlet.name}</h2>
            <p className="text-white mb-2">{outlet.address}</p>
            <p className="text-white mb-4">Phone: {outlet.phone}</p>
            <button className="w-full bg-white text-[#bc3162] py-2 px-4 rounded-lg hover:bg-white transition">
              View on Map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutletPage;
