import { useState } from 'react';
import CatIllustration from '../components/CatIllustration';

export function Proposal({ onYes }) {
  const [answered, setAnswered] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYes = () => {
    setAnswered(true);
    setTimeout(onYes, 600);
  };

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 250;
    const randomY = (Math.random() - 0.5) * 150;
    setNoButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px) scale(${0.85 + Math.random() * 0.15})`,
      transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
    });
  };

  return (
    <div className="screen-wrapper">
      <div className="proposal-content">
        {!answered ? (
          <>
            <div className="cat-container">
              <CatIllustration />
            </div>

            <h1 className="proposal-title">Will you be my Valentine? 💝</h1>
            
            <p className="proposal-text">
              I want to spend every moment with you, creating beautiful memories together...
            </p>
            
            <div className="proposal-buttons">
              <button 
                className="button button-yes"
                onClick={handleYes}
              >
                YES! 💕
              </button>
              
              <button
                className="button button-no"
                style={noButtonStyle}
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                onTouchStart={handleNoHover}
              >
                No thanks
              </button>
            </div>
          </>
        ) : (
          <div className="proposal-response slideInUp">
            <h2>🎉 You just made me the happiest! 🎉</h2>
            <p>Let me show you something special...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Proposal;

