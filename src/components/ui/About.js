import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

const image1 =
	'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615162670/my-website/Dise%C3%B1o_sin_t%C3%ADtulo_4_n5xqgi.svg';

export const About = () => {
	const [Color, setColor] = useState(1);
	const [ColorBG, setColorBG] = useState('bg-gradient-to-r from-pink-600 to-purple-600');

	useEffect(() => {
		switch (Color) {
			case 1:
				setColorBG('bg-gradient-to-r from-pink-600 to-purple-600');
				break;
			case 2:
				setColorBG('bg-gradient-to-r from-yellow-600 to-purple-600');
				break;

			case 3:
				setColorBG('bg-gradient-to-r from-green-600 to-purple-600');
				break;
		}
	}, [Color]);

	return (
		<div className="h-full" id="about">
			<Parallax
				bgImage={image1}
				bgImageSize={'cover'}
				className={
					'px-5 py-5 sm:px-16 md:px-48 flex flex-col flex-wrap justify-center content-center items-center h-full ' +
					ColorBG
				}
				strength={150}
			>
				
					<div className="h-5/6 lg:h-3/4" >
					<motion.div
					animate={{
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 270, 270, 0],
						borderRadius: ['20%', '20%', '50%', '50%', '20%'],
					}}
					transition={{ duration: 1.5 }}
				>
						<div className="w-full h- rounded-t-lg bg-gray-900  flex justify-start items-center space-x-1.5 p-0 md:px-3">
							<span
								onClick={() => setColor(1)}
								className="w-3 h-3 md:h-6 lg:h-9 ml-2 bg-red-400 rounded-full cursor-pointer "
							></span>
							<span
								onClick={() => setColor(2)}
								className="w-3 h-3 md:h-6 lg:h-9 bg-yellow-400 rounded-full cursor-pointer "
							></span>
							<span
								onClick={() => setColor(3)}
								className="w-3 h-3 md:h-6 lg:h-9 bg-green-400 rounded-full cursor-pointer "
							></span>
							<h1 className="text-indigo-400"> ABOUT ME</h1>
						</div>
						<div className="h-full px-4 py-4 text-justify text-indigo-100 bg-gray-700 border-t-0 md:h-96 lg:h-auto">
							<p className="p-1 text-sm md:p-2 lg:p-8 md:text-3xl lg:text-4xl">
								👋 Hi! I am engineer of IT. I have experience in the development of mobile application
								and websites.
							</p>
							<p className="p-1 text-sm md:p-2 lg:p-8 md:text-3xl lg:text-4xl">
								👨‍💻I would like to work in your company to develop my professional skills in wich I could
								grow professionally.
							</p>
							<p className="p-1 text-sm md:p-2 lg:p-8 md:text-3xl lg:text-4xl">
								My favorites tools to develop are ⚛️ ReactJS, React Native and ☕Java.
							</p>
							<p className="p-1 text-sm md:p-2 lg:p-8 md:text-3xl lg:text-4xl">
								My dream is to become a Lead Full-Stack Developer.🚀
							</p>
						</div>
						</motion.div>
					</div>
				
			</Parallax>
		</div>
	);
};
