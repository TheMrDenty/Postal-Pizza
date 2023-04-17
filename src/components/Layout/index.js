import './styles.scss';

import React from 'react'
import Navbar from '../Navbar/index';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import NavDropdown from '../Navbar/NavDropdown';

function Layout() {
    return (
        <div className='layout-container'>
  
            <Navbar /> 
            <NavDropdown />

            <Outlet />

           

            <Footer />
        </div>
   
    )
}

export default Layout
