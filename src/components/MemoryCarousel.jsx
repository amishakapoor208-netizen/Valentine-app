import { useState, useRef } from 'react';
import { memoriesData } from '../data/memoriesData';

export function MemoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? memoriesData.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === memoriesData.length - 1 ? 0 : prev + 1
    );
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const current = memoriesData[currentIndex];

  return (
    <div 
      className="memory-carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel-content">
        <div className="image-with-buttons">
          <button className="carousel-btn prev" onClick={goToPrevious} aria-label="Previous memory">
            ❮
          </button>
          
          <div className="memory-image">
            <img src={current.image} alt={current.title} loading="lazy" />
          </div>

          <button className="carousel-btn next" onClick={goToNext} aria-label="Next memory">
            ❯
          </button>
        </div>

        <div className="memory-info">
          <h3>{current.title}</h3>
          <p>{current.description}</p>
          <span className="memory-date">{current.date}</span>
        </div>
      </div>

      <div className="carousel-indicators">
        {memoriesData.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Memory ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoryCarousel;
