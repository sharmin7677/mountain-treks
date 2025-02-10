import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo & Info */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-30 rounded-full" />
              <h2 className="text-xl font-bold">EVERHIKE</h2>
            </div>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" /> Jl. Raya Ubud No.88, Bali - 80571
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" /> support@domain.com
              </p>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {["About Us", "Trekking", "Gallery", "Our Team", "Contact"].map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className={`hover:text-orange-500 transition duration-300 ${link === "Gallery" ? "text-orange-500" : ""}`}
                  >
                    ➤ {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Useful Links */}
          <div>
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              {["Privacy Policy", "Terms and Conditions", "Disclaimer", "Elements", "Support"].map((link, index) => (
                <li key={index}>
                  <Link to="#" className="hover:text-orange-500 transition duration-300">
                    ➤ {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          Hiking & Trekking Mountain Template Kit by Jegtheme
        </div>
      </div>
    </footer>
  );
};

export default Footer;
