import React from 'react';
import ScrollReveal from './ScrollReveal';
import Sparkles from './Sparkles';
import { useInvitation } from '@/contexts/InvitationContext';

const EngagementSection: React.FC = () => {
  const invitation = useInvitation();
  const engagementVenueParts = (invitation.engagement_venue || invitation.venue).split(',');
  const venueName = engagementVenueParts[0]?.trim();
  const venueCity = engagementVenueParts.slice(1).join(',').trim();

  return (
    <section id="Engagement" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden" style={{ backgroundColor: 'hsl(220, 45%, 18%)' }}>
      <Sparkles count={30} color="hsl(36, 60%, 65%)" />

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, hsla(36, 60%, 50%, 0.08) 0%, transparent 60%)' }} />

      {/* Circular floral wreath */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <svg viewBox="0 0 400 400" className="w-[70vw] max-w-[500px]">
          <circle cx="200" cy="200" r="160" stroke="hsl(220, 20%, 80%)" strokeWidth="1" fill="none" />
          <circle cx="200" cy="200" r="150" stroke="hsl(220, 20%, 75%)" strokeWidth="0.5" fill="none" strokeDasharray="8 6" />
          {Array.from({ length: 20 }, (_, i) => {
            const angle = (i * 360) / 20 * Math.PI / 180;
            const cx = 200 + 155 * Math.cos(angle);
            const cy = 200 + 155 * Math.sin(angle);
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="6" fill="hsl(220, 20%, 85%)" opacity="0.6" />
                <circle cx={cx} cy={cy} r="2.5" fill="hsl(36, 60%, 70%)" opacity="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Scattered diamond/ring motifs */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <svg key={i} className="absolute" style={{ left: `${8 + Math.random() * 84}%`, top: `${5 + Math.random() * 90}%`, width: 14 + Math.random() * 10, height: 14 + Math.random() * 10, opacity: 0.12 + Math.random() * 0.1 }} viewBox="0 0 20 20">
            {i % 2 === 0 ? <path d="M10 2 L18 10 L10 18 L2 10 Z" stroke="hsl(36, 60%, 65%)" strokeWidth="1.5" fill="none" /> : <circle cx="10" cy="10" r="7" stroke="hsl(36, 60%, 65%)" strokeWidth="1.5" fill="none" />}
          </svg>
        ))}
      </div>

      {/* String lights */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-16" viewBox="0 0 1000 60" preserveAspectRatio="none">
          <path d="M0 8 Q125 45 250 8 Q375 45 500 8 Q625 45 750 8 Q875 45 1000 8" stroke="hsl(36, 40%, 50%)" strokeWidth="0.8" fill="none" opacity="0.3" />
          {Array.from({ length: 20 }, (_, i) => (
            <circle key={i} cx={25 + i * 50} cy={8 + Math.sin(i * 0.628) * 18} r="3" fill="hsl(36, 55%, 72%)" opacity={0.4 + Math.random() * 0.3} className="twinkle" style={{ '--delay': `${i * 0.3}s` } as React.CSSProperties} />
          ))}
        </svg>
      </div>

      {/* Hanging pearl strings */}
      <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none px-8">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="sway flex flex-col items-center" style={{ animationDelay: `${i * 0.35}s` }}>
            <div className="w-px h-4 bg-wedding-gold-light/40" />
            {Array.from({ length: 3 + Math.floor(i % 3) * 2 }, (_, j) => (
              <div key={j} className="mt-2.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(36, 55%, 72%)', opacity: 0.6 - j * 0.05 }} />
              </div>
            ))}
            <div className="w-3 h-3 rounded-full bg-wedding-gold/70 mt-2 shadow-sm" style={{ boxShadow: '0 0 6px hsl(36, 60%, 55%)' }} />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.3em] uppercase" style={{ color: 'hsl(36, 60%, 65%)' }}>
            Welcome to the
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-script text-6xl md:text-8xl mt-3 mb-2" style={{ color: 'hsl(40, 50%, 92%)' }}>
            Engagement
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-16 h-px" style={{ backgroundColor: 'hsl(36, 60%, 55%)' }} />
            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: 'hsl(36, 60%, 60%)' }} />
            <div className="w-16 h-px" style={{ backgroundColor: 'hsl(36, 60%, 55%)' }} />
          </div>
          <p className="font-display text-xl" style={{ color: 'hsl(220, 20%, 80%)' }}>
            {invitation.groom_name} & {invitation.bride_name}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="mt-8 space-y-2 py-5 px-6 rounded-xl" style={{ backgroundColor: 'hsla(220, 40%, 15%, 0.5)', border: '1px solid hsla(220, 20%, 50%, 0.15)' }}>
            <p className="font-display text-2xl font-semibold" style={{ color: 'hsl(40, 50%, 92%)' }}>
              {invitation.engagement_date || 'Date TBA'}
            </p>
            <p className="font-body text-lg" style={{ color: 'hsl(220, 20%, 70%)' }}>at {invitation.engagement_time || '6:00 PM onwards'}</p>
            <div className="w-8 h-px mx-auto my-2" style={{ backgroundColor: 'hsl(36, 50%, 50%)' }} />
            <p className="font-body text-base" style={{ color: 'hsl(220, 20%, 65%)' }}>
              {venueName}<br />
              {venueCity}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EngagementSection;
