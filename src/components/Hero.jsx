import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="max-w-full mx-auto bottomBorder">
      <div className="flex flex-col items-center my-5">
        <h1 className="text-6xl lg:text-[8rem] p-2 uppercase text-[#3d5f4e] lg:font-bold font-black">
            {HERO_CONTENT.title}
        </h1>
        <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="lg:mt-6 text-sm mb-4 font-medium tracking-tight bg-gradient-to-r from-[#3d5f4e] via-[#96f4b5] to-[#3d5f4e] bg-clip-text text-transparent">
            {HERO_CONTENT.subtitle}
        </motion.p>
        <img src={HERO_CONTENT.image} className="w-full h-[65vh] object-cover rounded-2xl p-2" alt="hero"/>
      </div>
    </section>
  );
};

export default Hero;
