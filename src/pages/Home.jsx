import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '../components/Loader'
import  {Island}  from '../models/Island';
import { Sky } from '../models/Sky';
export const Home = () => {

  const adjustIslandForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1,4.7,0];
    if(window.innerWidth<768){
      screenScale = [0.9,0.9,0.9];
    }
    else{
      screenScale = [1,1,1];
    }
    return [screenScale,screenPosition,rotation];
  }

  const [screenScale,screenPosition,rotation] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
        <Canvas className='w-full h-screen bg-transparent' camera={{near: 0.1 , far: 1000}}>
            <Suspense fallback = {<Loader />}>
              <directionalLight  position={[1,1,1]} intensity={2}/>
              <hemisphereLight  skyColor = '#b1e1ff' groundColor='#000000' intensity={1}/>
              <ambientLight intensity={0.5}/>
              <Sky />
              <Island 
                position = {screenPosition}
                scale = {screenScale}
                rotation = {rotation}
              />
            </Suspense>
        </Canvas>
    </section>
  )
}
