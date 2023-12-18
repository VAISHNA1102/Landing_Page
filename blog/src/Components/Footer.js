import React from 'react';
import './CSS/Footer.css'; // Import the CSS file for this component
import facebook from '../Img/facebook.jpg';
import Insta from '../Img/Insta.jpg';
import Youtube from '../Img/OIP.jpeg';
import mail from '../Img/mail.jpg';
import Logo from '../Img/Logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="table">
        <div className="row">
          <div className="cell1">
            <img src={Logo} alt="Logo" className="Flogo" />
          </div>
          <div className="cell">
            <div className="contact-info">
              <p>Contact</p>
              <p>foruagency11@gmail.com</p>
            </div>
            <div className="social-icons">
              <img src={facebook} alt="Facebook" className="social-icon" />
              <img src={Insta} alt="Instagram" className="social-icon" />
              <img src={Youtube} alt="YouTube" className="social-icon" />
              <img src={mail} alt="Mail" className="social-icon" />
            </div>
            <p className="copy-right">© 2023 All Rights Reserved By For U Agency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
