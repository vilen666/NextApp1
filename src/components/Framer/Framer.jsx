 import React from 'react'
 import "./Framer.css"
import Home from './Home'
import Parallax from './Parallax'
 const Framer = () => {
   return (
     <div>
        <section id='HomePage'>
            <Home/>
        </section>
        <section id='About'>
        <Parallax/>
        </section>
        <section id='Parallax'>
        </section>
     </div>
   )
 }
 
 export default Framer
 