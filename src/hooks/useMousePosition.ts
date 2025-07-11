import { useEffect, useState } from "react"

export const useMousePosition = () => {
    const [mousePosition , setMousePositon] = useState({
        x : 0,
        y : 0
    });

    useEffect(() => {
        const handleMouseMove = (event : MouseEvent) => {
            setMousePositon({
                x : event.clientX,
                y : event.clientY,
            });
        };
        window.addEventListener("mousemove" , handleMouseMove)
        return () => window.removeEventListener("mousemove" , handleMouseMove)
    },[])
    return mousePosition

}