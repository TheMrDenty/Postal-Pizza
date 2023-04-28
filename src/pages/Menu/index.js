import React from 'react'
import './styles.scss'

function Menu() {
  return (
    <div className='menu-container'>
      <table className='std-pizzas'>
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
      </table>

      <div className='toppings'>
        <p><span className='bold'>toppings -</span> pepperoni, sausage, ham, bacon, meat sauce, mushrooms, peppers, onions, jalapeños, black olives, banana peppers</p>
      </div>
      
      <table className='special-pizzas'>
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
        
        
      </table>

      

      <table className='specials'>
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
        
        
      </table>
      
      <table className='specials'>
        <tr>
          <th className='title'><h4 className='menu-accent'>vmf subs</h4></th>
          <td className='desc'></td>
          <td className='pricing'><h4 className='menu-bold'>7in</h4></td>
          <td className='pricing'><h4 className='menu-bold'>14in</h4></td>
          <td className='pricing'></td>
          <td className='pricing'></td>
        </tr>
        <tr>
          <th className='title'><h4 className='menu-accent'>supervisor</h4></th>
          <td className='desc'>meatball</td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
        </tr>
        <tr>
        <th className='title'><p>mail handlers</p></th>
          <td className='desc'>cheesesteak</td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
        </tr>
        <tr>
          <th className='title'><p>rural</p></th>
          <td className='desc'>buffalo chicken</td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
        </tr>
        <tr>
          <th className='title'><p>cca</p></th>
          <td className='desc'>chicken spedie</td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
        </tr>
        <tr>
          <th className='title'><p>ptf</p></th>
          <td className='desc'>hot ham and cheese</td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
        </tr>
        <tr>
          <th className='title'><p>union stewards</p></th>
          <td className='desc'>johnny burger</td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
        </tr>
        <tr>
        <th className='title'><p>clerk</p></th>
          <td className='desc'>King Louie, ham, boneless chicken, cheese</td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
          <td className='pricing'><p></p></td>
        </tr>
        
        
        
        
      </table>

   </div>
  )
}

export default Menu