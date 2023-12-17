import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber'
import { useGLTF, useScroll } from '@react-three/drei';

function LoadedModel({ url, position }) {
  const meshRef = useRef();

  const {scene} = useGLTF(url);

  useFrame((state, delta)=>{
    //
  })

  return (
    <mesh
      position={position || [0,0,0]}
      ref={meshRef}>

      <primitive object={scene} />

    </mesh>
  )
}

export default LoadedModel
