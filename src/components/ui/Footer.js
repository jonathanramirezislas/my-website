import React from "react";

const Rightarrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 W-4 text-purple-700"
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
   <>
   <nav id="footer" className="bg-black w-full  px-7 pb-1">
      {/* <!-- start container --> */}
      <div className=" grid grid-cols-2 grid-rows-2  gap-4 md:grid-cols-4 md:grid-rows-1 ml-10 md:mx-24 mb-2">

        <div className="text-white">
          <h2 className="font-bold -ml-2">Services</h2>
          <ul className="">
            
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a ><span className="ml-1">Web deveveloper</span></a>
            </li>
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a ><span className="ml-1">Mobile developer</span></a>
            </li>
          </ul>
        </div>


        <div className="text-white">
          <h2 className="font-bold -ml-2">Contact</h2>
          <ul className="">
            
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a class="mail" href="mailto:jonathanalejandro.ramirezislas@gmail.com" target='_blank'><span className="ml-1">e-mail</span></a>
            </li>
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a href="https://www.linkedin.com/in/jonathan-ram%C3%ADrez-b91a381a9/" target='_blank'><span className="ml-1">Linkedln profile</span></a>
            </li>
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a ><span className="ml-1">Aguascalientes, México</span></a>
            </li>
          </ul>
        </div>
       

        <div className="text-white">
          <h2 className="font-bold -ml-2">Other activities!</h2>
          <ul className="">
            
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a href="#"><span className="ml-1">Soccer</span></a>
            </li>
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a href="#"><span className="ml-1">Swimming</span></a>
            </li>
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a href="#"><span className="ml-1">Gym</span></a>
            </li>
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a href="#"><span className="ml-1">Movies</span></a>
            </li>
          </ul>
        </div>

        <div className="text-white">
          <h2 className="font-bold -ml-2">Where I learn?</h2>
          <ul className="">
            
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a href="https://www.linkedin.com/learning/me" target='_blank'><span className="ml-1">Linkedln</span></a>
            </li>
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a href="https://es.coursera.org/"  target='_blank'><span className="ml-1">Coursera</span></a>
            </li>
            <li className="flex flex-row items-center py-2 ">
              <Rightarrow /><a href="https://www.udemy.com/"  target='_blank'><span className="ml-1">Udemy</span></a>
            </li>
            <li className="flex flex-row items-center py-2">
              <Rightarrow /><a ><span className="ml-1">Books</span></a>
            </li>
          </ul>
        </div>

        
      </div>

    </nav>
          <div className=" text-center bg-gray-900 w-full   h-10 pt-1 text-white"><span>Jonathan Ramirez © 2021</span></div>
</>
  );
};

export default Footer;
