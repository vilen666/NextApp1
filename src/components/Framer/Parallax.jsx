import React, { useEffect } from 'react'
import stars from "./imgs/1.png"
import {motion,scroll,animate} from "framer-motion"
const Parallax = () => {
    useEffect(() => {
        scroll(
            animate(".para", { transform: ["translateX: '50%'"] }) ,
            { source: document.getElementById("About") } 
          )
    
    });
  return (
    <motion.div className='para w-full h-screen bg-black overflow-hidden' initial={{x:0}} >
        <div className={` bg-black h-screen w-[110%] `} style={{ backgroundImage: `url(${stars})` }} ></div>  
    </motion.div>
  )
}

export default Parallax
