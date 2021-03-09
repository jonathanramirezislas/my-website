import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
const thecnologies='https://res.cloudinary.com/djuqxjkh3/image/upload/v1615256866/my-website/thecnologies/'
export const Thecnologies = () => {
	return (
		<>
			<motion.div className="grid w-full grid-cols-3 grid-rows-4 gap-6 px-4 py-4 bg-black border-t-8 border-red-500 border-double">
    
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'HIBERNATE.png'} col={'gray'} textcolor={'white'} text={'HIBERNATE'} />
				</div>
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'spring_boot.png'} col={'green'} textcolor={'white'} text={'SPRING BOOT'} />
				</div>
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'maven.png'} col={'pink'} textcolor={'black'} text={'MAVEN'} />
				</div>
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'express.png'} col={'white'} textcolor={'white'} text={'Express'} />
				</div>
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'sass.png'} col={'pink'} textcolor={'white'} text={'SASS'} />
				</div>
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'tailwindcss.png'} col={'#C010EC'} textcolor={'black'} text={'TAILWIND'} />
				</div>
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'webpack.png'} col={'blue'} textcolor={'black'} text={'WEBPACK'} />
				</div>
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'redux.png'} col={'purple'} textcolor={'white'} text={'REDUX'} />
				</div>
				<div className="flex flex-col ">
					<Card img={`${thecnologies}`+'mongo.png'} col={'green'} textcolor={'white'} text={'MONGO'} />
				</div>
                <div className="flex flex-col ">
					<Card img={`${thecnologies}`+'sqlserver.png'} col={'red'} textcolor={'black'} text={'SQLserver'} />
				</div>


			</motion.div>
		</>
	);
};
