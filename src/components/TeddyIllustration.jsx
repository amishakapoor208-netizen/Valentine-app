export function TeddyIllustration() {
  return (
    <svg viewBox="0 0 200 240" className="teddy-illustration">
      <defs>
        <linearGradient id="teddyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D2691E', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Head */}
      <circle cx="100" cy="80" r="40" fill="url(#teddyGradient)" stroke="#654321" strokeWidth="2" />

      {/* Ears */}
      <circle cx="65" cy="45" r="18" fill="url(#teddyGradient)" stroke="#654321" strokeWidth="2" />
      <circle cx="135" cy="45" r="18" fill="url(#teddyGradient)" stroke="#654321" strokeWidth="2" />

      {/* Inner ears */}
      <circle cx="65" cy="50" r="10" fill="#A0826D" />
      <circle cx="135" cy="50" r="10" fill="#A0826D" />

      {/* Eyes */}
      <circle cx="85" cy="70" r="6" fill="#2f3542" />
      <circle cx="115" cy="70" r="6" fill="#2f3542" />

      {/* Eye shine */}
      <circle cx="86" cy="68" r="2" fill="white" />
      <circle cx="116" cy="68" r="2" fill="white" />

      {/* Nose */}
      <circle cx="100" cy="85" r="6" fill="#2f3542" />

      {/* Snout area */}
      <ellipse cx="100" cy="95" rx="18" ry="14" fill="#A0826D" />

      {/* Mouth */}
      <path d="M 100 95 Q 95 102 90 100" stroke="#654321" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 100 95 Q 105 102 110 100" stroke="#654321" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Body */}
      <ellipse cx="100" cy="150" rx="35" ry="45" fill="url(#teddyGradient)" stroke="#654321" strokeWidth="2" />

      {/* Belly */}
      <ellipse cx="100" cy="155" rx="22" ry="30" fill="#A0826D" />

      {/* Heart on belly */}
      <path d="M 100 140 L 107 135 Q 112 130 116 135 Q 118 140 100 155 Q 82 140 84 135 Q 88 130 93 135 Z" 
            fill="#ff6b9d" stroke="#ff5a7a" strokeWidth="1" />

      {/* Arms */}
      <ellipse cx="70" cy="140" rx="15" ry="35" fill="url(#teddyGradient)" stroke="#654321" strokeWidth="2" 
               transform="rotate(-25 70 140)" />
      <ellipse cx="130" cy="140" rx="15" ry="35" fill="url(#teddyGradient)" stroke="#654321" strokeWidth="2" 
               transform="rotate(25 130 140)" />

      {/* Paw pads on arms */}
      <circle cx="60" cy="170" r="8" fill="#A0826D" stroke="#654321" strokeWidth="1" />
      <circle cx="140" cy="170" r="8" fill="#A0826D" stroke="#654321" strokeWidth="1" />

      {/* Legs */}
      <ellipse cx="80" cy="195" rx="14" ry="30" fill="url(#teddyGradient)" stroke="#654321" strokeWidth="2" />
      <ellipse cx="120" cy="195" rx="14" ry="30" fill="url(#teddyGradient)" stroke="#654321" strokeWidth="2" />

      {/* Paw pads on legs */}
      <ellipse cx="80" cy="225" rx="10" ry="8" fill="#A0826D" stroke="#654321" strokeWidth="1" />
      <ellipse cx="120" cy="225" rx="10" ry="8" fill="#A0826D" stroke="#654321" strokeWidth="1" />

      {/* Toe pads */}
      <circle cx="75" cy="228" r="2" fill="#654321" />
      <circle cx="80" cy="230" r="2" fill="#654321" />
      <circle cx="85" cy="228" r="2" fill="#654321" />
      <circle cx="115" cy="228" r="2" fill="#654321" />
      <circle cx="120" cy="230" r="2" fill="#654321" />
      <circle cx="125" cy="228" r="2" fill="#654321" />
    </svg>
  );
}

export default TeddyIllustration;
