import { useState } from 'react';

export function WhyYou({ onNext }) {
  const heartData = [
    { id: 1, text: 'You make me smile', color: '#ff6b9d', emoji: '😊' },
    { id: 2, text: 'I love being with you', color: '#ff9a8b', emoji: '🥰' },
    { id: 3, text: 'You are my favorite', color: '#ffd699', emoji: '⭐' },
    { id: 4, text: 'You mean a lot to me', color: '#9dabff', emoji: '💜' }
  ];

  const [clickedHearts, setClickedHearts] = useState(new Set());

  const handleHeartClick = (id) => {
    const newSet = new Set(clickedHearts);
    newSet.add(id);
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
            <button
              key={heart.id}
              className={`interactive-heart ${clickedHearts.has(heart.id) ? 'clicked' : ''}`}
              style={{ 
                '--heart-color': heart.color,
                backgroundColor: clickedHearts.has(heart.id) ? heart.color : 'rgba(255,255,255,0.1)',
              }}
              onClick={() => handleHeartClick(heart.id)}
            >
              <div className="heart-shape">
                <span className="heart-emoji">{heart.emoji}</span>
              </div>
              {clickedHearts.has(heart.id) && (
                <p className="heart-text slideInUp">{heart.text}</p>
              )}
            </button>
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

