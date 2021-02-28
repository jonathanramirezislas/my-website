import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Parallax } from 'react-parallax';

import content from '../assets/stack';
const image2 =
"http://jonathanramirezislas.com.mx/assets/codig.gif";
export default function Stack() {
  return (
<>
    <Parallax 
    bgImage={ image2 }
    strength={200}
    renderLayer={precentage => (
      <div 
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
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
    <div style={{ height: 500 }}>
    <div
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="mb-10 text-5xl font-bold font-dosis">Stack I Use</h1>
      <div>
        <div className="flex flex-wrap justify-center">
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
      <p className="inline-block w-11/12 mt-10 mb-10 text-xl text-center text-white md:max-w-xl md:text-2xl font-dosis ">
        {content.stack.desc}.
      </p>
    </div>
    </div>
  </Parallax>
</>
  );
}