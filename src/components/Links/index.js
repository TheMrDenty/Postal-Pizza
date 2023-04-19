import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.scss'
import links from '../../data/links-data.js'

import { NavLink } from 'react-router-dom';

import { useGlobalContext } from '../../context';

// brings in closeNavDropDown function from context
// maps out links data into a ul of NavLinks that trigger closeNavDropdown on click
function Links() {
    const {closeNavDropdown} = useGlobalContext();
  return (
    <div className='nav-links-container'>
        <ul className='nav-links'>
            {links.map((link, index) => {
                
                const {page} = link;
                /* 
                console.log(links)
                console.log(link)
                console.log(page)
                */
                

                return (
                    <li key={index} className='link'>
                        {/* <a href='#top'> */}
                        <div href='#top'>
                            <NavLink exact='true' activeclassname='active' to={page[1]} onClick={closeNavDropdown}>
                                <button className='link-btn'>
                                    <h3>{page[0]}</h3>
                                </button>
                            </NavLink>
                            
                        </div>
                    </li>
                    
                )
            })}
            
        </ul>
        <div className='icons'>
            <a href='https://facebook.com/'><FontAwesomeIcon icon={faFacebook} className='facebook-link' size='3x'/></a>
            <a href='https://twitter.com/'><FontAwesomeIcon icon={faPhoneFlip} className='twitter-link' size='3x'/></a>
        </div>
    </div>
  )
}

export default Links