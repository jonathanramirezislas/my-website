import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [show, setshow] = useState(false);
  const [title, settile] = useState("HOME");
  const [number, setNumber] = useState("HOME");

  console.log("show", show);
  useEffect(() => {}, [show]);

  const active = (num) => {
    switch (num) {
      case 1:
          settile('HOME')
          setNumber(1)
          setshow(false)
        break;
      case 2:
        settile('PORTAFOLIO')
        setNumber(2)
          setshow(false)
        break;
      case 3:
        settile('ABOUT')
        setNumber(3)
          setshow(false)
        break;
      case 4:
        settile('HOME')
        setNumber(4)
          setshow(false)
        break;
      default:
        break;
    }
  };
  return (
    
    <>
      <h1 className="fixed z-50 mt-2 ml-20 text-center md:hidden text-indigo-50">
        {title}
      </h1>
      <nav className="fixed z-40 flex-row w-full p-2 bg-gray-900 border-b-2 border-red-500 text-indigo-50 color-white md:justify-between">
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
          className={"ml-2 flex-row md:flex  " + (show ? "show" : "hidden")}
        >
          <li
            onClick={() => active(1)}
            className={((number==1)?'text-blue-300 underline ':'')+ "font-bold font-sans pr-5 cursor-pointer hover:text-yellow-300"}
          >
            <a> Home </a>
          </li>
          <li
            onClick={() => active(2)}
            className={((number==2)?'text-blue-300 underline ':'')+"font-bold font-sans pr-5 cursor-pointer hover:text-yellow-300"}
          >
            <a>Porfolio</a>
          </li>
          <li
            onClick={() => active(3)}
            className={((number==3)?'text-blue-300 underline ':'')+"font-bold font-sans pr-5 cursor-pointer hover:text-yellow-300"}
          >
            <a>About</a>
          </li>
          <li
            onClick={() => active(4)}
            className={((number==4)?'text-blue-300 underline ':'')+"font-bold font-sans pr-5 cursor-pointer hover:text-yellow-300"}
          >
            <a>About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
