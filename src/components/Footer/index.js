import './styles.scss'
import Links from '../Links'
function Footer() {
  return (
    <div className='footer-container'>
      <div className='hours-container'>
        <h1>hours</h1>
        <ul className='hours'>
          <li>
            <h4>monday</h4>
            <p>10:00 AM - 10:00 PM</p>
          </li>
          <li>
            <h4>tuesday</h4>
            <p>10:00 AM - 10:00 PM</p>
          </li>
          <li>
            <h4>wednesday</h4>
            <p>10:00 AM - 10:00 PM</p>
          </li>
          <li>
            <h4>thursday</h4>
            <p>10:00 AM - 10:00 PM</p>
          </li>
          <li>
            <h4>friday</h4>
            <p>10:00 AM - 12:00 AM</p>
          </li>
          <li>
            <h4>saturday</h4>
            <p>10:00 AM - 12:00 AM</p>
          </li>
          <li>
            <h4>sunday</h4>
            <p>10:00 AM - 10:00 PM</p>
          </li>
        </ul>
      </div>
      <div className='footer'>
          <div className='footer-links'>
            <Links />
          </div>
      </div>
    </div>
  )
}
export default Footer