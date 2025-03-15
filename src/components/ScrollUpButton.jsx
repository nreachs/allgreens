import { MoveUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
const ScrollUpButton = () => {
  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  // Event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation controls to fade out the icon when scrolled down
  useEffect(() => {
    if (scrollY > 200) {
      // Change this value depending on how far you'd like to scroll before hiding
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [scrollY, controls]);

  return (
    <motion.button
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-[#229949] text-white rounded-full shadow-lg hover:bg-[#62e68e] transition duration-300 hover:scale-95 focus:outline-none"
      aria-label="Scroll to top"
    >
      <MoveUp size={31} />
    </motion.button>
  );
};

export default ScrollUpButton;
