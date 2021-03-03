import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './Project';


export const Projects = () => {
      return (
        <motion.div className="content-center w-full p-2 bg-black border-t-8 border-red-500 border-double md:pl-12">
          <h1>Projects</h1>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </motion.div>

      );
}
