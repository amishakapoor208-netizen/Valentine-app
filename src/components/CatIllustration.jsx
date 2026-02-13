export function CatIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="cat-illustration">
      <defs>
        <linearGradient id="catGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff9a8b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Head */}
      <circle cx="100" cy="100" r="50" fill="url(#catGradient)" stroke="#ff5a7a" strokeWidth="2" />

      {/* Ears */}
      <polygon points="70,60 60,20 75,50" fill="url(#catGradient)" stroke="#ff5a7a" strokeWidth="2" />
      <polygon points="130,60 140,20 125,50" fill="url(#catGradient)" stroke="#ff5a7a" strokeWidth="2" />

      {/* Inner ears */}
      <polygon points="70,55 65,35 72,50" fill="#ffd4d9" />
      <polygon points="130,55 135,35 128,50" fill="#ffd4d9" />

      {/* Eyes */}
      <circle cx="85" cy="90" r="5" fill="#2f3542" />
      <circle cx="115" cy="90" r="5" fill="#2f3542" />

      {/* Eye shine */}
      <circle cx="86" cy="88" r="2" fill="white" />
      <circle cx="116" cy="88" r="2" fill="white" />

      {/* Nose */}
      <polygon points="100,105 97,110 103,110" fill="#ff5a7a" />

      {/* Mouth */}
      <path d="M 100 110 Q 95 115 90 113" stroke="#ff5a7a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 100 110 Q 105 115 110 113" stroke="#ff5a7a" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Whiskers */}
      <line x1="50" y1="100" x2="75" y2="95" stroke="#ff5a7a" strokeWidth="1.5" />
      <line x1="50" y1="110" x2="75" y2="110" stroke="#ff5a7a" strokeWidth="1.5" />
      <line x1="150" y1="100" x2="125" y2="95" stroke="#ff5a7a" strokeWidth="1.5" />
      <line x1="150" y1="110" x2="125" y2="110" stroke="#ff5a7a" strokeWidth="1.5" />

      {/* Tongue */}
      <ellipse cx="100" cy="125" rx="8" ry="10" fill="#ff9aaa" />

      {/* Paws */}
      <circle cx="85" cy="150" r="8" fill="url(#catGradient)" stroke="#ff5a7a" strokeWidth="1.5" />
      <circle cx="115" cy="150" r="8" fill="url(#catGradient)" stroke="#ff5a7a" strokeWidth="1.5" />

      {/* Paw pads */}
      <circle cx="85" cy="152" r="3" fill="#ffd4d9" />
      <circle cx="115" cy="152" r="3" fill="#ffd4d9" />

      {/* Heart on chest */}
      <path d="M 100 125 L 105 120 Q 108 117 110 120 Q 112 125 100 135 Q 88 125 90 120 Q 92 117 95 120 Z" fill="#fff" opacity="0.8" />
    </svg>
  );
}

export default CatIllustration;
