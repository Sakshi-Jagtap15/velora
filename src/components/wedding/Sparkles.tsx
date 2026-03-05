import React from 'react';

interface SparklesProps {
  count?: number;
  color?: string;
}

const Sparkles: React.FC<SparklesProps> = ({ count = 20, color = 'hsl(36, 60%, 65%)' }) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 4,
    duration: `${1.5 + Math.random() * 3}s`,
    delay: `${Math.random() * 4}s`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            backgroundColor: color,
            boxShadow: `0 0 ${s.size * 2}px ${color}`,
            '--duration': s.duration,
            '--delay': s.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Sparkles;
