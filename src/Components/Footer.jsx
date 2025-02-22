import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // Importing icons
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { FaGithub } from "react-icons/fa";

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
            Explore breathtaking trails and embark on unforgettable hiking adventures with Hikker – your trusted companion for trekking experiences.
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" /> Bijonagar, Dhaka-1100
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" /> orthi7677@gmail.com
              </p>
             <div className="flex gap-4 ">
             <Link className="text-2xl" to="https://www.facebook.com/profile.php?id=61550562791832" target="_blank">
              <FaFacebook />
              </Link>
              <Link className="text-2xl" to="https://github.com/sharmin7677" target="_blank">
              <FaGithub />
              </Link>
              <Link className="text-2xl" to="https://www.youtube.com/@Orthi77" target="_blank">
              <IoLogoYoutube /></Link>
             </div>
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
        <div className="mt-10 flex justify-between text-gray-300 text-sm">
          <p>Hiking & Trekking Mountain Template Kit by Orthi</p>
          <p>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
