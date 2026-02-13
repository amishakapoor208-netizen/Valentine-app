export function HeartShape({ id, color, text, isClicked, onClick }) {
  return (
    <button
      className="heart-shape-button"
      onClick={() => onClick(id)}
      style={{
        '--heart-fill': isClicked ? 'white' : color,
        '--heart-stroke': isClicked ? '#ddd' : color,
      }}
    >
      <svg viewBox="0 0 100 100" className="heart-svg" preserveAspectRatio="xMidYMid meet">
        {/* Heart shape using SVG path */}
        <path
          d="M 50 85 C 20 70, 5 55, 5 40 C 5 25, 15 15, 25 15 C 35 15, 45 25, 50 35 C 55 25, 65 15, 75 15 C 85 15, 95 25, 95 40 C 95 55, 80 70, 50 85 Z"
          fill="var(--heart-fill)"
          stroke="var(--heart-stroke)"
          strokeWidth="2"
        />
      </svg>
      
      {isClicked && (
        <p className="heart-shape-text">{text}</p>
      )}
    </button>
  );
}

export default HeartShape;
