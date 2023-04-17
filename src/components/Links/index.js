import './styles.scss'
import links from '../../data/links-data.js'

import { NavLink } from 'react-router-dom';

import { useGlobalContext } from '../../context';

// brings in closeNavDropDown function from context
// maps out links data into a ul of NavLinks that trigger closeNavDropdown on click
function Links() {
    const {closeNavDropdown} = useGlobalContext();
  return (
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
                            <h2>{page[0]}</h2>
                        </button>
                    </NavLink>
                    </div>
                </li>
                
            )
        })}
        
    </ul>
  )
}

export default Links