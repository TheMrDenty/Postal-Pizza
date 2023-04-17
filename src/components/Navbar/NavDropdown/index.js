import './styles.scss';

import React from 'react'
import { useGlobalContext } from '../../../context'


import Links from '../../Links';


function NavDropdown() {
  // brings in isNavDropdownOpen function and if its is open then shows drop down if not doesnt show it.
  const {isNavDropdownOpen} = useGlobalContext();

  return (
    <aside className={`${isNavDropdownOpen ? 'nav-dropdown-wrapper show' : 'nav-dropdown-wrapper'}`}>
        <div className='nav-dropdown'>
            
            
            <div className='dropdown-links'>
                <Links />
            </div>
        </div>
    </aside>
  )
}

export default NavDropdown;