import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from '../../customehooks/UseWindosSize';

export const Project = () => {
	const {width, height} = useWindowSize();
	const x= width>1000 ? 350 : width>800 ? 200 : 60;
	
	const controls = useAnimation();
	const [ref, inView] = useInView();

	console.log('x:',x ,'width',width);

	const BoxVariants = {
		visible: { opacity: 1, x: 0, transition: { duration: 1 } },
		hidden: { opacity: 0, x: x },
	};



	useEffect(() => {
		if (inView ) {
			controls.start('visible');
		}
	}, [controls, inView]);

	 if(width){
	return (
		<motion.div
			ref={ref}
			className="w-10/12 h-40 mt-24 bg-red-600 rounded"
			animate={controls}
			initial="hidden"
			variants={BoxVariants}
		>
			<div>
				w-{width}px / h-{height}px
			</div>
		</motion.div>
	)}else{
		return(
			<div></div>
		)
	}
	
};
