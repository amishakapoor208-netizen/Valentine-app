import { useState } from 'react';

export function ProposalButtons({ onYes, onNo }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noButtonRef, setNoButtonRef] = useState(null);

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="proposal-buttons">
      <button 
        className="button button-yes"
        onClick={onYes}
      >
        Yes! 💕
      </button>
      
      <button
        ref={setNoButtonRef}
        className="button button-no"
        onMouseEnter={handleNoHover}
        onClick={handleNoHover}
        style={{
          transform: `translate(${noPosition.x}px, ${noPosition.y}px)`
        }}
      >
        No
      </button>
    </div>
  );
}

export default ProposalButtons;
