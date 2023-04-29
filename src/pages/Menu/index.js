import React from 'react'
import './styles.scss'
import menu from '../../data/Postal-Pizza-menu.pdf'

function Menu() {
  return (
    <div className='menu-container'>

      <div className='menu-title'>
        <h1 className='menu-accent'>menu</h1>
        
      </div>

      <hr />
      
      <table className='std-pizzas'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>standard pizzas</h4></th>
            <td className='desc'></td>
            <td className='pricing'><h4 className='menu-bold'>small</h4></td>
            <td className='pricing'><h4 className='menu-bold'>medium</h4></td>
            <td className='pricing'><h4 className='menu-bold'>large</h4></td>
            <td className='pricing'><h4 className='menu-bold'>sheet</h4></td>
          </tr>
          <tr>
            <th className='title'><h5>route 66</h5></th>
            <td className='desc'><p>cheese</p></td>
            <td className='pricing'><p>$6.99</p></td>
            <td className='pricing'><p>$13.99</p></td>
            <td className='pricing'><p>$15.99</p></td>
            <td className='pricing'><p>$20.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 59</h5></th>
            <td className='desc'><p>1 topping</p></td>
            <td className='pricing'><p>$8.49</p></td>
            <td className='pricing'><p>$16.74</p></td>
            <td className='pricing'><p>$19.48</p></td>
            <td className='pricing'><p>$25.48</p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 43</h5></th>
            <td className='desc'><p>2 topping</p></td>
            <td className='pricing'><p>$9.99</p></td>
            <td className='pricing'><p>$19.49</p></td>
            <td className='pricing'><p>$22.97</p></td>
            <td className='pricing'><p>$29.97</p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 34</h5></th>
            <td className='desc' ><p>3 topping</p></td>
            <td className='pricing'><p>$11.49</p></td>
            <td className='pricing'><p>$22.24</p></td>
            <td className='pricing'><p>$26.46</p></td>
            <td className='pricing'><p>$34.46</p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 29</h5></th>
            <td className='desc'><p>garlic</p></td>
            <td className='pricing'><p>$7.99</p></td>
            <td className='pricing'><p>$14.99</p></td>
            <td className='pricing'><p>$17.99</p></td>
            <td className='pricing'><p>$23.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>swing route</h5></th>
            <td className='desc' ><p>5 variety pizza</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p>$34.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>gluten free</h5></th>
            <td className='desc'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p>$14.99</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
        </tbody>
      </table>

      <div className='toppings'>
        <p><span className='bold'>toppings -</span> pepperoni, sausage, ham, bacon, meat sauce, mushrooms, peppers, onions, jalapeños, black olives, banana peppers</p>
      </div>
      
      <table className='special-pizzas'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>1st class specialty pizzas</h4></th>
            <td className='desc'></td>
            <td className='pricing'></td>
            <td className='pricing'><h4 className='menu-bold'>medium</h4></td>
            <td className='pricing'><h4 className='menu-bold'>large</h4></td>
            <td className='pricing'><h4 className='menu-bold'>sheet</h4></td>
          </tr>
          <tr>
            <th className='title'></th>
            <td className='desc'></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p>$19.99</p></td>
            <td className='pricing'><p>$22.99</p></td>
            <td className='pricing'><p>$35.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 90</h5></th>
            <td className='desc'><p>honey mustard & chicken breast</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 55</h5></th>
            <td className='desc'><p>chicken & bacon, choose ranch/red sauce</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 19</h5></th>
            <td className='desc'><p>buffalo chicken</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 6</h5></th>
            <td className='desc'><p>margherita - tomato, mozzarella, basil</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 48</h5></th>
            <td className='desc'><p>meat lovers - bacon, ham, sausage, pepperoni</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 81</h5></th>
            <td className='desc'><p>supreme - 2 meats, 2 veggies</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 16</h5></th>
            <td className='desc'><p>veggie</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 2</h5></th>
            <td className='desc'><p>pickle pizza</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 58</h5></th>
            <td className='desc'><p>Hawaiian</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>route 1</h5></th>
            <td className='desc'><p>breakfast pizza - bacon/sausage (sheet only)</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p>$26.99</p></td>
          </tr>
        </tbody>
        
      </table>

      

      <table className='specials'>
        <tbody>
          <tr>
            <th className='title'></th>
            <td className='desc'></td>
            <td className='pricing'><h4 className='menu-bold'>small</h4></td>
            <td className='pricing'><h4 className='menu-bold'>medium</h4></td>
            <td className='pricing'><h4 className='menu-bold'>large</h4></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h4 className='menu-accent'>the overtime masker</h4></th>
            <td className='desc' ></td>
            <td className='pricing'><p>$7.99</p></td>
            <td className='pricing'><p>$13.99</p></td>
            <td className='pricing'><p>$17.99</p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><p><span className='bold'>stromboli</span> sauce, pepperoni, sausage, meat sauce, peppers, ham</p></th>
            <td className='desc'></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h4 className='menu-accent'>204b - moon pie</h4></th>
            <td className='desc' ></td>
            <td className='pricing'><p>$5.99</p></td>
            <td className='pricing'><p>$10.99</p></td>
            <td className='pricing'><p>$14.99</p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><p>garlic base, broccoli, cheese, ham</p></th>
            <td className='desc'></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
        </tbody>
        
      </table>
      
      <table className='hot-subs'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>vmf subs</h4></th>
            <td className='desc'></td>
            <td className='pricing'><h4 className='menu-bold'>7in</h4></td>
            <td className='pricing'><h4 className='menu-bold'>14in</h4></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'></th>
            <td className='desc'></td>
            <td className='pricing'><p>$6.99</p></td>
            <td className='pricing'><p>$9.99</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>supervisor</h5></th>
            <td className='desc'><p>meatball</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
          <th className='title'><h5>mail handlers</h5></th>
            <td className='desc'><p>cheesesteak</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>rural</h5></th>
            <td className='desc'><p>buffalo chicken</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>cca</h5></th>
            <td className='desc'><p>chicken spedie</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>ptf</h5></th>
            <td className='desc'><p>hot ham and cheese</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
            <th className='title'><h5>union stewards</h5></th>
            <td className='desc'><p>johnny burger</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
          <tr>
          <th className='title'><h5>clerk</h5></th>
            <td className='desc'><p>King Louie, ham, boneless chicken, cheese</p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
            <td className='pricing'><p></p></td>
          </tr>
        </tbody>
      </table>

      <table className='cold-subs'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>metris cold subs</h4></th>
            <td className='desc'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>maintenance</h5></th>
            <td className='desc'><p>italian</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>post master</h5></th>
            <td className='desc'><p>tuna</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>pse</h5></th>
            <td className='desc'><p>ham and cheese</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>rca</h5></th>
            <td className='desc'><p>turkey</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>fmla</h5></th>
            <td className='desc'><p>veggie</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
        </tbody>
      </table>

      <table className='salads'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>undertime salads</h4></th>
            <td className='desc'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>garden salad</h5></th>
            <td className='desc'></td>
            <td className='pricing'><p>$6.99</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>chicken wing</h5></th>
            <td className='desc'></td>
            <td className='pricing'><p>$9.99</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>chicken speedie</h5></th>
            <td className='desc'></td>
            <td className='pricing'><p>$9.99</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
        </tbody>
      </table>

      <table className='wings'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>express wings</h4></th>
            <td className='desc'></td>
            <td className='pricing'><h4 className='menu-bold'>6</h4></td>
            <td className='pricing'><h4 className='menu-bold'>dozen</h4></td>
            <td className='pricing'><h4 className='menu-bold'>double</h4></td>
            <td className='pricing'><h4 className='menu-bold'>bucket</h4></td>
          </tr>
          <tr>
            <th className='title'><h5>traditional</h5></th>
            <td className='desc'></td>
            <td className='pricing'><p>$7.99</p></td>
            <td className='pricing'><p>$14.99</p></td>
            <td className='pricing'><p>$27.99</p></td>
            <td className='pricing'><p>$52.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>boneless</h5></th>
            <td className='desc'></td>
            <td className='pricing'><p>$5.99</p></td>
            <td className='pricing'><p>$11.99</p></td>
            <td className='pricing'><p>$22.99</p></td>
            <td className='pricing'></td>
          </tr>
        </tbody>
      </table>

      <div className='sauces'>
        <p><span className='bold'>sauces -</span> mild, medium, hot, garlic parm, bbq, honey bbq</p>
      </div>

      <table className='sides'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>pivots</h4></th>
            <td className='desc'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>priority</h5></th>
            <td className='desc'><p>french fries</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$2.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>first class</h5></th>
            <td className='desc'><p>mozzarella sticks</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$5.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>media</h5></th>
            <td className='desc'><p>chicken fingers</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$5.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>occupant</h5></th>
            <td className='desc'><p>jalapeño cheese bites</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$7.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>registered</h5></th>
            <td className='desc'><p>pepperjack cheese bites</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$7.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>certified</h5></th>
            <td className='desc'><p>breaded cauliflower</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$7.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>pizza frites</h5></th>
            <td className='desc'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>3 for $5</p></td>
          </tr>
        </tbody>
       
      </table>

      <table className='bundles'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>party packs</h4></th>
            <td className='desc'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>8hr</h5></th>
            <td className='desc'><p>large pizza, dozen wings, one quart soda</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$28.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>10hr</h5></th>
            <td className='desc'><p>sheet pizza, 2 dozen wings, one quart soda</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$46.99</p></td>
          </tr>
          <tr>
            <th className='title'><h5>12hr</h5></th>
            <td className='desc'><p>sheet pizza, bucket wings, two-quart soda</p></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'><p>$65.99</p></td>
          </tr>
        </tbody>
      </table>

      <table className='beverages'>
        <tbody>
          <tr>
            <th className='title'><h4 className='menu-accent'>beverages</h4></th>
            <td className='desc'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
          <tr>
            <th className='title'><h5>Pepsi Products</h5></th>
            <td className='desc'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
            <td className='pricing'></td>
          </tr>
        </tbody>
      </table>

      <div className='charges'>
        <p>We Deliver for the convenience of our customer.</p>
        <p>$15.00 minimum order is required.</p>
        <p>There is a $3.00 fee in the Horseheads and limited Elmira area.</p>
        <p>Cash prices. Credit cards add 2.9%.</p>
      </div>

      <div className='menu-btn'>
        <a href={menu} download><button className='btn'><h2>download menu</h2></button></a>
      </div>
   </div>


  )
}

export default Menu