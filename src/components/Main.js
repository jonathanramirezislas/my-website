import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { Stars } from "drei";
import { Link } from "react-router-dom";

extend({ OrbitControls });

const Logo = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load(
      "https://res.cloudinary.com/djuqxjkh3/image/upload/v1614194557/mylogo3d/jona_u6as49.glb",
      setModel
    );
  });
  console.log("dfdf", model);
  return model ? <primitive object={model.scene} /> : null;
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  );
};

export const Main = () => {
  const isBrowser = typeof window !== "undefined";

  const gotoHome = () => {};

  return (
    <section className="flex items-center justify-center w-full h-screen bg-black App">
      <div class="z-10 absolute bottom-6">
        <button
          className="inline-flex px-4 py-2 ml-3 mb-1 mr-1 font-bold text-gray-500 uppercase bg-transparent border border-gray-500 border-solid rounded-full outline-none hover:bg-gray-500 hover:text-white active:bg-gray-600 focus:outline-none transition: all .15s ease"
          type="button"
        >
          <span>CV</span>
          <svg
            className="w-6 h-6 ml-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
          </svg>
        </button>

        <Link
          to="/home"
          className="inline-flex px-4 py-2 ml-3 mb-1 mr-1 font-bold text-gray-500 uppercase bg-transparent border border-gray-500 border-solid rounded-full outline-none hover:bg-gray-500 hover:text-white active:bg-gray-600 focus:outline-none transition: all .15s ease"
        >
          <span>START</span>
          <svg
            className="w-6 h-6 ml-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 24"
          >
            <path d="M19.957 4.035c-.345-.024-.682-.035-1.012-.035-7.167 0-11.248 5.464-12.732 9.861l3.939 3.938c4.524-1.619 9.848-5.549 9.848-12.639 0-.367-.014-.741-.043-1.125zm-9.398 11.815l-2.402-2.402c1.018-2.383 3.91-7.455 10.166-7.767-.21 4.812-3.368 8.276-7.764 10.169zm4.559 1.282c-.456.311-.908.592-1.356.842-.156.742-.552 1.535-1.126 2.21-.001-.48-.135-.964-.369-1.449-.413.187-.805.348-1.179.49.551 1.424-.01 2.476-.763 3.462 1.08-.081 2.214-.61 3.106-1.504.965-.962 1.64-2.352 1.687-4.051zm-9.849-5.392c-.482-.232-.965-.364-1.443-.367.669-.567 1.453-.961 2.188-1.121.262-.461.556-.915.865-1.361-1.699.046-3.09.723-4.054 1.686-.893.893-1.421 2.027-1.503 3.106.986-.753 2.039-1.313 3.463-.762.145-.391.305-.785.484-1.181zm6.448.553c-.326-.325-.326-.853 0-1.178.325-.326.853-.326 1.178 0 .326.326.326.854 0 1.179-.326.325-.853.325-1.178-.001zm4.124-4.125c-.65-.65-1.706-.65-2.356 0-.651.651-.651 1.707 0 2.357.65.651 1.706.651 2.357 0 .65-.65.65-1.706-.001-2.357zm-1.591 1.592c-.228-.228-.228-.598 0-.825.227-.228.598-.228.826 0 .227.227.226.597 0 .825-.228.227-.598.227-.826 0zm-12.609 10.555l-.755-.755 4.341-4.323.755.755-4.341 4.323zm4.148 1.547l-.755-.755 3.03-3.054.756.755-3.031 3.054zm-5.034 2.138l-.755-.755 5.373-5.364.756.755-5.374 5.364zm21.083-14.291c-.188.618-.673 1.102-1.291 1.291.618.188 1.103.672 1.291 1.291.189-.619.673-1.103 1.291-1.291-.618-.188-1.102-.672-1.291-1.291zm-14.655-6.504c-.247.81-.881 1.443-1.69 1.69.81.247 1.443.881 1.69 1.69.248-.809.881-1.443 1.69-1.69-.81-.247-1.442-.88-1.69-1.69zm-1.827-3.205c-.199.649-.706 1.157-1.356 1.355.65.199 1.157.707 1.356 1.355.198-.649.706-1.157 1.354-1.355-.648-.198-1.155-.706-1.354-1.355zm5.387 0c-.316 1.035-1.127 1.846-2.163 2.163 1.036.316 1.847 1.126 2.163 2.163.316-1.036 1.127-1.846 2.162-2.163-1.035-.317-1.845-1.128-2.162-2.163zm11.095 13.64c-.316 1.036-1.127 1.846-2.163 2.163 1.036.316 1.847 1.162 2.163 2.197.316-1.036 1.127-1.881 2.162-2.197-1.035-.317-1.846-1.127-2.162-2.163z" />
          </svg>
        </Link>

        <button
          className="inline-flex px-4 py-2 ml-3 mb-1 mr-1 font-bold text-gray-500 uppercase bg-transparent border border-gray-500 border-solid rounded-full outline-none hover:bg-gray-500 hover:text-white active:bg-gray-600 focus:outline-none transition: all .15s ease"
          type="button"
        >
          <span>GITHUB</span>
          <svg
            className="w-6 h-6 ml-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </button>
      </div>

      {isBrowser && (
        <Canvas
          className="w-full h-full p-0 m-0"
          camera={{ position: [1, 1, 0] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} penumbra={1} castShadow />
          <fog attach="fog" args={["black", 10, 25]} />
          <Controls />
          <Stars />
          <Logo />
        </Canvas>
      )}
    </section>
  );
};
