import React from 'react';
import ScrollReveal from './ScrollReveal';
import Sparkles from './Sparkles';
import { useInvitation } from '@/contexts/InvitationContext';

const WeddingCeremonySection: React.FC = () => {
  const invitation = useInvitation();
  const ceremonyVenueParts = (invitation.ceremony_venue || invitation.venue).split(',');
  const venueName = ceremonyVenueParts[0]?.trim();
  const venueCity = ceremonyVenueParts.slice(1).join(',').trim();

  return (
    <section id="WeddingCeremony" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(0, 55%, 25%), hsl(0, 50%, 20%))' }}>
      <Sparkles count={15} color="hsl(36, 60%, 70%)" />

      {/* Sacred fire / mandala background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <svg viewBox="0 0 500 500" className="w-[75vw] max-w-[550px]">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <ellipse key={angle} cx="250" cy="250" rx="200" ry="60" stroke="hsl(36, 60%, 55%)" strokeWidth="1.5" fill="none" transform={`rotate(${angle} 250 250)`} />
          ))}
          <circle cx="250" cy="250" r="70" stroke="hsl(36, 60%, 50%)" strokeWidth="1" fill="none" />
          <circle cx="250" cy="250" r="35" stroke="hsl(36, 60%, 50%)" strokeWidth="1" fill="none" />
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i * 360) / 8 * Math.PI / 180;
            return <circle key={i} cx={250 + 90 * Math.cos(a)} cy={250 + 90 * Math.sin(a)} r="5" fill="hsl(36, 60%, 55%)" opacity="0.5" />;
          })}
        </svg>
      </div>

      {/* Sacred fire motif */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <svg viewBox="0 0 80 100" className="w-16 h-20">
          <path d="M40 90 Q20 65 25 45 Q30 25 40 10 Q50 25 55 45 Q60 65 40 90Z" fill="hsl(36, 70%, 50%)" />
          <path d="M40 85 Q28 65 32 48 Q36 32 40 20 Q44 32 48 48 Q52 65 40 85Z" fill="hsl(25, 80%, 55%)" />
          <path d="M40 78 Q33 62 36 50 Q38 38 40 30 Q42 38 44 50 Q47 62 40 78Z" fill="hsl(45, 90%, 60%)" />
        </svg>
      </div>

      {/* Kalash corners */}
      {['top-6 left-6', 'top-6 right-6 scale-x-[-1]'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} pointer-events-none opacity-15`}>
          <svg viewBox="0 0 60 80" className="w-10 h-14">
            <path d="M15 75 Q18 55 30 50 Q42 55 45 75Z" fill="hsl(36, 60%, 50%)" />
            <ellipse cx="30" cy="50" rx="18" ry="5" fill="hsl(36, 60%, 55%)" />
            <path d="M24 45 Q22 30 30 20 Q38 30 36 45" stroke="hsl(120, 35%, 45%)" strokeWidth="1.5" fill="none" />
            <circle cx="30" cy="18" r="4" fill="hsl(0, 60%, 45%)" opacity="0.6" />
          </svg>
        </div>
      ))}

      {/* Scattered diyas */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="absolute twinkle" style={{ left: `${8 + Math.random() * 84}%`, top: `${8 + Math.random() * 84}%`, '--duration': `${2 + Math.random() * 3}s`, '--delay': `${Math.random() * 4}s` } as React.CSSProperties}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(36, 70%, 60%)', boxShadow: '0 0 8px hsl(36, 70%, 50%)' }} />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.3em] uppercase" style={{ color: 'hsl(36, 60%, 65%)' }}>
            The Sacred
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-script text-6xl md:text-8xl mt-2 mb-2" style={{ color: 'hsl(40, 50%, 92%)' }}>
            Wedding
          </h2>
          <p className="font-display text-xl italic" style={{ color: 'hsl(36, 50%, 68%)' }}>Ceremony</p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-16 h-px" style={{ backgroundColor: 'hsl(36, 60%, 50%)' }} />
            <svg viewBox="0 0 20 20" className="w-4 h-4">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="hsl(36, 60%, 55%)" opacity="0.7" />
            </svg>
            <div className="w-16 h-px" style={{ backgroundColor: 'hsl(36, 60%, 50%)' }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="space-y-2 py-6 px-8 rounded-xl" style={{ backgroundColor: 'hsla(0, 50%, 18%, 0.5)', border: '1px solid hsla(36, 50%, 50%, 0.15)' }}>
            <p className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'hsl(40, 50%, 92%)' }}>
              {invitation.ceremony_date || 'Date TBA'}
            </p>
            <p className="font-body text-lg" style={{ color: 'hsl(0, 25%, 70%)' }}>at {invitation.ceremony_time || '11:00 AM onwards'}</p>
            <div className="w-10 h-px mx-auto my-3" style={{ backgroundColor: 'hsl(36, 50%, 45%)' }} />
            <p className="font-body text-base" style={{ color: 'hsl(0, 20%, 65%)' }}>
              {venueName}<br />
              {venueCity}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <p className="mt-6 font-body text-sm italic" style={{ color: 'hsl(36, 40%, 55%)' }}>
            Pheras · Jaimala · Kanyadaan · Sindoor
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WeddingCeremonySection;
