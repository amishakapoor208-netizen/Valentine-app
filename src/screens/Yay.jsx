import { useEffect } from 'react';

export function Yay({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(onNext, 4000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="screen-wrapper yay-screen">
      <div className="yay-content">
        <h1 className="yay-title bounce">
          YES! 🎉💕
        </h1>
        
        <div className="confetti-container">
          <span className="confetti">🎊</span>
          <span className="confetti">💖</span>
          <span className="confetti">🎉</span>
          <span className="confetti">💕</span>
          <span className="confetti">🌹</span>
          <span className="confetti">✨</span>
          <span className="confetti">💝</span>
        </div>
        
        <p className="yay-text">
          You just made me the happiest person alive! 💕
        </p>
        
        <p className="yay-subtext">
          Get ready for something special...
        </p>

        <div className="progress-dots">
          <span className="dot pulse"></span>
          <span className="dot pulse" style={{ animationDelay: '0.1s' }}></span>
          <span className="dot pulse" style={{ animationDelay: '0.2s' }}></span>
        </div>
      </div>
    </div>
  );
}

export default Yay;

