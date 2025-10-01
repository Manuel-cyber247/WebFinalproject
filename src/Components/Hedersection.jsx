// HeaderSection.jsx
import React from 'react';
import './HeaderSection.css';
import commentanimation from "../Assets/comment-animation.mp4"
import handshake from '../Assets/hand-shake.png'

const HeaderSection = () => {
  return (
    <div>
      <div className="header-content">
        <h1><img src={handshake} alt="" /><br/>Align your teams with <br/> real-time <br/> collaboration</h1>
        <p>
          Keep everyone in sync with card comments, @mention teammates to get their attention, 
          and set board permissions to share your board with the entire team or specific individuals.
        </p>
      </div>
      <video src={commentanimation}></video>
    </div>
  );
};

export default HeaderSection;