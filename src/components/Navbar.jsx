import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='header'>
        
        <NavLink to = '/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <div className="group relative">
                <div className="blue-gradient_text">SK</div>
                <div className="hidden group-hover:block absolute bg-gray-200 p-4 mt-2">
                    <p>Shubham Kushwaha</p>
                </div>
            </div>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to = '/about' className={({isActive})=> isActive?'text-blue-500': 'text-black'}>
                About
            </NavLink>
            <NavLink to = '/project' className={({isActive})=> isActive?'text-blue-500': 'text-black'}>
                Project
            </NavLink>
        </nav>
    </header>
  )
}
