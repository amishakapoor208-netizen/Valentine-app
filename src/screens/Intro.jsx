import { useState } from 'react';

export function Intro({ onNext }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="screen intro">
      <div className="intro-content">
        <h1 className="title" style={{ animationDelay: '0s' }}>
          Happy Valentine's Day 💖
        </h1>
        
        <div className="floating-heart-emoji">💕</div>

        {!showMessage ? (
          <button 
            className="button button-primary"
            onClick={() => setShowMessage(true)}
          >
            Click here for a surprise 🎉
          </button>
        ) : (
          <div className="intro-message slideInUp">
            <p>I have something special to share with you...</p>
            <button 
              className="button button-primary"
              onClick={onNext}
            >
              Let's begin →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Intro;
