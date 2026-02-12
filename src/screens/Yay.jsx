export function Yay({ onNext }) {
  return (
    <div className="screen yay">
      <div className="screen-content">
        <div className="celebration">
          <h1 className="celebration-title">
            YES! 🎉💕
          </h1>
          
          <div className="confetti-emoji">
            <span>🎊</span>
            <span>💖</span>
            <span>🎉</span>
            <span>💕</span>
            <span>🌹</span>
          </div>
          
          <p className="celebration-text">
            You just made me the happiest person alive!
          </p>
          
          <p className="celebration-subtext">
            I love you so much! 💕
          </p>
          
          <button 
            className="button button-primary"
            onClick={onNext}
          >
            One Last Thing...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Yay;
