import React from 'react'
import './styles.scss'
import OwnersImg from '../../imgs/owners.png';
import ChickenWings from '../../imgs/Chicken-Wings.png';
import Pizza from '../../imgs/Pizza.png';
import Specials from '../../imgs/Specials.png';

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
            <button>Menu</button>
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
          <div className='category-card'>
            <img src={Pizza} alt="pizza"/>
            <h2>Pizza</h2>
          </div>
          <div className='category-card'>
            <img src={ChickenWings} alt="pizza"/>
            <h2>Wings</h2>
          </div>
          <div className='category-card'>
            <img src={Specials} alt="pizza"/>
            <h2>Specials</h2>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className='contact-container'>
        <h1>Contact</h1>
      </div>

    </div>
  )
}

export default Home;