import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from '../../customhooks/UseWindosSize';
import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import * as THREE from 'three';
import Card from './Card';

export const Project = (props) => {
	const { width, height } = useWindowSize();
	const y = width > 1000 ? 100 : width > 800 ? 50 : 10;

	const controls = useAnimation();
	const [ref, inView] = useInView();

	const BoxVariants = {
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
		hidden: { opacity: 0, y: y },
	};

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	if (width) {
		return (
			<motion.div
				ref={ref}
				animate={controls}
				initial="hidden"
				className={props.class + ''}
				variants={BoxVariants}
			>
				<img src={props.img} alt="new" />
				<h4>{props.info}</h4>
			</motion.div>
		);
	} else {
		return <div></div>;
	}
};
