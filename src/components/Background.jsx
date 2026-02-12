import { useState, useEffect } from 'react';

export function Background({ children }) {
  const [floatingHearts, setFloatingHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: 0,
        duration: 4 + Math.random() * 2
      };
      setFloatingHearts(prev => [...prev, newHeart]);

      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, (newHeart.duration + 0.5) * 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-container">
      {/* Base background layer */}
      <div className="background-base">
        <div className="background-gradient"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Floating hearts layer */}
      <div className="floating-hearts-layer">
        {floatingHearts.map(heart => (
          <div
            key={heart.id}
            className="floating-heart-bg"
            style={{
              left: `${heart.left}%`,
              animation: `floatUp ${heart.duration}s ease-in forwards`
            }}
          >
            ❤️
          </div>
        ))}
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
