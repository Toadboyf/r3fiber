import { useState } from 'react'
import { Canvas, createRoot, useFrame, useThree } from '@react-three/fiber'
import './App.scss'
import { CameraControls, Cloud, Clouds, Environment, Scroll, ScrollControls, Stars, useScroll } from '@react-three/drei'
import { Ollie } from './components/Ollie'
import { Dungeon } from './components/Dungeon'
import { Vector2, Vector3 } from 'three'
import { lerp } from 'three/src/math/MathUtils'

function App() { 

  return (
    <div id='canvas-container'>
      <Canvas camera={{position: [0,0,0]}}>
        <MobileUpdate />
        {/* <ambientLight intensity={0.1} /> */}
        {/* <directionalLight /> */}
        {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}
        {/* <Environment
          background
          path={'/hdri/space/'}
          files={[
            'right.png',
            'left.png',
            'top.png',
            'bottom.png',
            'front.png',
            'back.png',
          ]}/> */}
        {/* <OrbitControls maxPolarAngle={Math.PI} /> */}
        {/* <Float floatingRange={[-0.25, 0.25]}>
          <Ollie />
          
        </Float> */}

        <Dungeon position={[0,-1,0]} />
        <Rig />
        
      </Canvas>
    </div>
  )
}

function Rig() {
  const { camera } = useThree()
  const vec = new Vector3()
  useFrame((state) => {
    camera.position.lerp(vec.set(state.pointer.x, state.pointer.y/2, camera.position.z), 0.02);
    camera.lookAt(0,0,-6);
  })
}

function MobileUpdate() {
  const { camera, size } = useThree();
  useFrame(() => {
    if(size.width <= 470) {//mobile breakpoint
      camera.zoom = 0.5;
    } else {
      camera.zoom = 1;
    }
  })
  
}

export default App
