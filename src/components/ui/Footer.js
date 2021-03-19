import React from "react";

const Rightarrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 W-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <nav id="footer" className="bg-black w-full h-1/4 px-7">
      {/* <!-- start container --> */}
      <div className=" grid grid-cols-4 grid-rows-1 gap-4 mx-24">

        <div className="text-white">
          <h2 className="font-bold -ml-2">Services</h2>
          <ul className="">
            
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Web deveveloper</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Mobile developer</span></a>
            </li>
          </ul>
        </div>


        <div className="text-white">
          <h2 className="font-bold -ml-2">Where I learn?</h2>
          <ul className="">
            
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Linkedln</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Coursera</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Udemy</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Books</span></a>
            </li>
          </ul>
        </div>
       

        <div className="text-white">
          <h2 className="font-bold -ml-2">Where I learn?</h2>
          <ul className="">
            
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Linkedln</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Coursera</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Udemy</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Books</span></a>
            </li>
          </ul>
        </div>

        <div className="text-white">
          <h2 className="font-bold -ml-2">Where I learn?</h2>
          <ul className="">
            
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Linkedln</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Coursera</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Udemy</span></a>
            </li>
            <li className="flex flex-row items-center">
              <Rightarrow /><a href="#"><span className="ml-1">Books</span></a>
            </li>
          </ul>
        </div>

        
      </div>

      <div className=" text-center  border-t-2 border-pink-700 h-1/6 mt-9 text-white"><span>Jonathan Ramirez © 2021</span></div>
    </nav>
  );
};

export default Footer;
