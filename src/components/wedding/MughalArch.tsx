import React from 'react';

interface MughalArchProps {
  color?: string;
  className?: string;
}

const MughalArch: React.FC<MughalArchProps> = ({ color = 'hsl(36, 60%, 45%)', className = '' }) => {
  return (
    <svg viewBox="0 0 400 500" className={`w-full max-w-md mx-auto ${className}`} fill="none">
      {/* Outer arch frame */}
      <path
        d="M40 500 L40 180 Q40 40 200 40 Q360 40 360 180 L360 500"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      {/* Inner arch */}
      <path
        d="M60 500 L60 190 Q60 70 200 70 Q340 70 340 190 L340 500"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Decorative scallops at top */}
      <path
        d="M120 130 Q140 100 160 130 Q180 100 200 130 Q220 100 240 130 Q260 100 280 130"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Corner flourishes */}
      <circle cx="60" cy="190" r="5" fill={color} opacity="0.5" />
      <circle cx="340" cy="190" r="5" fill={color} opacity="0.5" />
      {/* Top ornament */}
      <path
        d="M190 35 L200 20 L210 35"
        stroke={color}
        strokeWidth="2"
        fill={color}
        opacity="0.6"
      />
    </svg>
  );
};

export default MughalArch;
