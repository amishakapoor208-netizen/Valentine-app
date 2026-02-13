export function Background({ children }) {
  return (
    <div className="background-container">
      {/* Base background layer */}
      <div className="background-base">
        <div className="background-gradient"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Top scalloped border */}
      <div className="scallop-top">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <defs>
            <pattern id="scallop-top" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="0" r="50" fill="white" />
            </pattern>
          </defs>
          <rect width="1000" height="100" fill="url(#scallop-top)" />
        </svg>
      </div>

      {/* Bottom scalloped border */}
      <div className="scallop-bottom">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <defs>
            <pattern id="scallop-bottom" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="100" r="50" fill="white" />
            </pattern>
          </defs>
          <rect width="1000" height="100" fill="url(#scallop-bottom)" />
        </svg>
      </div>

      {/* Pink tape graphics */}
      <div className="tape tape-top-left">
        <div className="tape-inner"></div>
      </div>
      <div className="tape tape-bottom-right">
        <div className="tape-inner"></div>
      </div>

      {/* Center white card container */}
      <div className="card-container">
        <div className="white-card">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Background;
