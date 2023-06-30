import React from 'react'
import './styles.scss'
import OwnersImg from '../../imgs/owners.webp';
import Location from '../../imgs/location.webp';
import ChickenWings from '../../imgs/wings2-new.webp';
import Pizza from '../../imgs/Pizza.webp';
import Specials from '../../imgs/bundle.webp';
import { HashLink as Link } from 'react-router-hash-link';
function Home() {
  return (
    <div className='home-container'>
      {/* Hero */}
      <div className='hero-container'>
        <div className='hero'>
          <div className='hero-content'>
            <h1><span className='accent'>Great pizza</span> <br /> delivered by professionals<span className='accent'>.</span></h1>
            <p>Come and experience the ultimate taste of Postal Pizza, where every slice delivers a stampede of flavors straight to your taste buds. 
              Our menu offers a variety of mouth-watering pizzas and toppings that will have you coming back for more. 
              Don't wait, order now and satisfy your cravings with the best pizza in town!
              
            </p>
            <Link exact='true' activeclassname='active' to='/menu'>
              <button className='btn'>
                <h2>Menu</h2>
              </button>
            </Link>
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
            <Link to='/menu'>
              <div className='category-card'>
                <img src={Pizza} alt="pizza"/>
                <h2>Pizza's</h2>
              </div>
            </Link>
          </div>
          <div className='category-card-container'>
            <Link to='/menu#subs' >
              <div className='category-card' >
                <img src={ChickenWings} alt="pizza"/>
                <h2>Subs, Salads, and Sides</h2>
              </div>
            </Link>
          </div>
          <div className='category-card-container'>
            <Link to='/menu#bundles' >
            <div className='category-card'>
              <img src={Specials} alt="pizza"/>
              <h2>Bundles</h2>
            </div>
            </Link>
          </div>
        </div>
      </div>
      {/* directions */}
      <div className='directions-container' id='directions'>
        <div className='directions'>
          <div className='directions-img'>
            <img src={Location} alt="postal pizza's owners"/>
          </div>
          <div className='directions-content'>
            <h1><span className='accent'>Pick-up</span> or <span className='accent'>Delivery</span>?</h1>
            <p>Call us and place your order for delivery or come visit us at 2121 Grand Central Ave, Horseheads, New York.
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