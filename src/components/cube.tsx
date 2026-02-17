import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// Add or remove words here (typed as an array of strings)
const WORDS_TO_ANIMATE: string[] = ["CONTENT.", "CREATIVITY.", "STRATEGY."];
// Duration each word is visible in milliseconds
const WORD_CHANGE_INTERVAL: number = 3000; // 3 seconds

const animationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const WordTransition: FC = () => {
  // State is now explicitly typed as a number
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    // Set up a timer to cycle through the words
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        (prevIndex + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      
      {/* Container for the animated heading */}
      <div className="relative flex h-24 w-full items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={WORDS_TO_ANIMATE[currentWordIndex]}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute text-center text-6xl font-extrabold tracking-tighter text-black md:text-7xl"
          >
            {WORDS_TO_ANIMATE[currentWordIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Static subtitle */}
      <p className="mt-2 text-center text-base font-medium tracking-wide text-gray-700 md:text-lg">
        WE LEAD WITH CONTENT. WE SCALE WITH DIGITAL.
      </p>
    </div>
  );
};

export default WordTransition;