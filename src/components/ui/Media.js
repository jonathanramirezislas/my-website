import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { rotate: -90 },
  visible: { 
    rotate: 0,
    transition: { duration : 2 }
  },
}

const pathVariants = {
  hidden: {
    opacity: 1,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 4,
      ease: "easeInOut",
    }
  }
};


const Media = () => {
  return (
      <>
        <motion.svg name="github" className="w-8 h-8 ml-2 overflow-visible text-pink-600 cursor-pointer stroke-current md:ml-6 hover:text-yellow-300"   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
         onClick={()=>console.log('TODO:go to site')}
         variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
            variants={pathVariants}
          />
        </motion.svg>
        <motion.svg name="facebook" className="w-8 h-8 ml-2 overflow-visible text-pink-600 cursor-pointer stroke-current hover:text-yellow-300"   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
         onClick={()=>console.log('TODO:go to site')}
         variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
            variants={pathVariants}
          />
        </motion.svg>

        <motion.svg className="w-8 h-8 ml-2 overflow-visible text-pink-600 cursor-pointer stroke-current hover:text-yellow-300"   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
         onClick={()=>console.log('TODO:go to site')}
         variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            variants={pathVariants}
          />
        </motion.svg>

      </>
  )
}

export default Media;