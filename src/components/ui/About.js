import React from 'react';
import { Parallax } from 'react-parallax';

const image1 = 'http://jonathanramirezislas.com.mx/assets/bannerjona.svg';

export const About = () => {
	return (
		<>
			<Parallax
				bgImage={image1}
				className="z-10 py-3 px-7 h-2/4 sm:h-2/4 md:h-full bg-gradient-to-r from-green-400 to-blue-500"
				strength={250}
			>
				<div className="flex-1 md:max-w-2xl md:mx-auto md:my-10">
					<div className="md:w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
						<span className="w-3 h-3 bg-red-400 rounded-full"></span>
						<span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
						<span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <h1 className="text-indigo-400"> ABOUT ME</h1>
					</div>
					<div className="w-full h-40 text-justify bg-gray-700 border-t-0 md:h-96">
						<p className="p-1 text-xs text-indigo-100 sm:text-sm md:p-4 md:text-lg">
							I am engineer of IT. I have experience in the development of mobile application, websites.
						</p>
						<p className="p-1 text-xs text-indigo-100 sm:text-sm md:p-4 md:text-lg">
							I would like to work at system area to develop my professional skills in wich I could grow
							professionally
						</p>
						<p className="p-1 text-xs text-indigo-100 sm:text-sm md:p-4 md:text-lg">
							My dream is to become a Lead Full-Stack Developer
						</p>
					</div>
				</div>
			</Parallax>
		</>
	);
};
