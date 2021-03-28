import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../customhooks/UseWindosSize";
import { Canvas } from "react-three-fiber";
import { Sky } from "drei";
import * as THREE from "three";
import Card from "./Card";

export const Project = (props) => {
  const { width, height } = useWindowSize();
  const y = width > 1000 ? 100 : width > 800 ? 50 : 10;

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const BoxVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: y },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (width) {
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        className=" flex flex-col w-full h-auto bg-gray-900 border-2 shadow-2x1 border-purple-700 border-opacity-50 mb-10 bg-black text-white rounded  rounded overflow-hidden shadow-lg "
        variants={BoxVariants}
      >
        <img src={props.img} alt="new" />
        <h4 className="font-family:Georgia text-3xl	 antialiased font-light	 text-justify p-3	">
          {props.info}
        </h4>

        <div class="px-6 pt-4 pb-2">
          {
            props.tags.map((tag, index)=>{

              return(
                <>
                    <span key={index} class="inline-block bg-purple-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                       #{tag}
            </span>             
                </>
              )
            } 
            )

          }
          {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span> */}
        </div>
      </motion.div>
    );
  } else {
    return <div></div>;
  }
};


