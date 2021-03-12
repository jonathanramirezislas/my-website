import React ,{useState} from 'react'
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
import { TorusGeometry } from 'three';

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
  const [stack, setStack] = useState(false)
  const [technologies, setTechnologies] = useState(false)
  const [about, setAbout] = useState(false)
  const [resume, setResume] = useState(false)
  const [projects, setProjects] = useState(false)

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
            <Banner stack={stack} setStack={setStack} />
            {stack && <Stack setTechnologies={setTechnologies}/>}
            {technologies && <Thecnologies setAbout={setAbout}/>}
            {about && <About setResume={setResume}/>}
            {resume && <Resume setProjects={setProjects}/>}
            {projects && <Projects />}
            <div className="h-36">TODO...</div>

{/*              
            <About/>
            <Resume/>
            <Projects/>
            <div className="h-36">TODO...</div>
           */}
           
            </motion.div>
        </div>

    )
}
