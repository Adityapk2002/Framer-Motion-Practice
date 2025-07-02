import {Facebook, Github, House, Instagram, Twitter, Youtube,  } from "lucide-react"
import {AnimatePresence, motion,type MotionValue, useMotionValue, useSpring, useTransform} from "framer-motion"
import { useRef, useState } from "react"

export function FloatingDock(){
    return(
        <>
        <div className="flex justify-center items-center h-screen">
             <FloatingCore/>

        </div>
        </>
    )
}

type Link = {
    title:string,
    icon : React.ReactNode | any,
    href : string
}
const FloatingCore = () => {    

    const links : Link[] = [
        {
        title : "Home",
        icon : (<House className="text-neutral-500 h-full w-full"/>),
        href : "/"
        },
        {
        title : "Instagram",
        icon : (<Instagram className="text-neutral-500 h-full w-full"/>),
        href : "/"
        },
        {
        title : "Facebook",
        icon : (<Facebook className="h-full w-full text-neutral-500"/>),
        href : "/"
        },
        {
        title : "X",
        icon : (<Twitter className="text-neutral-500 h-full w-full"/>),
        href : "/"
        },
        {
        title : "Youtube",
        icon : (<Youtube className="text-neutral-500 h-full w-full"/>),
        href : "/"
        },
        {
        title : "Github",
        icon : (<Github className="text-neutral-500 h-full w-full"/>),
        href : "/"
        }
    ]

    const mouseX = useMotionValue(Infinity)
    return( 
        <motion.div 
        onMouseMove={(e : any) => mouseX.set(e.pageX)}
        onMouseLeave={(e : any) => mouseX.set(Infinity)}

        className="fixed inset-x-0 bottom-10 mx-auto flex h-16 items-center justify-center gap-3 bg-neutral-100 w-fit px-4 rounded-2xl">
        {links.map((element , index) => 
        <IconContainer key={element.title} mouseX={mouseX} element={element}/>
        )}
        </motion.div>

    )
}

export const IconContainer = ({element , mouseX} : {element : Link ; mouseX : MotionValue<number>}) => {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX,(val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? {x : 0 , width : 0}

        return val-bounds.x-bounds.width / 2
    });

    let widthTransform = useTransform(distance , [-150,0,150],[40,80,40])
    let heightTransform = useTransform(distance , [-150,0,150],[40,80,40])

    let widthIconTransform = useTransform(distance , [-150,0,150],[20,40,20])
    let heightIconTransform = useTransform(distance , [-150,0,150],[20,40,20])

    const width = useSpring(widthTransform,{
        mass : 0.1,
        stiffness : 150,
        damping : 12
    })

    const height = useSpring(heightTransform,{
        mass : 0.1,
        stiffness : 150,
        damping : 12
    })

    const widthIcon = useSpring(widthIconTransform,{
        mass : 0.1,
        stiffness : 150,
        damping : 12
    })

    const heightIcon = useSpring(heightIconTransform,{
        mass : 0.1,
        stiffness : 150,
        damping : 12
    })
    const[hovered , setHovered] = useState(false)

    return( 
        <a href={element.href}>
        <motion.div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        ref={ref}
        style={{
            width : width,
            height : height
        }}
        className="flex relative items-center justify-center rounded-full bg-neutral-200 px-2 py-2">
        <AnimatePresence>
        {hovered && (
        <motion.div 
        initial={{
            opacity : 0,
            y : 10
        }}
        animate={{
            opacity : 1,
            y : 0
        }}
        exit={{
            opacity : 0,
            y: 2
        }}
        className="absolute inset-x-0 left-1/2 -translate-x-1/2 -top-12 bg-neutral-300 w-fit px-2 py-1 rounded-md whitespace-pre-wrap text-neutral-500">
            {element.title}
        </motion.div>
        )}
        </AnimatePresence>


        <motion.div 
        style={{
            width : widthIcon,
            height : heightIcon
        }}
        className="flex justify-center items-center">
            {element.icon}
        </motion.div>
        </motion.div>
        </a>
    )
}