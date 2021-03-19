import React,{useEffect, useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Parallax } from 'react-parallax';
import { useInView } from 'react-intersection-observer';

import content from '../../assets/stack';
const image2 =
"http://jonathanramirezislas.com.mx/assets/codig.gif";


export default function Stack({}) {

  
  return (
<div id="thec">
  
    <Parallax 
    bgImage={ image2 }
    strength={250}
    className="z-10 h-2/5 md:h-full"
    renderLayer={precentage => (
      <div 
      className="absolute h-8 w-15 md:w-24 md:h-24 "
        style={{
          borderRadius: '50%',
          background: `rgba(0, 0, 0, ${precentage * 1})`,
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${precentage * 5})`,
        }}
      >
      </div>
    )}
  >
    <div className="h-2/4 md:h-96">
    <div
      className="flex flex-col items-center justify-end md:mt-20 "
    >
      <h1 className="pt-2 mb-10 text-5xl font-bold text-white font-dosis">Stack I Use</h1>
      <div>
        <div className="flex flex-wrap justify-center ">
          {content.stack.tech.map((tech, index) => (
            <span
              key={index}
              className={`h-20 w-20 md:h-40 md:w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? ' animate-bounce' : 'animate-pulse'
              }`}
            >
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
            </span>
          ))}
        </div>
      </div>
    </div>
    
    </div>
  </Parallax>
  
</div>
  );
}