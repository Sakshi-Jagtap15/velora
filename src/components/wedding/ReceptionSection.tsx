import React from 'react';
import ScrollReveal from './ScrollReveal';
import Sparkles from './Sparkles';
import { useInvitation } from '@/contexts/InvitationContext';

const ReceptionSection: React.FC = () => {
  const invitation = useInvitation();
  const receptionVenueParts = (invitation.reception_venue || invitation.venue).split(',');
  const venueName = receptionVenueParts[0]?.trim();
  const venueCity = receptionVenueParts.slice(1).join(',').trim();

  return (
    <section id="Reception" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(220, 35%, 12%), hsl(230, 30%, 16%))' }}>
      <Sparkles count={25} color="hsl(36, 60%, 70%)" />

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 15%, hsla(36, 60%, 55%, 0.1) 0%, transparent 45%)' }} />

      {/* Elegant circular frame */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <svg viewBox="0 0 400 400" className="w-[70vw] max-w-[500px]">
          <circle cx="200" cy="200" r="175" stroke="hsl(36, 60%, 55%)" strokeWidth="1" fill="none" />
          <circle cx="200" cy="200" r="165" stroke="hsl(36, 60%, 50%)" strokeWidth="0.5" fill="none" strokeDasharray="6 8" />
          <circle cx="200" cy="200" r="155" stroke="hsl(36, 60%, 55%)" strokeWidth="0.5" fill="none" />
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i * 360) / 24 * Math.PI / 180;
            return <circle key={i} cx={200 + 170 * Math.cos(a)} cy={200 + 170 * Math.sin(a)} r="3" fill="hsl(36, 60%, 55%)" opacity="0.4" />;
          })}
        </svg>
      </div>

      {/* Hanging chandeliers */}
      <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none px-16">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="sway flex flex-col items-center" style={{ animationDelay: `${i * 0.6}s` }}>
            <div className="w-px h-6" style={{ backgroundColor: 'hsla(36, 60%, 55%, 0.3)' }} />
            <svg viewBox="0 0 24 30" className="w-5 h-6">
              <path d="M12 0 L15 10 L18 8 L15 15 L18 18 L12 30 L6 18 L9 15 L6 8 L9 10 Z" fill="hsl(36, 60%, 55%)" opacity="0.35" />
            </svg>
          </div>
        ))}
      </div>

      {/* Corner diamonds */}
      {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} pointer-events-none opacity-15`}>
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            <path d="M20 2 L38 20 L20 38 L2 20 Z" stroke="hsl(36, 60%, 55%)" strokeWidth="1.5" fill="none" />
            <path d="M20 8 L32 20 L20 32 L8 20 Z" stroke="hsl(36, 60%, 50%)" strokeWidth="1" fill="none" />
            <circle cx="20" cy="20" r="3" fill="hsl(36, 60%, 55%)" opacity="0.5" />
          </svg>
        </div>
      ))}

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.3em] uppercase" style={{ color: 'hsl(36, 60%, 65%)' }}>
            You are cordially invited to the
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-script text-6xl md:text-8xl mt-3 mb-2" style={{ color: 'hsl(40, 50%, 92%)' }}>
            Reception
          </h2>
          <p className="font-display text-xl italic" style={{ color: 'hsl(36, 50%, 68%)' }}>Grand Celebration</p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-16 h-px" style={{ backgroundColor: 'hsl(36, 60%, 50%)' }} />
            <div className="w-2.5 h-2.5 rotate-45" style={{ backgroundColor: 'hsl(36, 60%, 60%)' }} />
            <div className="w-16 h-px" style={{ backgroundColor: 'hsl(36, 60%, 50%)' }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="space-y-2 py-6 px-8 rounded-xl" style={{ backgroundColor: 'hsla(220, 35%, 12%, 0.5)', border: '1px solid hsla(36, 50%, 50%, 0.15)' }}>
            <p className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'hsl(40, 50%, 92%)' }}>
              {invitation.reception_date || 'Date TBA'}
            </p>
            <p className="font-body text-lg" style={{ color: 'hsl(220, 20%, 70%)' }}>at {invitation.reception_time || '7:00 PM onwards'}</p>
            <div className="w-10 h-px mx-auto my-3" style={{ backgroundColor: 'hsl(36, 50%, 45%)' }} />
            <p className="font-body text-base" style={{ color: 'hsl(220, 15%, 65%)' }}>
              {venueName}<br />
              {venueCity}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <p className="mt-6 font-body text-sm italic" style={{ color: 'hsl(36, 40%, 55%)' }}>
            Dinner · Music · Dance · Celebration
          </p>
          <div className="mt-6 flex justify-center gap-2">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'hsl(36, 60%, 55%)', opacity: 0.4 }} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReceptionSection;
