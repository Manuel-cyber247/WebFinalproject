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
  const [currentStep, setCurrentStep] = useState(0);

  // Icons in the sequence they should appear
  const icons = [
    { id: 'bell', image: red, className: 'float-icon_bell' },
    { id: 'green', image: hsix_image, className: 'float-icon_green' },
    { id: 'man', image: htwo_image, className: 'float-icon_blue' },
    { id: 'message', image: hfive_image, className: 'float-icon_yellow' },
    { id: 'verify', image: hthree_image, className: 'float-icon_red' }
  ];

  useEffect(() => {
    const steps = [
      // Step 0: Show bell
      () => setVisibleIcons(['bell']),
      // Step 1: Show bell + green
      () => setVisibleIcons(['bell', 'green']),
      // Step 2: Show bell + green + man
      () => setVisibleIcons(['bell', 'green', 'man']),
      // Step 3: Show bell + green + man + message
      () => setVisibleIcons(['bell', 'green', 'man', 'message']),
      // Step 4: Show all icons
      () => setVisibleIcons(['bell', 'green', 'man', 'message', 'verify']),
      // Step 5: Show all icons for a moment
      () => setVisibleIcons(['bell', 'green', 'man', 'message', 'verify']),
      // Step 6: Hide all icons
      () => setVisibleIcons([]),
      // Step 7: Pause before restarting
      () => setVisibleIcons([])
    ];

    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = (prev + 1) % steps.length;
        steps[nextStep]();
        return nextStep;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

export default OpenSource