// HeaderSection.jsx
import React from 'react';
import './HeaderSection.css';
import commentanimation from "../Assets/comment-animation.mp4";
import handshake from '../Assets/hand-shake.png';

const HeaderSection = () => {
  return (
    <div className='header-section'>
      <div className="header-content">
        <h1><img src={handshake} alt="Handshake" />Align your teams with real-time collaboration</h1>
        <p>
          Keep everyone in sync with card comments, @mention teammates to get their attention, 
          and set board permissions to share your board with the entire team or specific individuals.
        </p>
      </div>
      <div className="video-container">
        <video src={commentanimation} autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default HeaderSection;