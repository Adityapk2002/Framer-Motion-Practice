import { easeIn, easeInOut, easeOut, motion } from "framer-motion"

export function TextScale(){
    return(
        <>
        <div className="bg-gray-900 flex justify-center items-center h-screen">
            <motion.div className="bg-blue-500 px-4 py-2 outline-none"
            animate = {{
                scale : [1 , 1.2 ,1]
            }}
            transition={{
                delay : 0.5,
                repeat : Infinity,
                ease : "easeInOut"
            }}
            

            >Click Me</motion.div>
        </div>
        </>
    )
}