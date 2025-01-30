import React from "react";
import Image from "next/image";

export default function Menu() {
  const cakes = [
    {
      name: "Cheesecake",
      img: "/images/Cheesecake.jpeg",
      description: "Kue keju lezat dengan tekstur lembut dan rasa creamy.",
      price: "Rp 50.000",
    },
    {
      name: "Chocolate Lava Cake",
      img: "/images/Chocolate Lava Cupcakes.jpeg",
      description: "Kue cokelat dengan lelehan cokelat panas di dalamnya.",
      price: "Rp 60.000",
    },
    {
      name: "Red Velvet Cake",
      img: "/images/Red Velvet Strawberry Cheesecake.jpeg",
      description: "Kue berwarna merah dengan lapisan keju yang lembut.",
      price: "Rp 55.000",
    },
  ];

  const iceCreams = [
    {
      name: "Es Krim Stroberi",
      img: "/images/Strawberry Ice Cream Recipe {3 Ingredients} - The Big Man's World ®.jpeg",
      description: "Es krim segar dengan rasa stroberi alami.",
      price: "Rp 25.000",
    },
    {
      name: "Es Krim Bubblegum",
      img: "/images/Bubblegum Bliss Mega Shakes.jpeg",
      description:
        "Es krim dengan rasa permen karet yang manis dan menyegarkan.",
      price: "Rp 30.000",
    },
    {
      name: "Es Krim Raspberry Ripple",
      img: "/images/🍇 Raspberry Swirl Parfait Perfection 🍦.jpeg",
      description: "Es krim vanilla dengan saus raspberry yang menggoda.",
      price: "Rp 28.000",
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-cover bg-center min-h-screen flex flex-col items-center">
      {" "}
      <h1 className="text-3xl mt-10 text-white md:text-4xl font-bold mb-8 text-center">
        MENU
      </h1>
      <main className="w-full max-w-6xl grid grid-cols-1  md:grid-cols-2 gap-8">
        {/* Bagian Kue */}
        <section className="text-[#bc3162] p-8 rounded-xl bg-white bg-opacity-95 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Kue</h2>
          <div className="space-y-6">
            {cakes.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 border-b border-gray-600 pb-4 last:border-b-0"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-[#bc3162]">{item.description}</p>
                  <p className="text-lg font-semibold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bagian Es Krim */}
        <section className="text-[#bc3162] p-8 rounded-xl bg-white bg-opacity-95 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Es Krim</h2>
          <div className="space-y-6">
            {iceCreams.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 border-b border-gray-500 pb-4 last:border-b-0"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-[#bc3162]">{item.description}</p>
                  <p className="text-lg font-semibold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
