import React, { useState, useEffect } from 'react';
import Media from './Media';

export default function Navbar() {
	const [show, setshow] = useState(false);

	

	
	return (
		<>
			<div className="fixed z-40 grid w-full grid-cols-2 bg-black border-b-2 border-purple-700 h-11 md:text-sm lg:text-lg md:h-14 ">
				<div>
					<nav className="flex-row w-full h-full p-2 text-indigo-100 color-white md:justify-between">
						<div className="flex flex-row justify-between">
							<button onClick={() => setshow(!show)} className=" md:hidden  ">
								<svg
									className="w-10 h-8 ml-2 mb-2 fill-current 	"
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
								className='flex flex-wrap pr-5 mt-10 font-bold cursor-pointer md:mt-2  text-indigo-100 hover:text-yellow-300 hover:bg-purple-900 md:hover:bg-black'
								
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="fill-current  mx-2" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.185l7 6.514v6.301h-14v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h18v-9.172l-9-8.375zm2 14.547h-4v-6h4v6zm10-8.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z"/></svg>
								<a href="#home"> Home </a>
							</li>
							<li
								onClick={() => setshow(false)}
								className='flex flex-wrap pr-5 mt-10 font-bold cursor-pointer md:mt-2  text-indigo-100 hover:text-yellow-300 hover:bg-purple-900 md:hover:bg-black'
							>
								<svg xmlns="http://www.w3.org/2000/svg"  className="fill-current  mx-2" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z"/></svg>
								<a href="#about">About</a>
								
							</li>
							<li
								onClick={() =>setshow(false)}
								className='flex flex-wrap pr-5 mt-10 font-bold cursor-pointer md:mt-2  text-indigo-100 hover:text-yellow-300 hover:bg-purple-900 md:hover:bg-black'
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="fill-current  mx-2" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg>
								<a href="#thec">Thecnologies</a>
							</li>
							<li
								onClick={() => setshow(false)}
								className='flex flex-wrap pr-5 mt-10 font-bold cursor-pointer md:mt-2  text-indigo-100 hover:text-yellow-300 hover:bg-purple-900 md:hover:bg-black'
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="fill-current mx-2" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm-6 2h-8v1h8v-1zm11-10c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"/></svg>
								<a href="#projects">Projects</a>
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
