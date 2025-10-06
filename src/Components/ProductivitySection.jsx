import React, { useEffect, useState, useRef } from 'react';
import './ProductivitySection.css';
import rocket from '../assets/rocket.png';
import video from '../assets/accelerateone.mp4';

function ProductivitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation - triggers every time
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`productivity-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="rocket-container">
        <img src={rocket} alt="Rocket" />
        <h1 className="title">Accelerate productivity</h1>
        <p className="description">
          Centralize, plan, and track all your work in one place. Focalboard helps your organization maintain a single source of truth, so your teams stay aligned to complete tasks, reach milestones, and achieve their goals.
        </p>
      </div>
      <div className='video-container'>
        <video autoPlay loop muted> 
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ProductivitySection;