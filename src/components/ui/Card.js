import { TextureLoader } from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { useAspect, MeshWobbleMaterial, Text } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
//import img from './101.jpg'
const img='https://res.cloudinary.com/djuqxjkh3/image/upload/v1615147781/my-website/Dise%C3%B1o_sin_t%C3%ADtulo_1_lv2fdg.png'
const AnimatedWobbleMaterial = a(MeshWobbleMaterial)

function useActive(width, height, initial, minFactor, maxFactor) {
  const [active, set] = useState(initial)
  // converts the active flag into a animated 0-1 spring
  const { f } = useSpring({ f: Number(active), from: { f: Number(!initial) }, config: { mass: 5, tension: 400, friction: 150 } })
  // interpolate x/y scale
  const x = f.to([0, 1], [width / minFactor, width / maxFactor])
  const y = f.to([0, 1], [height / minFactor, height / maxFactor])
  // factor interpolates from nothing to wobbly to nothing
  const factor = f.to([0, 0.1, 0.5, 0.9, 1], [0, 1, 2, 1, 0])
  return [(e) => (e.stopPropagation(), set(!active)), x, y, factor]
}

function Donut({ texture, width, height, ...props }) {
  const [onClick, x, y, factor] = useActive(width, height, false, 6, 3.5)
  return (
    <a.mesh scale-x={x} scale-y={y} onClick={onClick} {...props}>
      <torusBufferGeometry args={[1, 0.25, 16, 100]} />
      <AnimatedWobbleMaterial color="#DB2777" map={texture} factor={factor} speed={8} />
    </a.mesh>
  )
}

function Image({ texture, width, height }) {
  const [onClick, x, y, factor] = useActive(width, height, true, 3.2, 1.2)
  return (
    <a.mesh scale-x={x} scale-y={y} onClick={onClick}>
      <planeBufferGeometry args={[1, 1, 32, 32]} />
      <AnimatedWobbleMaterial map={texture} factor={factor} speed={8} />
    </a.mesh>
  )
}

function Font() {
  return (
    <Text
      glyphGeometryDetail={32}
      font="https://fonts.gstatic.com/s/merriweather/v21/u-4l0qyriQwlOrhSvowK_l5-eR7NWMf8.woff"
      fontSize={1.5}
      letterSpacing={-0.075}
      lineHeight={0.8}
      color="white"
      position={[0, 0, 5]}>
      {'Touch me!!'}
      <MeshWobbleMaterial attach="material" color="black" factor={1} />
    </Text>
  )
}

function Shapes() {
  const texture = useLoader(TextureLoader, img)
  const [width, height] = useAspect('cover', 2000, 2000)
  return (
    <>
      <Donut texture={texture} width={width} height={height} position-z={2}  />
      <Image texture={texture} width={width} height={height} />
      <Font />
    </>
  )
}

export default function Card() {
  return (
    <Canvas pixelRatio={window.devicePixelRatio} camera={{ position: [0, 0, 12] }} className="bg-black">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Shapes />
      </Suspense>
    </Canvas>
  )
}

