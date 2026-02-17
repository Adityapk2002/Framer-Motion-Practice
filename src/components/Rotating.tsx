import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Rotatingtitles() {
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = useMemo(
    () => ["24/7 support", "expert care", "quick response", "AI assistance", "personalized"],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [titleIndex, titles.length]);

  return (
    <span className="relative flex w-full justify-center items-center overflow-hidden bg-red-400 text-center h-screen">
      {titles.map((title, index) => (
        <motion.span
          key={index}
          className="absolute font-semibold text-7xl text-white"
          initial={{ opacity: 0, y: "-100%" }}
          animate={
            titleIndex === index
              ? { y: "0%", opacity: 1 }
              : { y: titleIndex > index ? "-150%" : "150%", opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 50 }}
        >
          {title}
        </motion.span>
      ))}
    </span>
  );
}
