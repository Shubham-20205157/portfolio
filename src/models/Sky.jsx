import { useGLTF} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import skyScene from '../assets/3d/sky.glb'
export const Sky = ({isRotating}) => {
    const ref = useRef();
    const sky = useGLTF(skyScene);
    useFrame((_,delta)=>{
      if(isRotating){
        ref.current.rotation.y += 0.7*delta;
      }
    })
  return (
    <mesh ref = {ref}>
        <primitive object={sky.scene} />
    </mesh>
  )
}
