import React from 'react'
import "./sidebar.css"
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import  Home from '../home/Home';
import About from '../about/About';
import Resume from '../resume/Resume';
import Portfolio from '../portfolio/Portfolio';
import Service from '../service/Services'
// import Contact from '../contact/Contact';

import Pricing from '../pricing/Pricing'
import Testimonials from '../testmonials/Testimonials';
import Contact from '../contact/Contact';
import { navLinksMetaData } from '../../utils/congif';

const Layout = () => {
  return (
    <>
       <aside className='aside'>
        <Link to='/' className='nav_logo'>
          <img src={require("../../asset/kv.jpg")} alt='logo'></img>
        </Link>
        <nav className='nav'>
          <div className='nav_menu'>
            <ul className='nav__list'>
              {
                Object.values(navLinksMetaData).map(menu => {
                  return(
                    <li key={menu.id} className='nav_item'>
                      <Link to={menu.route} className="nav__link">
                      {menu.icon}
                      </Link>
                    </li>
                  )
                })
              }
              
            </ul>
          </div>
          </nav> 
        <div className="nav__footor">
           <span className="copyright">©2024 - 2025</span>
        </div>
        
      </aside>
      <div className="outlet">
      <Outlet/>
      </div>
      </>
  )
}




const Sidebar = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />} path="/">
        <Route path="/about-karan" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
    )
}

export default Sidebar