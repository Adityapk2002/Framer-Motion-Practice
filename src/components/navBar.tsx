import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const itemVars = {
    initial: {
      y: 80,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <header>
        <nav className="flex justify-between items-center py-8 px-2 lg:py-4">
          <div className="flex items-center gap-[1ch]">
            <div className="w-5 h-5 rounded-full bg-yellow-400" />
            <span className="font-semibold text-sm tracking-wider">
              PORTFOLIO
            </span>
          </div>

          <div className="cursor-pointer text-black px-2" onClick={toggleMenu}>
            Menu
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10 z-50"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-sm font-semibold">PORTFOLIO</h1>
                <p className="cursor-pointer text-md" onClick={toggleMenu}>
                  Close
                </p>
              </div>

              <motion.ul
                variants={containerVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col justify-center items-center gap-6 mt-40 text-4xl font-medium font-cinzel"
              >
                <motion.li variants={itemVars} className="cursor-pointer">
                  Home
                </motion.li>

                <motion.li variants={itemVars} className="cursor-pointer">
                  About
                </motion.li>

                <motion.li variants={itemVars} className="cursor-pointer">
                  Projects
                </motion.li>

                <motion.li variants={itemVars} className="cursor-pointer">
                  Contact
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default NavBar;
