import { useState } from 'react';
import CuteGiftBox from '../components/CuteGiftBox';

export function Intro({ onNext }) {
  const [clicked, setClicked] = useState(false);

  const handleOpen = () => {
    setClicked(true);
    setTimeout(onNext, 1200);
  };

  return (
    <div className="screen-wrapper">
      <div className="intro-content">
        <div className="cute-gift-container" onClick={handleOpen} style={{ cursor: 'pointer' }}>
          <CuteGiftBox />
        </div>

        <h1 className="intro-title">Hey Cutiepie 💕</h1>

        <p className="intro-subtitle">
          {clicked ? 'Here comes the surprise!' : 'Click the gift box to open it!'}
        </p>

        <button 
          className="button button-primary open-button"
          onClick={handleOpen}
          disabled={clicked}
        >
          {clicked ? 'Opening...' : 'Open the gift'}
        </button>
      </div>
    </div>
  );
}

export default Intro;

