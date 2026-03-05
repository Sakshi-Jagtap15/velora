import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useInvitation } from '@/contexts/InvitationContext';

const HaldiSection: React.FC = () => {
  const invitation = useInvitation();
  const haldiVenueParts = (invitation.haldi_venue || invitation.venue).split(',');
  const venueName = haldiVenueParts[0]?.trim();
  const venueCity = haldiVenueParts.slice(1).join(',').trim();

  return (
    <section id="Haldi" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden" style={{ backgroundColor: 'hsl(45, 85%, 65%)' }}>
      
      {/* Floral vine borders */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-0 left-0 w-36 h-full" viewBox="0 0 140 800" fill="none">
          <path d="M0 0 Q70 80 30 160 Q-10 240 50 320 Q90 400 20 480 Q-20 560 40 640 Q80 720 10 800" stroke="hsl(30, 80%, 50%)" strokeWidth="2" fill="none" opacity="0.25" />
          <path d="M20 0 Q80 100 40 180 Q0 260 60 340 Q100 420 30 500 Q-10 580 50 660 Q90 740 20 800" stroke="hsl(120, 35%, 45%)" strokeWidth="1.5" fill="none" opacity="0.2" />
          {[80, 200, 320, 440, 560, 680].map((y, i) => (
            <g key={i}>
              <circle cx={25 + (i % 2) * 25} cy={y} r="8" fill="hsl(30, 80%, 55%)" opacity="0.35" />
              <circle cx={15 + (i % 2) * 15} cy={y + 30} r="5" fill="hsl(15, 70%, 65%)" opacity="0.3" />
              <circle cx={40 + (i % 2) * 10} cy={y - 15} r="4" fill="hsl(45, 90%, 60%)" opacity="0.25" />
              <path d={`M${35 + (i % 2) * 20} ${y + 15} Q${45 + (i % 2) * 15} ${y + 5} ${50 + (i % 2) * 10} ${y + 18} Q${42 + (i % 2) * 15} ${y + 12} ${35 + (i % 2) * 20} ${y + 15}Z`} fill="hsl(120, 35%, 45%)" opacity="0.3" />
            </g>
          ))}
        </svg>
        <svg className="absolute top-0 right-0 w-36 h-full" viewBox="0 0 140 800" fill="none" style={{ transform: 'scaleX(-1)' }}>
          <path d="M0 0 Q70 80 30 160 Q-10 240 50 320 Q90 400 20 480 Q-20 560 40 640 Q80 720 10 800" stroke="hsl(30, 80%, 50%)" strokeWidth="2" fill="none" opacity="0.25" />
          <path d="M20 0 Q80 100 40 180 Q0 260 60 340 Q100 420 30 500 Q-10 580 50 660 Q90 740 20 800" stroke="hsl(120, 35%, 45%)" strokeWidth="1.5" fill="none" opacity="0.2" />
          {[80, 200, 320, 440, 560, 680].map((y, i) => (
            <g key={i}>
              <circle cx={25 + (i % 2) * 25} cy={y} r="8" fill="hsl(30, 80%, 55%)" opacity="0.35" />
              <circle cx={15 + (i % 2) * 15} cy={y + 30} r="5" fill="hsl(15, 70%, 65%)" opacity="0.3" />
              <path d={`M${35 + (i % 2) * 20} ${y + 15} Q${45 + (i % 2) * 15} ${y + 5} ${50 + (i % 2) * 10} ${y + 18} Q${42 + (i % 2) * 15} ${y + 12} ${35 + (i % 2) * 20} ${y + 15}Z`} fill="hsl(120, 35%, 45%)" opacity="0.3" />
            </g>
          ))}
        </svg>
      </div>

      {/* Turmeric splatter dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="absolute rounded-full" style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`, width: 6 + Math.random() * 12, height: 6 + Math.random() * 12, backgroundColor: 'hsl(45, 90%, 55%)', opacity: 0.12 + Math.random() * 0.08, filter: 'blur(1px)' }} />
        ))}
      </div>

      {/* Kalash at top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none">
        <svg viewBox="0 0 120 100" className="w-24 h-20">
          <path d="M25 60 Q30 85 60 90 Q90 85 95 60 Z" fill="hsl(30, 70%, 35%)" />
          <ellipse cx="60" cy="60" rx="38" ry="8" fill="hsl(30, 70%, 40%)" />
          <path d="M50 55 Q40 25 55 15 Q55 35 60 55Z" fill="hsl(120, 35%, 40%)" opacity="0.7" />
          <path d="M60 50 Q60 20 70 10 Q68 30 65 50Z" fill="hsl(120, 35%, 45%)" opacity="0.6" />
          <path d="M70 55 Q80 25 65 15 Q65 35 60 55Z" fill="hsl(120, 35%, 40%)" opacity="0.7" />
        </svg>
      </div>

      {/* Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
        <svg viewBox="0 0 200 200" className="w-60 h-60">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <ellipse key={angle} cx="100" cy="100" rx="80" ry="25" stroke="hsl(30, 70%, 30%)" strokeWidth="1" fill="none" transform={`rotate(${angle} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="20" stroke="hsl(30, 70%, 35%)" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="8" fill="hsl(30, 70%, 35%)" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.3em] uppercase" style={{ color: 'hsl(30, 50%, 30%)' }}>
            Celebrate with us at the
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-script text-6xl md:text-8xl mt-2 mb-2" style={{ color: 'hsl(30, 60%, 22%)' }}>
            Haldi
          </h2>
          <p className="font-display text-xl italic" style={{ color: 'hsl(30, 50%, 32%)' }}>Ceremony</p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-12 h-px" style={{ backgroundColor: 'hsl(30, 60%, 40%)' }} />
            <svg viewBox="0 0 20 20" className="w-4 h-4">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="hsl(30, 60%, 40%)" />
            </svg>
            <div className="w-12 h-px" style={{ backgroundColor: 'hsl(30, 60%, 40%)' }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="space-y-2 py-5 px-6 rounded-xl" style={{ backgroundColor: 'hsla(45, 80%, 60%, 0.3)', border: '1px solid hsla(30, 60%, 40%, 0.2)' }}>
            <p className="font-display text-2xl font-semibold" style={{ color: 'hsl(30, 60%, 18%)' }}>
              {invitation.haldi_date || 'Date TBA'}
            </p>
            <p className="font-body text-lg" style={{ color: 'hsl(30, 40%, 32%)' }}>at {invitation.haldi_time || '10:00 AM onwards'}</p>
            <div className="w-8 h-px mx-auto my-2" style={{ backgroundColor: 'hsl(30, 50%, 40%)' }} />
            <p className="font-body text-base" style={{ color: 'hsl(30, 35%, 38%)' }}>
              {venueName}<br />
              {venueCity}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className="mt-10 flex justify-center">
            <svg viewBox="0 0 160 80" className="w-32 h-16" fill="none">
              <path d="M80 70 Q55 40 25 60 Q40 25 80 10 Q120 25 135 60 Q105 40 80 70Z" fill="hsl(30, 80%, 55%)" opacity="0.4" />
              <path d="M80 65 Q60 40 40 55 Q50 28 80 15 Q110 28 120 55 Q100 40 80 65Z" fill="hsl(30, 80%, 58%)" opacity="0.5" />
              <path d="M80 58 Q65 42 52 52 Q58 32 80 22 Q102 32 108 52 Q95 42 80 58Z" fill="hsl(30, 80%, 62%)" opacity="0.6" />
              <circle cx="80" cy="42" r="6" fill="hsl(30, 70%, 45%)" opacity="0.5" />
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HaldiSection;
