import { useState } from 'react';
import HeartShape from '../components/HeartShape';

export function WhyYou({ onNext }) {
  const heartData = [
    { id: 1, text: 'You make me smile', color: '#ff9a9a' },
    { id: 2, text: 'I love being with you', color: '#ffb366' },
    { id: 3, text: 'You are my favorite', color: '#ff69b4' },
    { id: 4, text: 'You mean a lot to me', color: '#c9a3ff' }
  ];

  const [clickedHearts, setClickedHearts] = useState(new Set());

  const handleHeartClick = (id) => {
    const newSet = new Set(clickedHearts);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setClickedHearts(newSet);
  };

  const allClicked = clickedHearts.size === heartData.length;

  return (
    <div className="screen-wrapper">
      <div className="why-you-content">
        <h1 className="section-title">Why you? 💕</h1>
        <p className="section-subtitle">Tap each heart to know</p>

        <div className="hearts-interactive-grid">
          {heartData.map(heart => (
            <HeartShape
              key={heart.id}
              id={heart.id}
              color={heart.color}
              text={heart.text}
              isClicked={clickedHearts.has(heart.id)}
              onClick={handleHeartClick}
            />
          ))}
        </div>

        <button 
          className={`button button-primary continue-button ${allClicked ? 'ready' : 'disabled'}`}
          onClick={onNext}
          disabled={!allClicked}
        >
          {allClicked ? 'Continue →' : `Click all hearts (${clickedHearts.size}/${heartData.length})`}
        </button>
      </div>
    </div>
  );
}

export default WhyYou;

