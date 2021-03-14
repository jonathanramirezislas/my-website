import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './Project';

const data = [
	{
		img: 'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615613319/my-website/proyects/Tableau.svg',
		info: 'Through this project it allowed me to know the importance of',
		main_img:
			'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615614117/my-website/proyects/Tableau_vctngi.png',
	},
	{
		img: 'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615615896/my-website/proyects/hibernadero.svg',
		info: 'This proyect was developt with React Native , also I worked with Raspberry Pi, Arduino',
		main_img:
			'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615615830/my-website/proyects/mainhibernadero.png',
	},
	{
		img: 'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615616462/my-website/proyects/erp.svg',
		info: 'This proyect was developt with React Native , also I worked with Raspberry Pi, Arduino',
		main_img: 'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615616391/my-website/proyects/erp_hl2ayu.png',
	},
];

export const Projects = () => {
	return (
		<>
			<motion.div className="grid w-full grid-cols-2 grid-rows-3 gap-4 px-4 py-4 bg-black border-t-8 border-red-500 border-double">
				{data.map((proyect) => {
					return (
						<>
								<Project
									class="flex flex-col w-full h-auto bg-white rounded border-4 border-purple-700 "
									img={proyect.img}
									info={proyect.info}
								/>
								<Project
									class="w-full bg-white rounded h-auto border-2 border-purple-700"
									img={proyect.main_img}
								/>
						</>
					);
				})}
			</motion.div>
		</>
	);
};
