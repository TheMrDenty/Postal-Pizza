import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.scss'
import Links from '../Links'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
          <div className='footer-links'>
            <Links />
          </div>
          <div className='icons'>
            <a href='https://facebook.com/'><FontAwesomeIcon icon={faFacebook} className='facebook-link' size='3x'/></a>
            <a href='https://twitter.com/'><FontAwesomeIcon icon={faTwitter} className='twitter-link' size='3x'/></a>
          </div>
      </div>
    </div>
  )
}

export default Footer