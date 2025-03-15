import { useState, useEffect } from "react";
import { PRODUCTS } from "../constants";
import { motion} from "framer-motion";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

const OurImpact = () => {
  
  const [activeTab, setActiveTab] = useState(PRODUCTS[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="md:px-32 px-5 p-5 ">
      {/* <Navbar /> */}
      <div className="min-h-[80vh] max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-5xl  lg:text-[6rem] font-bold tracking-tighter text-center mb-4 bg-gradient-to-r from-[#ffecc1] via-[#57df83] to-[#229949] bg-clip-text text-transparent"
        >
          Our Impact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
          }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-4"
        >
          {PRODUCTS.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold tracking-tighter transition-colors lg:text-2xl ${
                activeTab.id === tab.id
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-black"
              }`}
            >
              {tab.title}
            </motion.button>
          ))}
        </motion.div>
        <div
          key={activeTab.id}
          className="flex lg:mt-14 mt-8 flex-col items-center lg:flex-row-reverse"
        >
          <div className="p-4 lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1 }}
              className="mb-4 text-3xl font-bold lg:text-4xl bg-gradient-to-r from-[#229949] via-[#57df83] to-[#ffecc1] bg-clip-text text-transparent"
            >
              {activeTab.content}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1 }}
              className="text-lg tracking-tighter lg:text-2xl"
            >
              {activeTab.description}
            </motion.p>
          </div>
          <div className="p-4 lg:w-1/2 ">
            <motion.img
               initial={{ opacity: 0 }}
               animate={{ opacity: isVisible ? 1 : 0 }}
               transition={{ duration: 1.2 }}
              src={activeTab.imgSrc}
              className="rounded-xl h-auto w-full"
              alt={activeTab.title}
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default OurImpact;
