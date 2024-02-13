import React ,{useRef,useEffect}from 'react'
import { useAnimations,useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';
export const Plane = ({isRotating,...props}) => {
  const ref = useRef();
  const {scene,animations} = useGLTF(planeScene);
  const {actions} = useAnimations(animations,ref);

  useEffect(()=>{
    console.log({isRotating});
    if(!isRotating){
      actions['Take 001'].play();
    }
    else{
      actions['Take 001'].stop();
    }
  },[actions,isRotating]);
    // const plane = useGLTF(planeScene);
    // const {scene,animations} = useGLTF(planeScene);

    // console.log(plane);
  return (
    <mesh {...props} ref = {ref}>
        <primitive object={scene} />
    </mesh>
  )
}
