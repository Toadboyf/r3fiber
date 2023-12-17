import React, { useRef } from "react";
import { Decal, Float, Sparkles, useGLTF, useTexture } from "@react-three/drei";

export function Ollie(props) {
  const { nodes, materials } = useGLTF("/models/Ollie.gltf");
  const { pumpkin } = useTexture('/pumpkin.png');
  return (
    <group {...props} dispose={null}>
      <mesh
        name="wings"
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.OllieWings}
      />
      <mesh
        name="hands"
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.OllieHands}
      />
      <mesh
        name="body"
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.OllieWhite}>
      </mesh>
      <Float speed={2} floatingRange={[0, 0.1]}>
        <mesh
          name="halo"
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={materials.OllieHalo}>
            {/* <Sparkles count={50} scale={1} size={1} speed={0.1} /> */}
          </mesh>
      </Float>
      
      <mesh
        name="star1"
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.OllieStars}
      />
      <mesh
        name="star2"
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.OllieStars}
      />
      <mesh
        name="collar"
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.Olliegold}
      />
      <mesh
        name="hat-ears"
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.OllieBlue}
      />
      <mesh
        name="face"
        castShadow
        receiveShadow
        geometry={nodes.Cube001_2.geometry}
        material={materials.OllieFace}
      />
    </group>
  );
}

useGLTF.preload("/Ollie.gltf");