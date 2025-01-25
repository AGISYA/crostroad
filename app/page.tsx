"use client";

import About from "@/components/organisems/about us";
import Carousel from "@/components/organisems/carousel";
import Contact from "@/components/organisems/contactus";
import Footer from "@/components/organisems/footer";
import Menu from "@/components/organisems/menu";
import Navbar from "@/components/organisems/navbar";
import OutletPage from "@/components/organisems/outlet";

const Page = () => {
  return (
    <div className="relative w-full bg-[#bc3162] text-white">
      <Navbar />
      <section id="home">
        <Carousel />
      </section>{" "}
      <section id="aboutus">
        <About />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="outlet" className="">
        <OutletPage />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Page;
