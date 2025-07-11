import { useMousePosition } from "../hooks/useMousePosition"
import {motion} from "framer-motion"

const Cursor = () => {

    const {x , y} = useMousePosition();
    const size = 300;
    return(
        <>
        <div className="w-screen h-screen bg-black relative overflow-hidden">

            <motion.div
            animate={{
             WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
             maskPosition: `${x - size / 2}px ${y - size / 2}px`,
         }}
            transition={{
             type: "tween",
             ease: "backOut",
         }}
             className=" h-full w-full flex items-center justify-center absolute mask-[url(/circle.svg)] mask-no-repeat bg-orange-500 text-black z-10"
            style={{
                WebkitMaskSize : `${size}px`,
                maskSize : `${size}px`
            }}>
                <p className="max-w-2xl text-white text-center text-5xl font-semibold">
                    A <span className="text-black">visual designer</span> - with skills that haven't been replaced by AI -
                    making good shit only if the paycheck is equally good
                </p>
            </motion.div>

        <div className="h-full w-full flex items-center justify-center absolute inset-0 z-0">
                <p className="max-w-2xl text-white text-5xl font-semibold">
                I'm a <span className=" text-orange-600">selectively skilled</span>{" "}
                product designer with strong focus on producing high quality &
                Impactful digital experiences.
                </p>
            </div>
        </div>
        </>
    )
}

export default Cursor