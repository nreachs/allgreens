import { ABOUT_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
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
    <section className="md:px-20 p-5">
      <div className="mt-1 py-5 bottomBorder">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-[6rem] font-bold tracking-tighter text-center mb-10 bg-gradient-to-r from-[#ffecc1] via-[#57df83] to-[#229949] bg-clip-text text-transparent"
        >
          Who we are?
        </motion.h2>
        {ABOUT_CONTENT.map((about, index) => (
          <div key={index} className="mb-20 mx-4 flex flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 1 }}
              className={`lg:w-1/2 mb-4 lg:mb-0  ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1.2 }}
                className="rounded-xl w-full h-auto object-cover"
                src={about.image}
                alt={about.title}
              />
            </motion.div>
            <div
              className={`lg:w-1/2 flex flex-col lg:justify-center items-center my-10 ${
                index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
              }`}
            >
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="text-xl lg:text-2xl font-semibold mb-4 bg-gradient-to-r from-[#229949] via-[#9cf6b9] to-[#229949] bg-clip-text text-transparent font-black uppercase bg-[#ffedc3] ml-2"
              >
                {about.title}
                <span className="text-2xl lg:text-4xl bg-gradient-to-r from-[#229949] via-[#9cf6b9] to-[#229949] bg-clip-text text-transparent font-black uppercase bg-[#ffedc3] ml-2">
                  {about.title2}
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="mb-4 tracking-wide text-lg lg:text-xl lg:leading-8"
              >
                {about.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
