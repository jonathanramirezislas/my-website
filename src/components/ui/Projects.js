import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './Project';


export const Projects = () => {
      return (
        <motion.div className="w-11/12 p-2">
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </motion.div>

      );
}
