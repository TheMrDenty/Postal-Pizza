import './styles.scss';

import React from 'react'
import Navbar from '../Navbar/index';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';


function Layout() {
    return (
        <div className='layout-container'>
  
            <Navbar /> 
           

            <Outlet />

           

            <Footer />
        </div>
   
    )
}

export default Layout
