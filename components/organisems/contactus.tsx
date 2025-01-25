"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      <div className="text-[#1b3b34] mt-10 md:mt-0 p-6 bg-white">
        <section
          ref={ref}
          className="relative h-screen bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/download (5).jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className=" mt-20 md:mt-0 relative flex flex-col lg:flex-row justify-around items-center py-16 text-white container mx-auto h-full">
            <div className="flex flex-col items-center">
              <h2 className="md:text-5xl text-2xl text-center font-bold">
                Got questions? Please Contact us!
              </h2>
              <p className="text-lg mt-2">Reach us through</p>

              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-[#bc3162] text-white font-semibold rounded-full shadow-lg hover:bg-[#bc3162] transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
