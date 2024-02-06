import React from 'react'
import { useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';
export const Plane = () => {
    const plane = useGLTF(planeScene);
  return (
    <mesh >
        <primitive object={plane.scene} />
    </mesh>
  )
}
