import React, { useLayoutEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import Stack from '../Stack';
import Typed from './typing';
const image1 =
  "http://jonathanramirezislas.com.mx/assets/bannerjona.svg";
  const image2 =
  "http://jonathanramirezislas.com.mx/assets/codig.gif";
  const inlineStyle = {
    color: '#FFFFFF',
    fontFamily: "Gill Sans Extrabold",
    fontSize :40,
    left: '50%',
    top: '60%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  }
  export const Banner = () => {
 
      
    
    return (
        
     <>
         <Parallax bgImage={ image1 } className="z-10 h-2/4 sm:h-2/4 md:h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-400" strength={250}>
         <div className="h-40 md:96">
              <div style={inlineStyle} >
              <Typed />
              </div>
            </div>
          </Parallax>
      
       
     
     </>
    )
}
