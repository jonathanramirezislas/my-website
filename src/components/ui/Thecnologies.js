import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { useInView } from 'react-intersection-observer';

const thecnologies = 'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615256866/my-website/thecnologies/';

export const Thecnologies = ({ setAbout }) => {
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			setAbout(true);
		}
	}, [inView]);

	const [row2, setRow2] = useState(false);


	const [refrow1, inViewrefrow1] = useInView();


	useEffect(() => {
		if (inViewrefrow1) {
			setRow2(true);
		}
	}, [inViewrefrow1]);

	return (
		<>
			<motion.div className="grid w-full grid-cols-3 grid-rows-4 gap-6 px-4 py-4 bg-black border-t-8 border-red-500 border-double">
				<div className="flex flex-col ">
					<Card
						img={`${thecnologies}` + 'HIBERNATE.png'}
						col={'gray'}
						textcolor={'white'}
						text={'HIBERNATE'}
					/>
				</div>
				<div className="flex flex-col ">
					<Card
						img={`${thecnologies}` + 'spring_boot.png'}
						col={'green'}
						textcolor={'white'}
						text={'SPRING BOOT'}
					/>
				</div>
				<div className="flex flex-col ">
					<Card img={`${thecnologies}` + 'maven.png'} col={'pink'} textcolor={'black'} text={'MAVEN'} />
				</div>

				<div className="flex flex-col ">
					<Card img={`${thecnologies}` + 'express.png'} col={'white'} textcolor={'black'} text={'Express'} />
				</div>
				<div className="flex flex-col ">
					<Card img={`${thecnologies}` + 'sass.png'} col={'pink'} textcolor={'white'} text={'SASS'} />
				</div>
				<div className="flex flex-col " ref={refrow1}>
					<Card
						img={`${thecnologies}` + 'tailwindcss.png'}
						col={'#C010EC'}
						textcolor={'black'}
						text={'TAILWIND'}
					/>
				</div>

				{row2 && (
					<>
						<div className="flex flex-col ">
							<Card
								img={`${thecnologies}` + 'webpack.png'}
								col={'blue'}
								textcolor={'black'}
								text={'WEBPACK'}
							/>
						</div>
						<div className="flex flex-col ">
							<Card
								img={`${thecnologies}` + 'redux.png'}
								col={'purple'}
								textcolor={'white'}
								text={'REDUX'}
							/>
						</div>
						<div className="flex flex-col ">
							<Card
								img={`${thecnologies}` + 'mongo.png'}
								col={'green'}
								textcolor={'black'}
								text={'MONGO'}
							/>
						</div>

						<div className="flex flex-col ">
							<Card
								img={`${thecnologies}` + 'sqlserver.png'}
								col={'red'}
								textcolor={'black'}
								text={'SQLserver'}
							/>
						</div>
						<div className="flex flex-col ">
							<Card
								img={`${thecnologies}` + 'docker.png'}
								col={'#00FFFD'}
								textcolor={'black'}
								text={'DOCKER'}
							/>
						</div>
						<div className="flex flex-col " ref={ref}>
							<Card
								img={`${thecnologies}` + 'aws.png'}
								col={'#F8FF00'}
								textcolor={'black'}
								text={'AWS'}
							/>
						</div>
					</>
				)}
			</motion.div>
		</>
	);
};