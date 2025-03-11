import React from 'react';
import {MoveUp} from "lucide-react"

const ScrollUpButton = () => {
  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-[#229949] text-white rounded-full shadow-lg hover:bg-[#62e68e] transition duration-300 hover:scale-95 focus:outline-none"
      aria-label="Scroll to top"
    >
      <MoveUp size={30} />
    </button>
  );
};

export default ScrollUpButton;