import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AnimatedText = ({ text = "ok", once = false, className="text-left text-nowrap text-4xl font-bold",
variants={
  initial: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0
    }
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      }
  }
}}) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.5, once: once });


  useEffect(() => {
    const show=()=>
    {
      controls.start("final") ;
      if(once){
       let i=setInterval(async ()=>{
        await controls.start("initial");
        controls.start("final");
       },5000
      ) 
      }
    }
    if (isInView) {
      show();
    } else {
      controls.start("initial");
    }

  },[isInView]);
  return (
    <>
      <span className="sr-only">{textArray}</span>
      {textArray.map((lines, index) => (
        <motion.div className={`block line ${className}`} key={index} ref={ref} animate={controls} variants={variants} >
          {lines.split(" ").map((words, wordIndex) => (
            <span className=' inline-block word' key={wordIndex}>
              {words.split("").map((chars, charIndex) => (
                <motion.span className=' inline-block char' key={charIndex} variants={variants}>
                  {chars}
                </motion.span>
              ))}
              <span className='inline-block'>&nbsp;</span>
            </span>
          ))}
        </motion.div>
      ))}
    </>
  );
};



export default AnimatedText;
