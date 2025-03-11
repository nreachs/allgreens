import { SERVICES } from "../constants/index.js";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
const Services = () => {
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
    <section className=" md:px-25 px-5 p-5 bottomBorder">
      <div className="mb-20">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-2xl lg:text-[3rem] font-bold tracking-tighter text-center mb-3"
        >
          Explore
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-[6rem] font-bold tracking-tighter text-center mb-20 bg-gradient-to-r from-[#ffecc1] via-[#57df83] to-[#229949] bg-clip-text text-transparent"
        >
          Services We’re Offering
        </motion.h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-2 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 1 }}
              key={service.id}
              className="group relative overflow-hidden rounded-2xl mx-4"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1.2 }}
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0  flex flex-col items-center justify-center text-center mx-auto opacity-0 backdrop-blur-3xl transition-opacity duration-500 group-hover:opacity-100">
                <motion.h3 className="mb-2 mt-5 text-xl text-white font-black">
                  {service.name}
                </motion.h3>
                <motion.p className="mb-12 p-4 text-black font-medium backG px-5 py-1">
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
          <div className="mb-8 lg:mb-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
