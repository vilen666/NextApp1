import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const imgs = ["https://plus.unsplash.com/premium_photo-1709713745213-73c582d9284b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1712839398257-8f7ee9127998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1712781797301-ec9ee12b52b4?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
const AnimatedText = ({ text = "ok", once = false, className = "text-left text-nowrap text-4xl font-bold",
    variants = {
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
    } }) => {
    // documentation: pass classname to adjust text as a getDefaultNormalizer, takes once to animate on scroll once, pass custom variants for custom aniamaions
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { threshold: 0.5, once: once });


    useEffect(() => {
        const show = () => {
            controls.start("final");
            if (once) {
                setInterval(async () => {
                    await controls.start("initial");
                    controls.start("final");
                }, 5000
                )
            }
        }
        if (isInView) {
            show();
        } else {
            controls.start("initial");
        }

    }, [isInView]);
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
const ImageSlider = ({ images = imgs, className = "h-[200px] w-[400px] bg-slate-300", dots = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className={`relative flex overflow-hidden ${className}`}>
            {images.map((image, index) => (
                <motion.div key={index} className="w-full h-full flex-shrink-0 flex-grow-0" animate={{ x: `-${100 * currentIndex}%` }} transition={{ duration: 0.3, ease: 'linear' }}>
                    <img src={image} alt={"image.alt"} className="w-full h-auto bg-contain" />
                </motion.div>
            ))}
            <button className="prev absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white p-2 rounded-full" onClick={prevSlide}>&#10094;</button>
            <button className="next absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white p-2 rounded-full" onClick={nextSlide}>&#10095;</button>
            {dots &&
                <div className=' absolute bottom-2 left-1/2 p-2 bg-slate-500 rounded flex items-center justify-between gap-3 transform -translate-x-1/2'>
                    {images.map((_, key) => {
                        return (
                            <div className={` w-2 h-2 rounded-full ${currentIndex === key ? "bg-black" : "bg-white"}`}></div>
                        )
                    })}
                </div>
            }
        </div>
    );
};
const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
    
    
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    return (
        <motion.div className=' absolute w-4 h-4 rounded-full bg-black top-0 left-0 pointer-events-none ' transition={{ duration: 0.8, type: "spring" }} animate={{ x: mousePosition.x, y: mousePosition.y }}>
        </motion.div>
    )
}
export { imgs, AnimatedText, ImageSlider, MouseFollower };

