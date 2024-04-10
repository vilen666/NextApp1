import React, { useState } from 'react';
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className='h-screen w-full'>
      <NavBar />
      <Main/>
    </div>
  )
}

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0,
        duration: 0.5,
        ease: "easeInOut",

      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0,
        duration: 0.5,
      }
    }
  };


  return (
    <div id="navBar" className='flex items-center justify-between py-5 px-2 mx-10'>
      <motion.div animate={open ? "open" : "closed"} className='sidebar z-[999] flex flex-col items-center text-black justify-center relative'>
        <motion.div variants={variants} className='backWhite bottom-0 w-[400px] bg-white fixed top-0 left-0 flex flex-col items-center justify-center'>
          <Links variants={variants} />
        </motion.div>
        <button onClick={() => setOpen(prev => !prev)} className=' w-14 h-14 rounded-full fixed top-[25px] border-none left-[25px]'>
          <motion.svg
            className="icon"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            variants={{open:{transition:{duration:1}}}}
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              stroke-linecap="round"
              variants={{ closed: { d: "M15 15 L35 15" }, open: { d: "M15 15 L35 35" } }}
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              stroke-linecap="round"
              variants={{ closed: {opacity:1, d: "M15 25 L35 25" }, open: { opacity: 0, d: "" } }}
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              stroke-linecap="round"
              variants={{ closed: { d: "M15 35 L35 35" }, open: { d: "M35 15 L15 35" } }}
              stroke="black"
              strokeWidth="3"
            />
          </motion.svg>


        </button>
      </motion.div>
      <motion.div className='flex justify-between w-[80%]'>
        <div className=' uppercase text-2xl opacity-60 ml-[250px]'>logo</div>
        <div className='uppercase ml-[auto] mr-[20px]'>link container</div>
      </motion.div>
    </div>
  )
}

const Links = ({ variants }) => {
  const items = ["HomePage", "About", "Parallax"]
  return (
    <motion.div variants={{ open: { transition: { staggerChildren: 0.2} } }} className='flex flex-col items-center justify-between'>
      {items.map((item, key) => (
        <motion.a
          initial={{ fontSize: "30px" }}
          whileHover={{ fontSize: "40px" }}
          transition={{ type: "spring" ,damping:8,stiffness:150}}
          variants={{ open: { y: 0, opacity: 1 }, closed: { y: "50px", opacity: 0 } }}
          href={`#${item}`}
          key={key}
          className=' text-black'
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}
const Main=()=>
{
  return(
    <div className=' absolute overflow-hidden w-full  mb-3 bottom-4 h-fit py-5 bg-slate-300'>
    <motion.div className="  text-slate-800 text-9xl w-fit h-fit  text-nowrap" initial={{x:0}} animate={{x:"-51%"}}
    transition={{delay:0.5,duration:20,repeat:Infinity,repeatDelay:1,ease:"linear"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </motion.div>
    </div>
  )
}

export default Home;
