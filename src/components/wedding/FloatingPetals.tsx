import React from 'react';

const FloatingPetals: React.FC = () => {
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 8 + Math.random() * 14,
    duration: `${5 + Math.random() * 6}s`,
    delay: `${Math.random() * 8}s`,
    color: ['hsl(340, 60%, 70%)', 'hsl(15, 70%, 75%)', 'hsl(36, 60%, 65%)', 'hsl(0, 50%, 75%)'][i % 4],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal absolute rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.7,
            backgroundColor: p.color,
            borderRadius: '50% 0 50% 0',
            '--duration': p.duration,
            '--delay': p.delay,
            opacity: 0.7,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
