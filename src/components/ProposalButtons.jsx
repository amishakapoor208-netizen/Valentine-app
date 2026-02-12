import { useState } from 'react';

export function ProposalButtons({ onYes, onNo }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 150;
    setNoPosition({ x: randomX, y: randomY });
  };

  const handleNoTouch = (e) => {
    e.preventDefault();
    handleNoHover();
  };

  return (
    <div className="proposal-buttons">
      <button 
        className="button button-yes"
        onClick={onYes}
        aria-label="Say yes to be my valentine"
      >
        YES! 💕
      </button>
      
      <button
        className="button button-no"
        onMouseEnter={handleNoHover}
        onClick={handleNoHover}
        onTouchStart={handleNoTouch}
        style={{
          transform: `translate(${noPosition.x}px, ${noPosition.y}px)`
        }}
        aria-label="Say no to be my valentine"
      >
        No thanks
      </button>
    </div>
  );
}

export default ProposalButtons;
