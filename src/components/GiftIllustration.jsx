export function GiftIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="gift-illustration">
      <defs>
        <linearGradient id="giftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff9a8b', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Gift box */}
      <rect x="50" y="80" width="100" height="80" rx="5" fill="url(#giftGradient)" stroke="#ff5a7a" strokeWidth="2" />
      
      {/* Box top edge */}
      <polygon points="50,80 100,40 150,80" fill="#ff8aab" stroke="#ff5a7a" strokeWidth="2" />
      
      {/* Ribbon horizontal */}
      <rect x="50" y="105" width="100" height="8" fill="#ffd700" stroke="#ffb700" strokeWidth="1" />
      
      {/* Ribbon vertical */}
      <rect x="97" y="80" width="6" height="80" fill="#ffd700" stroke="#ffb700" strokeWidth="1" />
      
      {/* Bow top */}
      <circle cx="85" cy="70" r="12" fill="#ffd700" stroke="#ffb700" strokeWidth="1.5" />
      <circle cx="115" cy="70" r="12" fill="#ffd700" stroke="#ffb700" strokeWidth="1.5" />
      
      {/* Bow center */}
      <circle cx="100" cy="80" r="8" fill="#ffb700" />
      
      {/* Sparkles */}
      <circle cx="140" cy="60" r="3" fill="#fff" opacity="0.8" />
      <circle cx="160" cy="100" r="2" fill="#fff" opacity="0.6" />
      <circle cx="70" cy="50" r="2.5" fill="#fff" opacity="0.7" />
    </svg>
  );
}

export default GiftIllustration;
