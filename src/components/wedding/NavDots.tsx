import React, { useState, useEffect } from 'react';

interface NavDotsProps {
  sections: string[];
  activeIndex: number;
}

const NavDots: React.FC<NavDotsProps> = ({ sections, activeIndex }) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {sections.map((label, i) => (
        <button
          key={label}
          onClick={() => {
            document.getElementById(label)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${label}`}
        >
          <span className="absolute right-6 text-xs font-display opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-foreground/80 text-background px-2 py-1 rounded">
            {label}
          </span>
          <div
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
              i === activeIndex
                ? 'bg-wedding-gold border-wedding-gold scale-125'
                : 'border-wedding-gold/50 bg-transparent hover:bg-wedding-gold/30'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default NavDots;
