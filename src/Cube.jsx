import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber'

function Cube(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  let speed = props.speed || 1;

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * speed;
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(e)=>{setActive(!active)}}
      onPointerOver={(e)=>{setHover(true)}}
      onPointerOut={(e)=>{setHover(false)}}>

        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />

    </mesh>
  )
}

export default Cube
