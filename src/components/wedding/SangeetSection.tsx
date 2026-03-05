import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useInvitation } from '@/contexts/InvitationContext';

const SangeetSection: React.FC = () => {
  const invitation = useInvitation();
  const sangeetVenueParts = (invitation.sangeet_venue || invitation.venue).split(',');
  const venueName = sangeetVenueParts[0]?.trim();
  const venueCity = sangeetVenueParts.slice(1).join(',').trim();

  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 1 + Math.random() * 3,
    duration: `${2 + Math.random() * 4}s`,
    delay: `${Math.random() * 5}s`,
  }));

  return (
    <section id="Sangeet" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(270, 40%, 18%), hsl(280, 45%, 28%), hsl(270, 40%, 20%))' }}>
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s) => (
          <div key={s.id} className="twinkle absolute rounded-full" style={{ left: s.left, top: s.top, width: s.size, height: s.size, backgroundColor: 'hsl(36, 60%, 80%)', boxShadow: `0 0 ${s.size * 3}px hsl(36, 60%, 70%)`, '--duration': s.duration, '--delay': s.delay } as React.CSSProperties} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 20%, hsla(36, 60%, 60%, 0.12) 0%, transparent 50%)' }} />

      {/* Musical notes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <svg key={i} className="absolute opacity-[0.1]" style={{ left: `${5 + Math.random() * 90}%`, top: `${5 + Math.random() * 90}%`, width: 20 + Math.random() * 16, transform: `rotate(${-20 + Math.random() * 40}deg)` }} viewBox="0 0 30 40">
            {i % 3 === 0 ? (
              <g>
                <circle cx="10" cy="32" r="5" fill="hsl(36, 60%, 70%)" />
                <line x1="15" y1="32" x2="15" y2="5" stroke="hsl(36, 60%, 70%)" strokeWidth="1.5" />
                <path d="M15 5 Q22 8 20 14" stroke="hsl(36, 60%, 70%)" strokeWidth="1.5" fill="none" />
              </g>
            ) : i % 3 === 1 ? (
              <g>
                <circle cx="7" cy="35" r="4.5" fill="hsl(320, 50%, 65%)" />
                <circle cx="23" cy="30" r="4.5" fill="hsl(320, 50%, 65%)" />
                <line x1="11.5" y1="35" x2="11.5" y2="8" stroke="hsl(320, 50%, 65%)" strokeWidth="1.5" />
                <line x1="27.5" y1="30" x2="27.5" y2="5" stroke="hsl(320, 50%, 65%)" strokeWidth="1.5" />
                <line x1="11.5" y1="8" x2="27.5" y2="5" stroke="hsl(320, 50%, 65%)" strokeWidth="2" />
              </g>
            ) : (
              <g>
                <path d="M15 35 Q5 25 10 15 Q15 5 20 10 Q25 15 15 20 Q10 25 15 35" stroke="hsl(36, 60%, 70%)" strokeWidth="1.5" fill="none" />
              </g>
            )}
          </svg>
        ))}
      </div>

      {/* Dancing figures */}
      <div className="absolute bottom-20 left-8 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 60 100" className="w-12 h-20">
          <circle cx="30" cy="12" r="8" fill="hsl(36, 60%, 70%)" />
          <path d="M30 20 L30 55 M30 35 L15 50 M30 35 L45 45 M30 55 L20 80 M30 55 L40 80" stroke="hsl(36, 60%, 70%)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-10 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 60 100" className="w-12 h-20" style={{ transform: 'scaleX(-1)' }}>
          <circle cx="30" cy="12" r="8" fill="hsl(320, 50%, 65%)" />
          <path d="M30 20 L30 55 M30 35 L10 45 M30 35 L48 50 M30 55 L18 82 M30 55 L42 78" stroke="hsl(320, 50%, 65%)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Corner flourishes */}
      {['top-5 left-5', 'top-5 right-5 scale-x-[-1]', 'bottom-5 left-5 scale-y-[-1]', 'bottom-5 right-5 scale-[-1]'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} pointer-events-none`}>
          <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-18 md:h-18">
            <path d="M5 5 Q35 5 35 35 Q5 35 5 5Z" stroke="hsl(320, 50%, 55%)" strokeWidth="1" fill="none" opacity="0.35" />
            <path d="M10 10 Q28 10 28 28 Q10 28 10 10Z" stroke="hsl(280, 40%, 55%)" strokeWidth="0.8" fill="none" opacity="0.25" />
            <circle cx="12" cy="12" r="4" fill="hsl(320, 50%, 58%)" opacity="0.3" />
            <circle cx="22" cy="8" r="3" fill="hsl(280, 40%, 60%)" opacity="0.25" />
          </svg>
        </div>
      ))}

      <div className="relative z-10 w-full max-w-md mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.3em] uppercase" style={{ color: 'hsl(36, 60%, 65%)' }}>
            Join us for a night of
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-script text-6xl md:text-9xl mt-3 mb-3" style={{ color: 'hsl(36, 60%, 72%)' }}>
            Sangeet
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="font-display text-lg italic" style={{ color: 'hsl(320, 40%, 72%)' }}>
            Music, Dance & Celebration
          </p>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-16 h-px" style={{ backgroundColor: 'hsl(36, 50%, 50%)' }} />
            <div className="w-2.5 h-2.5 rotate-45" style={{ backgroundColor: 'hsl(36, 60%, 62%)' }} />
            <div className="w-16 h-px" style={{ backgroundColor: 'hsl(36, 50%, 50%)' }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="space-y-2 py-5 px-6 rounded-xl" style={{ backgroundColor: 'hsla(270, 40%, 20%, 0.5)', border: '1px solid hsla(36, 50%, 50%, 0.15)' }}>
            <p className="font-display text-2xl font-semibold" style={{ color: 'hsl(0, 0%, 93%)' }}>
              {invitation.sangeet_date || 'Date TBA'}
            </p>
            <p className="font-body text-lg" style={{ color: 'hsl(270, 20%, 72%)' }}>at {invitation.sangeet_time || '7:00 PM onwards'}</p>
            <div className="w-8 h-px mx-auto my-2" style={{ backgroundColor: 'hsl(36, 50%, 50%)' }} />
            <p className="font-body text-base" style={{ color: 'hsl(270, 15%, 68%)' }}>
              {venueName}<br />
              {venueCity}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className="mt-10 flex justify-center gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'hsl(320, 50%, 60%)', opacity: 0.5 }} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SangeetSection;
