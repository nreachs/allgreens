import { useState } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import {Link} from "react-scroll"
import {
  Instagram,
  Twitter,
  Facebook,
  AlignJustify,
  X,
  PhoneCall,
  MapPin,
  FastForward,
  ChevronDown,
} from "lucide-react";
// import logo from "../assets/logo.webp";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bottomBorder  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <div className="pl-1">
          <Link>
            <img src={logo1} width={100} height={100} alt="allgreens" />
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
        <div className="hidden md:flex space-x-10 md:space-x-4 pr-2">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
          >
            Home
          </Link>
          <div className="relative group">
            <div className="flex items-center gap-1 hover:text-[#229949]">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
              >
                About us
              </Link>
              <ChevronDown size={20} />
            </div>
            <ul className="absolute hidden space-y-2 group-hover:block bg-[#229949] text-white border border-gray-300 rounded-lg p-5">
              <li>
                <Link
                  to="impact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="uppercase text-sm font-medium cursor-pointer hover:text-gray-300 transition duration-300"
                >
                  Our impact
                </Link>
              </li>
              <li>
                <Link
                  to="operation"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="uppercase text-sm font-medium cursor-pointer hover:text-gray-300 transition duration-300"
                >
                  operations
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
          >
            Our products
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden flex flex-col absolute space-y-5 bg-white w-full py-5 px-4 mt-2 bottomBorder `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
        >
          Home
        </Link>
        <div className="relative group">
          <div className="flex items-center gap-1 hover:text-[#229949]">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
            >
              About us
            </Link>
            <ChevronDown size={20} />
          </div>
          <ul className="absolute hidden space-y-2 group-hover:block bg-[#229949] w-full text-white border border-gray-300 rounded-lg p-5">
            <li>
              <Link
                to="impact"
                spy={true}
                smooth={true}
                duration={500}
                className="uppercase text-sm font-medium cursor-pointer hover:text-gray-300 transition duration-300"
              >
                Our impact
              </Link>
            </li>
            <li>
              <Link
                to="operation"
                spy={true}
                smooth={true}
                duration={500}
                className="uppercase text-sm font-medium cursor-pointer hover:text-gray-300 transition duration-300"
              >
                operations
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="products"
          spy={true}
          smooth={true}
          duration={500}
          className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
        >
          Our products
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="uppercase text-sm font-medium cursor-pointer hover:text-[#229949] transition duration-300"
        >
          Contact us
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
