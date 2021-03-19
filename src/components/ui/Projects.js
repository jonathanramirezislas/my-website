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
		<div id="portafolio">
				<div className="relative flex items-start justify-start w-full h-16 bg-black md:justify-center ">
					<div className="ml-4 md:ml-0">
						<span className="absolute z-20 mt-2 text-3xl font-bold text-white">PROJECTS</span>
						<div className="bg-black bg-opacity-50">
							<h2 className="absolute z-10 block -ml-4 text-6xl font-bold tracking-wide bg-opacity-50 bg-no-repeat bg-cover text-align letter-img-bg text-fill-transparent bg-clip-text">
								PROJECTS
							</h2>
						</div>
					</div>
				</div>
			<motion.div className="grid w-full grid-cols-1 grid-rows-3 gap-2 px-4 py-4 bg-black md:grid-cols-2 md:grid-rows-2 md:gap-4 ">
				{data.map((proyect,index) => {
					return (
						<>
								<Project
									key={index}
									class="flex flex-col w-full h-auto bg-black text-white rounded border-4 border-purple-700 "
									img={proyect.main_img}
									info={proyect.info}
								/>
								
						</>
					);
				})}
			</motion.div>
		</div>
	);
};
