import React,{useEffect} from 'react'
import Navbar from './ui/Nabvar'
import { Banner } from './ui/Banner';
import Stack from './ui/Stack';
import { About } from './ui/About';
import { Projects } from './ui/Projects';
import Media from './ui/Media';
import { motion } from 'framer-motion';
import {Resume} from './ui/Resume';
import { Workplace } from './ui/Workplace';
import { Thecnologies } from './ui/Thecnologies';


const containerVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: { 
      opacity: 1, 
      transition: { delay: 1.5, duration: 1.5 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  };

export const Home = () => {
   
    return (
      
        <div className="w-full h-screen bg-black">
            <Navbar/>
            
            <motion.div className="container home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full h-screen bg-black"
      >
            <Banner/>
            <Stack/>
            <Thecnologies/>
            <About/>
            <Resume/>
            <Projects/>
            <div className="h-36">TODO...</div>
          
           
            </motion.div>
        </div>

    )
}
