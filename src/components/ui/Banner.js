import React, { useLayoutEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
const image1 =
  "http://jonathanramirezislas.com.mx/assets/bannerjona.svg";
  const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  const inlineStyle = {
    color: '#FFFFFF',
    left: '50%',
    top: '60%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  }
  export const Banner = () => {
 
      
    
    return (
        
     <>
         <Parallax bgImage={ image1 } className="md:h-full" strength={250}>
         <div className="h-40 md:96">
              <div style={inlineStyle}>Jonathan Ramírez</div>
            </div>
          </Parallax>
      
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
          <div style={inlineStyle}>Render sdsdsdsdsda</div>
        </div>
      </Parallax>
     
     </>
    )
}
