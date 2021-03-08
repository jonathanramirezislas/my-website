import React,{useState, useEffect} from 'react';
import { Parallax } from 'react-parallax';

const image1 = 'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615162670/my-website/Dise%C3%B1o_sin_t%C3%ADtulo_4_n5xqgi.svg';

export const About = () => {

	

	const [Color, setColor]= useState(1)
	const [ColorBG, setColorBG]= useState('bg-gradient-to-r from-pink-600 to-purple-600')

	 
	
	useEffect(()=>{
		switch(Color){
			case 1:
				setColorBG('bg-gradient-to-r from-pink-600 to-purple-600')
				break;
			case 2:
				setColorBG('bg-gradient-to-r from-yellow-600 to-purple-600')
			break;
	
			case 3:
				setColorBG('bg-gradient-to-r from-green-600 to-purple-600')
			break;
		}

	},[Color])

	return (
		<>
			<Parallax
				bgImage={image1}
				className={'z-10 py-3 px-7 sm:py-1 md:py-6 md:px-14 h-2/5 sm:h-2/4 md:h-full lg:h-3/4 md:pt-2 '+ColorBG } 
				strength={150}
			>
				<div className="flex-1 w-3/4 sm:w-2/4 md:max-w-2xl md:mx-auto md:my-10 lg:h-3/4 ">
					<div className="md:w-full h-11 rounded-t-lg bg-gray-900  flex justify-start items-center space-x-1.5 px-3">
						<span onClick={()=>setColor(1)} className="w-3 h-3 bg-red-400 rounded-full cursor-pointer "></span>
						<span onClick={()=>setColor(2)} className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer "></span>
						<span onClick={()=>setColor(3)} className="w-3 h-3 bg-green-400 rounded-full cursor-pointer "></span>
            <h1 className="text-indigo-400"> ABOUT ME</h1>
					</div>
					<div className="w-full h-40 text-justify bg-gray-700 border-t-0 md:h-96 ">
						<p className="p-1 text-xs text-indigo-100 sm:text-sm md:p-4 md:text-lg lg:text-3xl">
							I am engineer of IT. I have experience in the development of mobile application, websites. 
						</p>
						<p className="p-1 text-xs text-indigo-100 sm:text-sm md:p-4 md:text-lg lg:text-3xl">
							I would like to work at system area to develop my professional skills in wich I could grow
							professionally 
						</p>
						<p className="text-xs text-indigo-100 sm:text-sm md:p-4 md:text-lg lg:text-3xl">
							My favorites tools to develop are ReactJS, React Native and Java
						</p>
						<p className="p-0 text-xs text-indigo-100 sm:text-sm md:p-4 md:text-lg lg:text-3xl">
							My dream is to become a Lead Full-Stack Developer
						</p>
					</div>
				</div>
			</Parallax>
		</>
	);
};
