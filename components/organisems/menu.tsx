import { useState } from "react";
import Image from "next/image";

type MenuKey = "cakes" | "ice_cream" | "others";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState<MenuKey>("cakes"); // Default menu is 'cakes'

  // Data menu dengan gambar dan nama produk
  const menuItems: Record<MenuKey, { name: string; img: string }[]> = {
    cakes: [
      { name: "Cheesecake", img: "/images/Cheesecake.jpeg" },
      {
        name: "Chocolate Lava Cake",
        img: "/images/Chocolate Lava Cupcakes.jpeg",
      },
      {
        name: "Red Velvet Cake",
        img: "/images/Red Velvet Strawberry Cheesecake.jpeg",
      },
    ],
    ice_cream: [
      {
        name: "Strawberry Ice Cream",
        img: "/images/Strawberry Ice Cream Recipe {3 Ingredients} - The Big Man's World ®.jpeg",
      },
      {
        name: "Pink Bubblegum Ice Cream",
        img: "/images/Bubblegum Bliss Mega Shakes.jpeg",
      },
      {
        name: "Raspberry Ripple Ice Cream",
        img: "/images/🍇 Raspberry Swirl Parfait Perfection 🍦.jpeg",
      },
    ],
    others: [
      {
        name: "Fruit Parfait",
        img: "/images/download (4).jpeg",
      },
      {
        name: "Brownies",
        img: "/images/BROWNIE DE REMOLACHA.jpeg",
      },
      {
        name: "Macarons",
        img: "/images/Raspberry White Chocolate Macarons.jpeg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#bc3162] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl mt-10 md:text-4xl font-bold mb-8 text-center">
        Menu Dessert Kami
      </h1>
      {/* Deskripsi Menu */}
      <p className="text-center text-base sm:text-lg mb-8 max-w-3xl text-white">
        Nikmati pilihan menu dessert kami yang dibuat dengan bahan-bahan
        berkualitas tinggi dan cita rasa yang menggoda. Setiap hidangan
        disiapkan dengan penuh perhatian untuk memberikan pengalaman manis yang
        istimewa.
      </p>

      {/* Menu Tabs */}
      <div className="flex flex-wrap justify-center space-x-6 mb-8">
        <button
          onClick={() => setSelectedMenu("cakes")}
          className={`px-6 py-2 rounded-full text-sm sm:text-base ${
            selectedMenu === "cakes"
              ? "bg-[#bc3162] text-white"
              : "bg-white text-[#bc3162]"
          }`}
        >
          Cakes
        </button>
        <button
          onClick={() => setSelectedMenu("ice_cream")}
          className={`px-6 py-2 rounded-full text-sm sm:text-base ${
            selectedMenu === "ice_cream"
              ? "bg-[#bc3162] text-white"
              : "bg-white text-[#bc3162]"
          }`}
        >
          Ice Cream
        </button>
        <button
          onClick={() => setSelectedMenu("others")}
          className={`px-6 py-2 rounded-full text-sm sm:text-base ${
            selectedMenu === "others"
              ? "bg-[#bc3162] text-white"
              : "bg-white text-[#bc3162]"
          }`}
        >
          Others
        </button>
      </div>

      {/* Menu Items Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems[selectedMenu].map((item, index) => (
          <div
            key={index}
            className="text-[#bc3162] bg-white p-4 rounded-lg shadow-md text-center"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-medium">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
