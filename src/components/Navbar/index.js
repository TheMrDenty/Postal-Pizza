import './styles.scss';

import Logo from '../../imgs/Logo.png'



import { Link } from 'react-router-dom';
import Links from '../Links';




// brings in functions from context and onClick checks if dropdown is active, if it is then it closes it, if not then it opens it
function Navbar() {


    return (
        <div className='nav-container' id='top'>
            <div className='nav'>
                <Link className='logo' to={'/'}>
                    <img src={Logo} alt='logo' />
                </Link>

                

                <div className='navbar-links'>
                    <Links />
                </div>
                

               
                
            </div>
        </div>
    )
}

export default Navbar