import React from 'react'
import { Link } from 'react-router-dom'
import {arrow}from '../assets/icons'
const InfoBox =({text,link,btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to = {link} className='neo-brutalism-white neo-btn'>{btnText}
        <img src = {arrow} className='w-4 h-4' alt='Arrow'/>
        </Link>
        
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Shubham Kushwaha</span>
            <br/>
            An ECE grad From MNNIT
        </h1>
    ),
    2: (
        <InfoBox text = "I am Final Year Student From ECE department From MNNIT Allahabad" link = '/about' btnText='Learn more'/>
    ),
    3: (
        <InfoBox text= "Build various projects" link = '/projects' btnText='Visit my portfolio'/>
    ),
    4: (
        <InfoBox text = "Need any Help or Connect with me" link = '/contact' btnText='Leave Message'/>
    )
}
const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo