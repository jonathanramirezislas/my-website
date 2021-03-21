import React, { useState } from 'react';
import Navbar from './ui/Nabvar';
import { Banner } from './ui/Banner';
import Stack from './ui/Stack';
import { About } from './ui/About';
import { Projects } from './ui/Projects';
import { motion } from 'framer-motion';
import { Resume } from './ui/Resume';
import { Thecnologies } from './ui/Thecnologies';
import Footer from './ui/Footer';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 1.5, duration: 1.5 },
	},
	exit: {
		x: '-100vh',
		transition: { ease: 'easeInOut' },
	},
};

 const Home = () => {

	return (
		<div className="w-full h-screen bg-black">
			<Navbar />

			<motion.div
				className="container home"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				className="w-full bg-black h-2/4 md:h-screen"
			>
				<Banner />
			</motion.div>
			<motion.div
				className="container home"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				className="w-full bg-black h-2/4 md:h-screen"
			>
				<About/>
			</motion.div>
			<Resume/>
			<Stack />
			<Thecnologies />
			<Projects /> 
			<Footer/>
		</div>
	);
};
 export default Home;