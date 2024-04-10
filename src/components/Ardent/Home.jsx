import React, { useState } from 'react'
import { motion } from "framer-motion"
const Home = () => {
  const navItems = ["Home", "About", "Courses", "research", "News", "Contact", <i className="ri-search-line cursor-pointer bg-dark lg:p-2 px-11 py-2 bg-black rounded text-white"></i>]
  const imgs = ["https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  const sliderItems = ["online classes", "online classes", "online classes", "online", "online", "online"]
  const navVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      height: 0,
      opacity: 0
    }
  }
  return (
    <>
      <div className="main h-[70vh] md:h-[80vh] w-full bg-slate-100">
        <Navbar navItems={navItems} navVariants={navVariants}></Navbar>
        <Slider imgs={imgs} sliderItems={sliderItems} />
      </div>
      <div className="second h-screen w-full bg-slate-100 md:h-[80vh]">
        <Second />
      </div>
    </>
  )
}
const Navbar = ({ navItems, navVariants }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <motion.nav className='w-full bg-slate-100 h-fit flex flex-col gap-2 tracking-tighter fixed top-0 z-[99] lg:flex-row lg:justify-between' animate={navOpen ? "open" : "closed"}>
        <div className="navLogo cursor-pointer flex text-4xl ml-3 p-2 gap-3 text-nowrap"><h1  className=' text-green-500'>Welcome To</h1><h1>Education</h1></div>
        <div className='absolute block right-5 top-3 text-4xl cursor-pointer lg:hidden' onClick={() => {
          setNavOpen(!navOpen)
          console.log(navOpen)
        }}><i className="ri-menu-line"></i></div>
        <div className='navLargeItems uppercase hidden lg:flex lg:items-center lg:gap-3 lg:justify-between  lg:mr-2 lg:flex-shrink'>
          {navItems.map((item, key) => {
            return (
              <div key={key} className='w-fit text-2xl cursor-pointer text-center'>{item}</div>
            )
          })}
        </div>
        <motion.div className='navItems font-mono uppercase flex flex-col gap-2 justify-evenly h-fit my-2 mx-4 border-y-2 p-2 border-black rounded overflow-hidden lg:hidden' variants={navVariants}>
          {navItems.map((item, key) => {
            return (
              <motion.div key={key} className='w-fit text-2xl cursor-pointer text-center' variants={{ closed: { y: "-100%", opacity: 0 }, open: { y: "0%", opacity: 1 } }}
                whileHover={{ scaleX: 1.1, transition: { type: "spring" } }}>{item}</motion.div>
            )
          })}
        </motion.div>
      </motion.nav>
    </>
  )
}
const Slider = ({ imgs, sliderItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % imgs.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <div className="slider-container mx-auto mt-[10vh] bg-orange-300 w-full h-[40vh] md:h-[60vh] md:w-[90%] lg:w-[80%] lg:h-[70vh] lg:mt-[20vh] relative overflow-hidden">
        <motion.div animate={{ x: `-${100 * currentIndex}%` }} transition={{ duration: 0.3, ease: 'linear' }} className="slider h-full w-full bg-slate-300 flex absolute top-0 left-0">
          {imgs.map((image, index) => (
            <div
              key={index}
              className={` h-full w-full flex-shrink-0`}
              style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            ></div>
          ))}
        </motion.div>
        <button className="prev z-2 absolute top-1/2 text-6xl translate-y-[-50%]" onClick={goToPrevSlide}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="next z-2 absolute top-1/2 right-0 text-6xl translate-y-[-50%]" onClick={goToNextSlide}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
        {/* for large to medium devices */}
        <div className="slider-footer hidden md:block bg-yellow-400 w-full h-[20%] absolute bottom-0">
          <div className=' bg-slate-100 w-[70%] h-[90%] rounded flex justify-center px-8 items-center mx-auto translate-y-[-30%] overflow-hidden'>
            {
              sliderItems.map((items, key) => {
                return (<div key={key} className='flex items-center flex-col w-[16%] justify-center h-full rounded select-none relative cursor-pointer'><i className="ri-ancient-gate-line"></i>
                  <div className='text-wrap text-center'>{items}</div>
                  {(key >= 3) && (<div className={`${key !== 4 ? "bg-blue-800" : "bg-yellow-500"} w-[100%] h-[130%] skew-x-[-15deg] absolute z-[-1]`}></div>)}
                </div>)
              })
            }
          </div>
        </div>
      </div>
      {/* for small devices */}
      <div className="slider-footer w-full h-fit md:w-[90%] md:h-fit py-5 md:mx-auto bg-yellow-500 overflow-hidden md:hidden">
        <div className=' bg-slate-100 w-[90%] h-[20vh] rounded mx-auto flex flex-col overflow-y-scroll flex-shrink-0  divide-y-2 border-black'>
          {
            sliderItems.map((items, key) => {
              return (<motion.div whileHover={{ backgroundColor: "#becbd6", scaleY: 1.2 }} key={key} className='flex gap-3 flex-nowrap justify-center w-full h-[400px] p-2 rounded select-none'><i className="ri-ancient-gate-line"></i>
                <div className='text-wrap text-center'>{items}</div>
              </motion.div>)
            })
          }
        </div>
      </div>
    </>
  );
}



const Second = () => {
  const blockItems = [1, 2, 3, 4];
  // const carouselRef = useRef(null);
  // const { scrollYProgress } = useScroll(
  //   {
  //     container:carouselRef
  //   }
  // );
  // const scale = useTransform(scrollYProgress, [0, 1], [5,-70]);
  // const [scale1, setscale1] = useState(0);
  // useMotionValueEvent(scale, "change", () => {
  // setscale1(scale.current)
  // })
  return (
    <div className='h-full w-full flex flex-col items-center md:items-start md:flex-row'>
      <div className="iconBlocks h-1/2 w-3/4 bg-slate-200 rounded relative flex items-center overflow-y-auto md:overflow-visible md:mx-3 md:static md:w-1/2 md:h-full md:grid md:grid-cols-2 md:items-center md:justify-items-center lg:px-20">
        {/* For only small devices */}
        <motion.div className='w-fit h-fit flex items-center gap-5 ml-3 icons md:hidden' >
          {blockItems.map((item, key) => (
            <motion.div key={key} onClick={() => { console.log(55) }} className=' w-[200px] bg-white h-[300px] rounded relative' whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
              <i className="ri-award-fill text-[30vw] text-green-200 top-[35%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 absolute"></i>
              <i className="ri-graduation-cap-fill text-4xl opacity-10 absolute top-[21%] left-[50%] transform -translate-x-1/2"></i>
              <div className='absolute bottom-5'>
                <h2 className='font-bold text-xs text-center'>Skilled Instructors</h2>
                <p className='font-mono text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* for medium and above */}
        {blockItems.map((item, key) => (
          <motion.div key={key} style={{translateY:`${(key%2!==0)?"-6%":"0px"}`}} className=' hidden select-none md:w-[175px] md:block md:h-[250px] md:bg-white md:rounded md:relative ' whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
            <i className="ri-award-fill lg:text-[180px] md:text-[20vw] text-green-200 top-[35%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 absolute"></i>
            <i className="ri-graduation-cap-fill text-4xl opacity-10 absolute top-[18%] left-[50%] transform -translate-x-1/2"></i>
            <div className='absolute bottom-5'>
              <h2 className='font-bold text-xs text-center'>Skilled Instructors</h2>
              <p className='font-mono text-xs text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};




export default Home
