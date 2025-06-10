import { easeIn, easeInOut, easeOut, motion } from "framer-motion"
import "./index.css"
import { Loader } from "./components/loader"
import { TextScale } from "./components/TextScale"

function App() {
  return (
    <>
    {/* <Loader/> */}
    <TextScale/>
    </>


    // <div className="bg-gray-900 flex justify-center items-center h-screen">
      // <motion.div className="h-24 w-24 bg-yellow-400 rounded-full"
      // animate = {{skew : 50}}
      // Outer braces { } - Tell JSX "this is JavaScript code, not a string"
      // Inner braces { } - Create a JavaScript object literal

      // initial = {{x : 0}}
      // animate = {{ x : 200}}
      // transition={{
      //   delay : 1,
      //   ease : 'easeIn',
      // }}


      // animate = {{
      //   scale : [1,2,3,4,3,2,1],
      //   borderRadius : ["20%","20%","50%","50%","20%"]
      // }}
      // transition={{
      //   duration : 2,
      //   ease : easeOut
      // }}

      // ></motion.div>
    // </div>

  )
}


export default App






    {/* <div className="h-screen w-full bg-neutral-900 flex items-center justify-center">
      <motion.button 
      // initial = {{
      //   rotate : 0
      // }}
      // animate = {{
      //   // rotate : [0,50,0,40,0,30,0,20,0,10,0]
      //   rotate : [0,10,0]
      // }}
      // transition={{
      //   duration : 1,
      //   ease : "easeInOut"
      // }}
      whileHover={{
        rotate : [0,10,0,10,0]
      }}
      className="group relative text-neutral-500 px-12 rounded-lg py-4 bg-black
         shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,
         0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
          Subcribe
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent
      via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span></motion.button>
      
    </div> */}

    {/* initial = " " this prop define how initial component render
    ..animate ="" this prop animate the component lets you set the different css properties
    exit = "" this prop used to define the component is removed from dom */}

     
    {/* </>
  )
}

export default App */}
