import React from 'react';
import '../styles/Footer.css';
import johnfrontdev from '../img/johnfrontdev_footer.svg';

function Footer() {
  const urlInsta = "https://www.instagram.com/johnfrontdev"
  return (
    <div className='footer'>
      <a target="_blank" rel="noreferrer" href={urlInsta} >
        <img src={johnfrontdev} alt="Instagram" />
      </a>
    </div>
  );
}

export default Footer;
