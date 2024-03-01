import React from 'react';
import './footer.css';
import fb from '../../img/fb.png';
import twitter from '../../img/twitter.png';
import insta from '../../img/insta.png';
import linkedin from '../../img/linkedin.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links-div'>
            <h4>For Business</h4>
              <a href="/employer">
                <p>Employer</p>
              </a>
              <a href="/healthplan">
                <p>healthplan</p>
              </a>
              <a href="/individual">
                <p>individual</p>
              </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
                <p>Resource Center</p>
              </a>
              <a href="/resource">
                <p>Testimonials</p>
              </a>
              <a href="/resource">
                <p>STV</p>
              </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
              <a href="/employer">
                <p>Swing Tech</p>
              </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Company</h4>
              <a href="/about">
                <p>About</p>
              </a>
              <a href="/press">
                <p>Press</p>
              </a>  
              <a href="/career">
                <p>Career</p>
              </a>
              <a href="/contact">
                <p>Contact</p>
              </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Cooming soon on</h4>
            <div className='socialmedia'>
              <p><img src={fb} alt="" /></p>
              <p><img src={twitter} alt="" /></p>
              <p><img src={linkedin} alt="" /></p>
              <p><img src={insta} alt="" /></p>
            </div>
          </div>
        </div>

      <hr></hr>
      <div className='sb__footer-bellow'>
        <div className='sb__footer-copyright'>
          <p>
            @{new Date().getFullYear} CodeInn. All right reserved.
          </p>
        </div>
        <div className='sb__footer-bellow-links'>
          <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          <a href="/privacy"><div><p>Privacy</p></div></a>
          <a href="/security"><div><p>Security</p></div></a>
          <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
        </div>
      </div>  
      </div>
    </div>
  )
}

export default Footer;