import { QUICK_MESSAGE } from "../constants/index.js";
import {motion} from "framer-motion"
const QuickMessage = () => {
  return (
    <div className="mt-1 w-full backG  lg:py-6 ">
      <div className="flex overflow-hidden whitespace-nowrap">
        {[...Array(2)].map((item, index) => (
          <motion.h1
          initial={{x:"0"}}
          animate={{x:"-100%"}}
          transition={{repeat:Infinity, ease:"linear",duration:50}}
            key={index}
            className="py-3 text-3xl font-bold leading-none tracking-tight lg:text-5xl"
          >
            {QUICK_MESSAGE}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default QuickMessage;
