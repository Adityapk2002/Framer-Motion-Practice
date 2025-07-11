import { motion, useMotionValue, animate } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    x.set(relX * 0.4);
    y.set(relY * 0.4);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 300 });
    animate(y, 0, { type: "spring", stiffness: 300 });
  };

  return (
    <motion.div
      ref={ref}
      className="inline-block px-6 py-3 text-lg font-bold bg-red-500 text-white rounded-md cursor-pointer"
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
