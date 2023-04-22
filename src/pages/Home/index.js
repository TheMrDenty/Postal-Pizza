import React from 'react'
import './styles.scss'
import OwnersImg from '../../imgs/owners.png';
import ChickenWings from '../../imgs/Chicken-Wings.png';
import Pizza from '../../imgs/Pizza.png';
import Specials from '../../imgs/Specials.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      {/* Hero */}
      <div className='hero-container'>
        <div className='hero'>
          <div className='hero-content'>
            <h1><span className='accent'>Great pizza</span> <br /> delivered by professionals<span className='accent'>.</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et pulvinar ipsum. 
              In ut venenatis lorem. Nullam a lacus pretium, iaculis magna tincidunt, pellentesque lacus. 
              In id suscipit tellus, vel fringilla augue.
            </p>
            <NavLink exact='true' activeclassname='active' to='/menu'>
              <button className='btn'>
                <h2>Menu</h2>
              </button>
            </NavLink>
          </div>
          <div className='hero-img'>
            <img src={OwnersImg} alt="postal pizza's owners"/>
          </div>
        </div>
      </div>

      {/* categories */}
      <div className='categories-container'>
        <h1>How can we help you?</h1>
        <div className='categories'>
          <div className='category-card-container'>
            <div className='category-card'>
              <img src={Pizza} alt="pizza"/>
              <h2>Pizza</h2>
            </div>
          </div>
          <div className='category-card-container'>
            <div className='category-card'>
              <img src={ChickenWings} alt="pizza"/>
              <h2>Wings</h2>
            </div>
          </div>
          <div className='category-card-container'>
            <div className='category-card'>
              <img src={Specials} alt="pizza"/>
              <h2>Specials</h2>
            </div>
          </div>
        </div>
      </div>

      {/* directions */}
      <div className='directions-container' id='directions'>
        <div className='directions'>
          <div className='directions-img'>
            <img src={OwnersImg} alt="postal pizza's owners"/>
          </div>
          <div className='directions-content'>
            <h1><span className='accent'>Pick-up</span> or <span className='accent'>Delivery</span>?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et pulvinar ipsum. 
              In ut venenatis lorem. Nullam a lacus pretium, iaculis magna tincidunt, pellentesque lacus. 
              In id suscipit tellus, vel fringilla augue.
            </p>
            <button className='btn'>
              <h2><a href='https://www.google.com/maps/dir/Elmira,+New+York/2121+Grand+Central+Ave,+Horseheads,+NY+14845/@42.1543879,-76.8219687' target='_blank' rel="noreferrer">Directions</a></h2>
            </button>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home;