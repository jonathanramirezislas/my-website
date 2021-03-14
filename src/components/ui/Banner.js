import React from 'react';
import { Parallax } from 'react-parallax';
import Typed from './Typed';

const image1 =
  "https://res.cloudinary.com/djuqxjkh3/image/upload/v1615149449/my-website/Dise%C3%B1o_sin_t%C3%ADtulo_3_spm83j.svg";

  export const Banner = () => {

 
    return (     
  
     <div id="home" className="relative w-full h-full bg-black">
    
              <Parallax  bgImage={ image1 } className="absolute w-full h-full text-white " strength={250}>
          </Parallax>
          
              <div   className="absolute w-1/4 ml-8 text-white top-3/4 h-1/4 md:top-1/3 lg:text-5xl" >
              <Typed />
              </div>
     </div>
     
    )
}
