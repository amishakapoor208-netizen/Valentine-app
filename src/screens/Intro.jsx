import { useState } from 'react';
import GiftIllustration from '../components/GiftIllustration';

export function Intro({ onNext }) {
  const [clicked, setClicked] = useState(false);

  const handleOpen = () => {
    setClicked(true);
    setTimeout(onNext, 800);
  };

  return (
    <div className="screen-wrapper">
      <div className="intro-content">
        <div className="gift-container">
          <GiftIllustration />
        </div>

        <h1 className="intro-title">Hey Cutiepie 💕</h1>

        <p className="intro-subtitle">
          This Valentine, I made a little something special for you.
        </p>

        <button 
          className="button button-primary open-button"
          onClick={handleOpen}
          disabled={clicked}
        >
          {clicked ? 'Opening...' : 'Open it'}
        </button>
      </div>
    </div>
  );
}

export default Intro;

