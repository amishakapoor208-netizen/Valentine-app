import { useState } from 'react';
import { memoriesData } from '../data/memoriesData';

export function MemoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const current = memoriesData[currentIndex];

  return (
    <div className="memory-carousel">
      <button className="carousel-btn prev" onClick={goToPrevious}>
        ❮
      </button>
      
      <div className="carousel-content">
        <div className="memory-image">
          <img src={current.image} alt={current.title} />
        </div>
        <div className="memory-info">
          <h3>{current.title}</h3>
          <p>{current.description}</p>
          <span className="memory-date">{current.date}</span>
        </div>
      </div>

      <button className="carousel-btn next" onClick={goToNext}>
        ❯
      </button>

      <div className="carousel-indicators">
        {memoriesData.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoryCarousel;
