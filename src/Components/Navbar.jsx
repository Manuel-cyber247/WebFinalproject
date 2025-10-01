import React from 'react';
import './Navbar.css';
import focalboard_image from '../Assets/focalboard_image.png';
import './Opensource.css';
function Navbar() {
  return (
    <div className="navbar">
        <div className='brand'>
          
          <h1><a href="http://"><img src={focalboard_image} alt="Focalboard Logo" />Focalboard</a></h1>
        </div>
      <ul>
        <li><a href="#">Contribute</a></li>
        <li><a href="#">Github</a></li>
        <li><a href="#">Help Docs</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Download</a></li>
        <li><button class="nav-btn">Get Started</button></li>
      </ul>
      
    </div>
  );
}
export default Navbar;