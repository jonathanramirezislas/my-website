import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BoxVariants = {
	visible: { opacity: 1, x: 0, transition: { duration: 1 } },
	hidden: { opacity: 0, x: 60 }
};

export const Project = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return <motion.div  
    ref={ref} 
	className="w-10/12 h-40 mt-24 bg-red-600 rounded"
    animate={controls}
    initial="hidden" 
    variants={BoxVariants}><div>sss</div></motion.div>
};
