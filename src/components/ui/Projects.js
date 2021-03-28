import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './Project';

const data = [
	{
		info: 'Through this project it allowed me to know the importance of databases learning store procedures, indixing, trigers, JOINS, the project was developed with Tableau.',
		main_img:
			'http://jonathanramirezislas.com.mx/shared/dash.gif',
		tags:[
			'SQL',
			'MySQL',			
		]
	},
	{
		info: 'This project was developed for a greenhouse, terrarium to keep track of the weather factors within it, the project was developed with React Native, I also worked with Raspberry Pi, Arduino. ',
		main_img:'http://jonathanramirezislas.com.mx/shared/hidroterra.png',
		tags:[
			'REACT NATIVE',
			'RASPBERRY',
			'MOBILE',			
		]
		
	},
	{
		info: 'This project is for an e-commerce which is focused on seeing the behavior of purchases, analysis for decision making and sales monitoring.',
		main_img: 'http://jonathanramirezislas.com.mx/shared/erp.gif',
		tags:[
			'JAVASCRIPT',
			'PHP',
			'ERP',			
		]
	},
	{
		info: 'This project is to monitor the meals inside a restaurant in real time, the project was built with ReactJS React Native and firebase.',
		main_img: 'http://jonathanramirezislas.com.mx/shared/sagradocorazon_tacos.gif',
		tags:[
			'REACT NATIVE',
			'REACTJS',
		]
	},

	
];

export const Projects = () => {
	return (
		<div   id="projects" className="pb-15 bg-black">
				<div className="relative flex items-start justify-start w-full pb-10 h-28 md:justify-center  ">
				<div className="ml-4 md:ml-0">
						<span className="absolute z-20 mt-2 text-3xl font-bold text-white">PROJECTS</span>
						<div className="bg-black bg-opacity-50">
							<h2 className="absolute z-10 block -ml-4 text-6xl font-bold tracking-wide bg-opacity-50 bg-no-repeat bg-cover text-align letter-img-bg text-fill-transparent bg-clip-text">
								PROJECTS
							</h2>
						</div>
					</div>
				</div>
			<div className="flex flex-row justify-center bg-black"> 
			<motion.div className="  md:grid-cols-2 md:grid-rows-2 md:gap-4  w-11/12 md:w-3/4 ">
				{data.map((proyect,index) => {
					return (
						<>
								<Project
									key={index}
									img={proyect.main_img}
									info={proyect.info}
									tags={proyect.tags}
								/>
								
						</>
					);
				})}
			</motion.div>
				</div>	
		</div>
	);
};


