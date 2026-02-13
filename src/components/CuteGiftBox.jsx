export function CuteGiftBox() {
  return (
    <svg
      viewBox="0 0 240 300"
      xmlns="http://www.w3.org/2000/svg"
      className="cute-gift-box"
    >
      <defs>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFB6E1', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFA0D2', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="lidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF8FC7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF7DB5', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Gift Box Body */}
      <rect
        x="40"
        y="120"
        width="160"
        height="120"
        rx="8"
        fill="url(#boxGrad)"
        stroke="#E070B0"
        strokeWidth="2"
        filter="url(#shadow)"
      />

      {/* Box inner shadow */}
      <rect
        x="44"
        y="124"
        width="152"
        height="112"
        rx="6"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1"
      />

      {/* Box Center Seam */}
      <line x1="120" y1="120" x2="120" y2="240" stroke="#E070B0" strokeWidth="2" />

      {/* Gift Box Lid - Left */}
      <path
        d="M 50 110 L 50 120 L 120 120 L 120 100 Q 120 90 110 85 L 60 85 Q 50 90 50 100 Z"
        fill="url(#lidGrad)"
        stroke="#D05CA0"
        strokeWidth="1.5"
        className="lid-left"
      />

      {/* Gift Box Lid - Right */}
      <path
        d="M 130 100 Q 130 90 140 85 L 190 85 Q 200 90 200 100 L 200 120 L 130 120 Z"
        fill="#FF8FC7"
        stroke="#D05CA0"
        strokeWidth="1.5"
        className="lid-right"
      />

      {/* Ribbon - Vertical */}
      <rect x="115" y="80" width="10" height="165" fill="#E31C23" opacity="0.9" />
      <rect x="117" y="82" width="6" height="161" fill="#FF6B8A" opacity="0.6" />

      {/* Ribbon - Horizontal */}
      <rect x="40" y="125" width="160" height="8" fill="#E31C23" opacity="0.9" />
      <rect x="42" y="127" width="156" height="4" fill="#FF6B8A" opacity="0.6" />

      {/* Bow - Center knot */}
      <circle cx="120" cy="105" r="12" fill="#E31C23" />
      <circle cx="120" cy="105" r="9" fill="#FF4757" />

      {/* Bow - Left loop */}
      <ellipse cx="90" cy="100" rx="18" ry="22" fill="#E31C23" />
      <ellipse cx="92" cy="102" rx="14" ry="18" fill="#FF6B8A" />

      {/* Bow - Right loop */}
      <ellipse cx="150" cy="100" rx="18" ry="22" fill="#E31C23" />
      <ellipse cx="148" cy="102" rx="14" ry="18" fill="#FF6B8A" />

      {/* Top left curl */}
      <path
        d="M 65 85 Q 50 75 55 60"
        stroke="#E31C23"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Top right curl */}
      <path
        d="M 175 85 Q 190 75 185 60"
        stroke="#E31C23"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Character - Head */}
      <circle cx="120" cy="160" r="28" fill="#FFFACD" stroke="#F0E68C" strokeWidth="1.5" />

      {/* Character - Ears */}
      <circle cx="100" cy="140" r="8" fill="#FFFACD" stroke="#F0E68C" strokeWidth="1" />
      <circle cx="140" cy="140" r="8" fill="#FFFACD" stroke="#F0E68C" strokeWidth="1" />

      {/* Character - Eyes */}
      <circle cx="112" cy="155" r="3" fill="#333" />
      <circle cx="128" cy="155" r="3" fill="#333" />

      {/* Character - Nose */}
      <circle cx="120" cy="165" r="2.5" fill="#FFB6C1" />

      {/* Character - Mouth (cute smile) */}
      <path
        d="M 115 172 Q 120 175 125 172"
        stroke="#FF69B4"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Character - Arms - Left */}
      <rect x="85" y="175" width="12" height="25" rx="6" fill="#FFFACD" stroke="#F0E68C" strokeWidth="1" />
      <circle cx="91" cy="202" r="5" fill="#FFB6C1" />

      {/* Character - Arms - Right */}
      <rect x="143" y="175" width="12" height="25" rx="6" fill="#FFFACD" stroke="#F0E68C" strokeWidth="1" />
      <circle cx="149" cy="202" r="5" fill="#FFB6C1" />

      {/* Character - Rosy cheeks */}
      <circle cx="88" cy="162" r="4" fill="#FFB6C1" opacity="0.6" />
      <circle cx="152" cy="162" r="4" fill="#FFB6C1" opacity="0.6" />
    </svg>
  );
}

export default CuteGiftBox;
