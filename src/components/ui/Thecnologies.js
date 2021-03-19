import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useInView } from 'react-intersection-observer';

const thecnologies = 'https://res.cloudinary.com/djuqxjkh3/image/upload/v1615256866/my-website/thecnologies/';

export const Thecnologies = () => {
	const [ref, inView] = useInView();
	const [show, setShow] = useState(false);
	const [count, setcount] = useState(0);
	useEffect(() => {
		if (inView) {
			setShow(true);
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
			<div ref={ref}></div>
			{show ? (
				<div
					className="grid w-full grid-cols-1 grid-rows-3 gap-3 px-4 py-4 bg-black md:grid-cols-3 md:grid-rows-1"
				>
						<div className="flex flex-col ">
							<Card
								img={`${thecnologies}` + 'spring_boot.png'}
								col={'green'}
								textcolor={'white'}
								text={'SPRING BOOT'}
							/>
						</div>


						<div className="flex flex-col ">
							<Card
								img={`${thecnologies}` + 'express.png'}
								col={'white'}
								textcolor={'black'}
								text={'Express'}
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
					
				</div>
			) : (
				<h1>Loading</h1>
			)}
		</>
	);
};
