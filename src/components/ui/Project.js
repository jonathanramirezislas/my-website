import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from '../../customhooks/UseWindosSize';

export const Project = ( props) => {
	const {width, height} = useWindowSize();
	const y= width>1000 ? 100 : width>800 ? 50 : 10;
	
	const controls = useAnimation();
	const [ref, inView] = useInView();

	//console.log('x:',x ,'width',width);

	const BoxVariants = {
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
		hidden: { opacity: 0, y: y },
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
			animate={controls}
			initial="hidden"
			className={props.class+''}
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
