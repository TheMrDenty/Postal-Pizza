import './styles.scss';

import Logo from '../../imgs/Logo.png'

import { useGlobalContext } from '../../context'

import { Link } from 'react-router-dom';
import Links from '../Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';





// brings in functions from context and onClick checks if dropdown is active, if it is then it closes it, if not then it opens it
function Navbar() {
    const {openNavDropdown, closeNavDropdown, isNavDropdownOpen} = useGlobalContext();

    return (
        <div className='nav-container' id='top'>
            <div className='nav'>
                <Link className='logo' to={'/'}>
                    <img src={Logo} alt='logo' />
                </Link>

                

                <div className='navbar-links'>
                    <Links />
                </div>
                

                <button className='modal-btn toggle-btn' onClick={isNavDropdownOpen ? closeNavDropdown : openNavDropdown}>
                    <FontAwesomeIcon className='bars' icon={faBars} />
                </button>
                
            </div>
        </div>
    )
}

export default Navbar