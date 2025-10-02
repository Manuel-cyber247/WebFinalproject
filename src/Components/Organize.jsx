import React, { useState, useEffect, useRef } from 'react';
import './Organize.css';
import boardview from '../Assets/boardview.png';
import listview from '../Assets/listview.png';
import calendarview from '../Assets/calendarview.png';
import galleryview from '../Assets/galleryview.png';

function Organize() {
    const [activeView, setActiveView] = useState('board');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const views = [
        { id: 'board', name: 'Board', image: boardview },
        { id: 'list', name: 'List', image: listview },
        { id: 'calendar', name: 'Calendar', image: calendarview },
        { id: 'gallery', name: 'Gallery', image: galleryview }
    ];

    // Auto-rotate images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveView(prev => {
                const currentIndex = views.findIndex(view => view.id === prev);
                const nextIndex = (currentIndex + 1) % views.length;
                return views[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [views.length]);

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

    const handleViewClick = (viewId) => {
        setActiveView(viewId);
    };

    const currentView = views.find(view => view.id === activeView);

    return (
        <div 
            ref={sectionRef} 
            className={`organize-section ${isVisible ? 'visible' : ''}`}
        >
            <div className='boss'> 
                <div className="view-buttons">
                    {views.map(view => (
                        <button
                            key={view.id}
                            className={`view-button ${activeView === view.id ? 'active' : ''}`}
                            onClick={() => handleViewClick(view.id)}
                        >
                            {view.name}
                        </button>
                    ))}
                </div>

                <div className="image-container">
                    <img 
                        src={currentView?.image} 
                        alt={`${currentView?.name} view`}
                        className="view-image"
                    />
                </div>
            </div>
            
            <div className="organize-text">
                <h1 className="emoji">😮</h1>
                <h1 className="title">Organize and visualize work, your way</h1>
                <p className="description">
                    Work in the way that suits you best. Manage all your tasks on a Kanban, table, gallery, and calendar view. Focus on the highest priority items with board filters, and save an unlimited number of filtered views for quick access later.
                </p>
            </div>
        </div>
    );
}

export default Organize;