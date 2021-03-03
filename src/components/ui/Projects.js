import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './Project';

export const Projects = () => {
	return (
		<>
			<motion.div className="grid w-full grid-cols-3 grid-rows-3 gap-4 px-4 py-4 bg-black border-t-8 border-red-500 border-double">
				
        <Project class="w-full h-40 mt-24 bg-white rounded md:w-full" />
				<Project class="w-full h-40  col-span-2 mt-24 bg-white rounded md:w-full" />

				<Project class="w-full h-40  col-span-2  mt-24 bg-white rounded md:w-full" />
				<Project class="w-full h-40  mt-24 bg-white rounded md:w-full" />
        
				<Project class="w-full h-40 mt-24 bg-white rounded md:w-full" />
				<Project class="w-full h-40  mt-24 bg-white rounded md:w-full" />
        <Project class="w-full h-40  mt-24 bg-white rounded md:w-full" />

			</motion.div>
		</>
	);
};

