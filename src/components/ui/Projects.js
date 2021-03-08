import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './Project';
import Card from './Card';

const data=[
	{
		img:'fgfdg'
	},
	{

	},
	{

	},
	{

	},
	{

	},
	{
	},	
	
]

export const Projects = () => {
	return (
		<>
			<motion.div className="grid w-full grid-cols-3 grid-rows-3 gap-4 px-4 py-4 bg-black border-t-8 border-red-500 border-double">
				
       			<Project class="w-full col-span-3    bg-white rounded " />			
				<Project class="w-full col-span-3     bg-white rounded " />
				<Project class="w-full col-span-3    bg-white rounded l" />
				

				

			</motion.div>
		</>
	);
};

