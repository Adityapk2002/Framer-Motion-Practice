import { BatteryFull, Brain,Image, MessageSquareQuote, Plus, X } from "lucide-react"
import { AnimatePresence, easeInOut, motion } from "motion/react"
import { useState } from "react"

export const Card = () => {
    const[open , setOpen] = useState(true);
    return (
        <>
        <AnimatePresence>
        {open && (
        <motion.div 
        initial={{
            opacity : 0,
            scale : 0.9,
            filter : "blur(10px)"
           
        }}
        animate={{
            opacity : 1,
            scale : 1,
            filter : "blur(0px)"
        }}
        exit={{
            opacity : 0,
            scale : 0.98,
            filter : "blur(10px)"
        }}
        transition={{
            ease : easeInOut,
            duration : 0.5
        }}

        className="w-72 min-h-[26rem] h-[29rem] rounded-xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-4 flex flex-col ">
            <h2 className="font-bold text-[12px]">Aceternity UI Components</h2>
            <p className="text-neutral-600 text-[12px] mt-2">A Collection of beautiful UI components, let's get on with it.</p>
            <div className="flex items-center justify-center">
                <button onClick={() => setOpen(false)} className="flex gap-1 items-center text-[13px] mt-1 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-xl cursor-pointer">
                    <Image className="h-5 w-5"/>
                    Aceternity 
                    <X className="h-4 w-4"/>
                    </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-neutral-200 relative">

                <motion.div 
                initial = {{
                    opacity : 0,
                    scale : 0.9,
                    filter : "blur(10px)"
                }}
                whileHover={{
                    opacity : 1, 
                    scale : 1.05,
                    filter : "blur(0px)"
                }}
                transition={{
                    // duration : 0.3,
                    // ease : easeInOut
                    type : "spring",
                    stiffness : 100,
                    duration : 15

                }}
                className="absolute inset-0 h-full w-full bg-white border border-neutral-300 rounded-lg divide-y divide-neutral-200">
                    <div className="flex gap-3 p-4">
                            <MessageSquareQuote className="h-7 w-7 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-sm px-1"/>
                            <div className="flex flex-col">
                                <p className="text-[12px] font-bold">Aceternity UI components</p>
                                <p className="text-[10px] text-gray-400">A collection of UI components</p>
                            </div>
                    </div>

                     <div className="flex gap-3 p-4">
                            <BatteryFull className="h-7 w-7 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-1 rounded-sm"/>
                            <div className="flex flex-col">
                                <p className="text-[12px] font-bold">24 hours turnaround</p>
                                <p className="text-[10px] text-gray-400">Super fast delivery at warp speed</p>
                            </div>
                    </div>

                     <div className="flex gap-3 p-4">
                            <MessageSquareQuote className="h-7 w-7 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-1 rounded-sm"/>
                            <div className="flex flex-col">
                                <p className="text-[12px] font-bold">Aceternity UI components</p>
                                <p className="text-[10px] text-gray-400">A collection of UI components</p>
                            </div>
                    </div>

                     <div className="flex gap-3 p-4">
                            <Brain className="h-7 w-7 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-1 rounded-sm"/>
                            <div className="flex flex-col">
                                <p className="text-[12px] font-bold">360 days all around</p>
                                <p className="text-[10px] text-gray-400">We are here to help you 24/7</p>
                            </div>
                    </div>

                     <div className="flex gap-3 p-3 justify-center items-center">
                            <Plus className="h-7 w-7 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-1 rounded-full"/>
                           <p className="text-[12px] text-gray-400">Create Project</p>
                    </div>

                    
                </motion.div>

            </div>
        </motion.div>
        )}
        </AnimatePresence>
        </>
    )
}
