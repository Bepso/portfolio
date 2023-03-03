import React from 'react';

function Wave(props) {
  const { strokeColor, gradientColor } = props;
  return (
    <div className="neon-wave">
      <svg viewBox="10 0 80 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor={gradientColor} />
            <stop offset="50%" stopColor={gradientColor} />
            <stop offset="50.1%" stopColor={gradientColor} />
            <stop offset="100%" stopColor={gradientColor} />
          </linearGradient>
        </defs>
        <path
          d="M 0,50 C 20,35 20,65 40,50 S 60,35 80,50 S 100,65 100,50"
          stroke={strokeColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 1 0.5 1; 0.5 1 0.5 1; 0.5 1 0.5 1"
            values="
              M 0,50 C 20,35 20,65 40,50 S 60,35 80,50 S 100,65 100,50;
              M 0,50 C 20,50 20,60 40,40 S 60,60 80,50 S 100,50 100,50;
              M 0,50 C 20,65 20,35 40,50 S 60,35 80,50 S 100,65 100,50;
              M 0,50 C 20,50 20,40 40,60 S 60,40 80,50 S 100,50 100,50;
              M 0,50 C 20,35 20,65 40,50 S 60,35 80,50 S 100,65 100,50;
            "
          />
        </path>
      </svg>
    </div>
  );
}

export default Wave;



