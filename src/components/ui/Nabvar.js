import React, { useState, useEffect } from 'react';
import Media from './Media';

export default function Navbar() {
	const [show, setshow] = useState(false);

	useEffect(() => {}, [show]);

	
	return (
		<>
			<div className="fixed z-40 grid w-full grid-cols-2 bg-black border-b-2 border-purple-700 h-11 md:text-sm lg:text-lg md:h-14 ">
				<div>
					<nav className="flex-row w-full h-full p-2 text-indigo-100 color-white md:justify-between">
						<div className="flex flex-row justify-between">
							<button onClick={() => setshow(!show)} className=" md:hidden">
								<svg
									className="w-6 h-6 ml-3 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</button>
						</div>
						<ul
							className={
								'bg-black bg-opacity-50 md:bg-opacity-100 border-b-3 border-r-2  border-purple-700 md:border-none	md:ml-2 flex-row md:flex w-11/12  text-white ' +
								(show ? 'show  h-80 -ml-2 rounded pl-2 justify-between items-center pt-4' : 'hidden')
							}
						>
							<li
								onClick={() => setshow(false)}
								className='pr-5 mt-10 font-bold cursor-pointer md:mt-2 hover:text-yellow-300'
								
							>
								<a href="#home"> Home </a>
							</li>
							<li
								onClick={() => setshow(false)}
								className='pr-5 mt-10 font-bold cursor-pointer md:mt-2 hover:text-yellow-300'
							>
								<a href="#about">About</a>
								
							</li>
							<li
								onClick={() =>setshow(false)}
								className='pr-5 mt-10 font-bold cursor-pointer md:mt-2 hover:text-yellow-300'
							>
								<a href="#thec">Thecnologies</a>
							</li>
							<li
								onClick={() => setshow(false)}
								className='pr-5 mt-10 font-sans font-bold cursor-pointer md:mt-2 hover:text-yellow-300'
							>
								<a href="#portafolio">Porfolio</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="flex flex-row justify-center pt-1 mb-1 text-center justify-items-center md:justify-center ">
					<Media />
				</div>
			</div>
		</>
	);
}
