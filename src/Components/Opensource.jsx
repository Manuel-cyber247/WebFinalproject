import React, { useEffect, useState } from "react";
import "./Opensource.css";
import "./Navbar.css";
import hfour_image from "../assets/hfour.png";
import red from "../assets/red.png";
import htwo_image from "../assets/htwo.png";
import hthree_image from "../assets/hthree.png";
import hfive_image from "../assets/hfive.png";
import hsix_image from "../assets/one.jpeg";

function OpenSource() {
  const [visibleIcons, setVisibleIcons] = useState([]);
  const [phase, setPhase] = useState('appearing'); // 'appearing' or 'disappearing'
  const [currentIndex, setCurrentIndex] = useState(0);

  // Icons in the sequence they should appear
  const icons = [
    { id: 'bell', image: red, className: 'float-icon_bell' },
    { id: 'green', image: hsix_image, className: 'float-icon_green' },
    { id: 'man', image: htwo_image, className: 'float-icon_blue' },
    { id: 'message', image: hfive_image, className: 'float-icon_yellow' },
    { id: 'verify', image: hthree_image, className: 'float-icon_red' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase === 'appearing') {
        // Appearing phase
        if (currentIndex < icons.length) {
          if (currentIndex === 2) { // When man appears
            setVisibleIcons(prev => [...prev, 'man']);
            setTimeout(() => {
              setVisibleIcons(prev => [...prev, 'message']);
            }, 300);
          } else {
            setVisibleIcons(prev => [...prev, icons[currentIndex].id]);
          }
          setCurrentIndex(prev => prev + 1);
        } else {
          // All icons have appeared, switch to disappearing phase after a pause
          setTimeout(() => {
            setPhase('disappearing');
            setCurrentIndex(icons.length - 1);
          }, 1000);
        }
      } else {
        // Disappearing phase
        if (currentIndex >= 0) {
          if (currentIndex === 2) { // When removing man and message together
            setVisibleIcons(prev => prev.filter(id => id !== 'man' && id !== 'message'));
          } else {
            setVisibleIcons(prev => prev.filter(id => id !== icons[currentIndex].id));
          }
          setCurrentIndex(prev => prev - 1);
        } else {
          // All icons have disappeared, switch back to appearing phase
          setPhase('appearing');
          setCurrentIndex(0);
        }
      }
    }, 1000); // Each step takes 1 second
    
    return () => clearInterval(interval);
  }, [phase, currentIndex]);

  return (
    <div className="opensource">
      <div className="hero-one">
        <h1>Open source <br /> project management<br /> for <span className="highlight">technical teams</span></h1>
        <p>Keep everything and everyone on track</p>
        <button>Get started</button>
        <p>⭐ Over 13k stars on Github and counting</p>
      </div>

      <div className="hero-two">
        <img src={hfour_image} alt="Open Source" className="main-hero-img" />

        {/* Floating icons with sequential animation */}
        {icons.map(icon => (
          <img 
            key={icon.id}
            src={icon.image} 
            alt={`${icon.id} icon`} 
            className={`${icon.className} ${visibleIcons.includes(icon.id) ? 'visible' : 'hidden'}`} 
          />
        ))}
      </div>
    </div>
  );
}

export default OpenSource;