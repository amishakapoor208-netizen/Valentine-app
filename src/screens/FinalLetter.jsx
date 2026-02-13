import { useState } from 'react';
import TeddyIllustration from '../components/TeddyIllustration';

export function FinalLetter() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="screen-wrapper final-letter-screen">
      <div className="final-letter-content">
        <h1 className="final-title">Happy Valentine's Day 💝</h1>
        <p className="final-subtitle">Tap the card to open</p>

        <div className="flip-card-container">
          <div 
            className={`flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={toggleFlip}
          >
            {/* Front of card - Teddy */}
            <div className="flip-card-front">
              <div className="teddy-wrapper">
                <TeddyIllustration />
              </div>
              <p className="card-hint">💕 Tap to open 💕</p>
            </div>

            {/* Back of card - Letter */}
            <div className="flip-card-back">
              <div className="letter-content-inner">
                <h2>My Dear Panda ❤️</h2>
                
                <p>
                  I don't know how to put everything into words, but I'm going to try...
                </p>
                
                <p>
                  These moments with you are the most precious gift. Every laugh, every 
                  smile, every glance we share fills my heart with so much love.
                </p>
                
                <p>
                  You are my greatest blessing. You make my days brighter, my heart fuller, 
                  and my life more meaningful. I want to cherish you, support you, and love 
                  you with all that I have.
                </p>
                
                <p>
                  Thank you for being you. Thank you for choosing to be with me.
                </p>
                
                <p className="signature">
                  Forever yours,<br/>
                  <span className="signature-name">With all my love 💕</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="final-hearts-display">
          <span className="heart-float">💕</span>
          <span className="heart-float" style={{ animationDelay: '0.2s' }}>❤️</span>
          <span className="heart-float" style={{ animationDelay: '0.4s' }}>💖</span>
          <span className="heart-float" style={{ animationDelay: '0.6s' }}>💗</span>
          <span className="heart-float" style={{ animationDelay: '0.8s' }}>💝</span>
        </div>

        <p className="final-message">
          Happy Valentine's Day! 🌹
        </p>
      </div>
    </div>
  );
}

export default FinalLetter;

