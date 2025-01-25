import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#bc3162] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Deskripsi Perusahaan */}
        <div>
          <h3 className="text-lg font-bold mb-4">Tentang Kami</h3>
          <p className="text-pink-100">
            Crostroad adalah tempat terbaik untuk menikmati dessert dengan
            berbagai pilihan makanan yang lezat dan menyenangkan. Kami
            berkomitmen untuk memberikan pengalaman manis yang tak terlupakan
            kepada setiap pelanggan.
          </p>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
          <p className="text-pink-100">Jl. Sakura no.7, Bandung, Indonesia</p>
          <p className="text-pink-100">hello@crostroad.id</p>
          <p className="text-pink-100">(+62)22 9876 5432</p>
        </div>

        {/* Jam Operasional & Media Sosial */}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-lg font-bold mb-4">Jam Operasional</h3>
            <p className="text-pink-100">Senin - Jumat: 9am - 9pm</p>
            <p className="text-pink-100">Sabtu & Minggu: 10am - 11pm</p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <h3 className="text-lg font-bold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-pink-100 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-pink-100 hover:text-white transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                className="text-pink-100 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-pink-100 hover:text-white transition duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-pink-200 pt-6">
        {/* Catatan Footer */}
        <p className="text-center text-pink-200">
          © {new Date().getFullYear()} Crostroad. Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
