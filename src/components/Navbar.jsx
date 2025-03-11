import  { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  Instagram,
  Twitter,
  Facebook,
  AlignJustify,
  X,
  PhoneCall,
  MapPin,
  FastForward,
} from "lucide-react";
import { LINKS } from "../constants/index.js";
import logo from "../assets/logo.webp";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bottomBorder  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <div className="pl-2">
          <Link>
            <img src={logo} width={350} height={100} alt="allgreens" />
          </Link>
        </div>
        <div className="md:hidden ml-5">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <AlignJustify />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <Link
              to={link.link}
              spy={true}
              smooth={true}
              duration={500}
              key={index}
              className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }} 
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 0.3 }}
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-white w-full py-5 px-4 mt-2 bottomBorder `}
      >
        {LINKS.map((link, index) => (
          <Link
            to={link.link}
              spy={true}
              smooth={true}
              duration={500}
            key={index}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
