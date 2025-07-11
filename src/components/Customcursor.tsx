import { useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react";
import {motion} from "framer-motion"

const CustomCursor = () => {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX , {stiffness : 300 , damping : 30})
    const springY = useSpring(mouseY , {stiffness : 300 , damping : 30})

    useEffect(() => {
        const move = (e : MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY)
        }
        window.addEventListener("mousemove" , move)
        return () => window.removeEventListener("mousemove" , move)
    },[])
    return (
        <>
        <motion.div
      className="fixed top-0 left-0 w-10 h-10 bg-black rounded-full pointer-events-none z-50"
      style={{
        translateX: springX,
        translateY: springY,
      }}
    />
        </>
    )
}
export default CustomCursor;