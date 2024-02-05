import React from 'react'
import {Route , BrowserRouter as Router ,Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { About } from './pages/About';
import {Home} from './pages/Home';
import { Projects } from './pages/Projects';
export const App = () => {
  return (
    <main className='bg-slate-100/20'>
        <Router>
            < Navbar />
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/project" element = {<Projects />} />
            </Routes>
        </Router>
        
    </main>
   
  )
}
