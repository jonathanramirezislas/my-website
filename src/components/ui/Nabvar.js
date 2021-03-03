import React, { useState, useEffect } from 'react';
import Media from './Media';

export default function Navbar() {
	const [show, setshow] = useState(false);
	const [number, setNumber] = useState('HOME');

	console.log('show', show);
	useEffect(() => {}, [show]);

	const active = (num) => {
		switch (num) {
			case 1:
				setNumber(1);
				setshow(false);
				break;
			case 2:
				setNumber(2);
				setshow(false);
				break;
			case 3:
				setNumber(3);
				setshow(false);
				break;
			case 4:
				setNumber(4);
				setshow(false);
				break;
			default:
				break;
		}
	};
	return (
		<>
    <div className="fixed z-40 grid w-full h-12 grid-cols-2 bg-black border-b-2 border-red-500">
      
      
      <div>  
         <nav className="flex-row w-full h-12 p-2 text-indigo-100 color-white md:justify-between">
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
              className={"border-dotted	border-b-2 border-r-2  border-gray-900 md:border-none	md:ml-2 flex-row md:flex w-11/12 bg-gradient-to-t from-indigo-200 to-black md:bg-gradient-to-t md:from-black md:to-black  text-white " + (show ? "show  h-80 -ml-2 rounded pl-2 justify-between items-center pt-4" : "hidden")}
            >
              <li
                onClick={() => active(1)}
                className={((number==1)?'text-blue-300 underline ':'')+ "font-bold pr-5 mt-10 md:mt-0 cursor-pointer hover:text-yellow-300"}
              >
                <a> Home </a>
              </li>
              <li
                onClick={() => active(2)}
                className={((number==2)?'text-blue-300 underline ':'')+"font-bold pr-5 mt-10 md:mt-0 cursor-pointer hover:text-yellow-300"}
              >
                <a>Porfolio</a>
              </li>
              <li
                onClick={() => active(3)}
                className={((number==3)?'text-blue-300 underline ':'')+"font-bold pr-5 mt-10 md:mt-0 cursor-pointer hover:text-yellow-300"}
              >
                <a>About</a>
              </li>
              <li
                onClick={() => active(4)}
                className={((number==4)?'text-blue-300 underline ':'')+"font-bold font-sans pr-5 mt-10 md:mt-0 cursor-pointer hover:text-yellow-300"}
              >
                <a>About</a>
              </li>
            </ul>
          </nav>
      </div>

      <div className="flex flex-row justify-center pt-1 mb-1 text-center justify-items-center md:justify-center">
      <Media />
      </div>
      
    </div>
	
		</>
	);
}




