export function CardOpening({ isOpening }) {
  return (
    <div className="card-opening-wrapper">
      <div className={`card-envelope ${isOpening ? 'opening' : ''}`}>
        {/* Envelope back */}
        <div className="envelope-back"></div>
        
        {/* Envelope front flaps */}
        <div className="envelope-flap top-flap"></div>
        <div className="envelope-flap bottom-flap"></div>
        
        {/* Card inside */}
        <div className="card-inside">
          {/* Teddy bear surprise */}
          <div className="teddy-surprise">
            <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" className="teddy-svg">
              {/* Head */}
              <circle cx="100" cy="80" r="45" fill="#8B6F47"/>
              
              {/* Ears */}
              <circle cx="65" cy="40" r="20" fill="#8B6F47"/>
              <circle cx="135" cy="40" r="20" fill="#8B6F47"/>
              <circle cx="65" cy="40" r="12" fill="#A0826D"/>
              <circle cx="135" cy="40" r="12" fill="#A0826D"/>
              
              {/* Eyes */}
              <circle cx="85" cy="70" r="6" fill="#2f3542"/>
              <circle cx="115" cy="70" r="6" fill="#2f3542"/>
              <circle cx="86" cy="68" r="2" fill="white"/>
              <circle cx="116" cy="68" r="2" fill="white"/>
              
              {/* Nose */}
              <ellipse cx="100" cy="85" rx="6" ry="5" fill="#2f3542"/>
              
              {/* Mouth */}
              <path d="M 100 85 Q 95 92 90 90" stroke="#2f3542" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M 100 85 Q 105 92 110 90" stroke="#2f3542" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Body */}
              <ellipse cx="100" cy="155" rx="40" ry="55" fill="#8B6F47"/>
              
              {/* Arms */}
              <ellipse cx="65" cy="140" rx="18" ry="35" fill="#8B6F47" transform="rotate(-25 65 140)"/>
              <ellipse cx="135" cy="140" rx="18" ry="35" fill="#8B6F47" transform="rotate(25 135 140)"/>
              
              {/* Paws */}
              <ellipse cx="50" cy="165" rx="14" ry="20" fill="#A0826D"/>
              <ellipse cx="150" cy="165" rx="14" ry="20" fill="#A0826D"/>
              
              {/* Toe pads */}
              <circle cx="48" cy="180" r="3" fill="#8B6F47"/>
              <circle cx="52" cy="182" r="3" fill="#8B6F47"/>
              <circle cx="148" cy="180" r="3" fill="#8B6F47"/>
              <circle cx="152" cy="182" r="3" fill="#8B6F47"/>
              
              {/* Heart on chest */}
              <path d="M 100 120 L 108 110 Q 115 105 120 110 Q 115 120 100 135 Q 85 120 80 110 Q 85 105 92 110 Z" fill="#ff69b4"/>
              
              {/* Belly */}
              <ellipse cx="100" cy="155" rx="25" ry="35" fill="#A0826D"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOpening;
