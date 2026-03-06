import React from 'react';
import ScrollReveal from './ScrollReveal';
import Sparkles from './Sparkles';
import { useInvitation } from '@/contexts/InvitationContext';

const WeddingSection: React.FC = () => {
  const invitation = useInvitation();
  const venueParts = invitation.venue.split(',');
  const venueName = venueParts[0]?.trim();
  const venueCity = venueParts.slice(1).join(',').trim();

  // Format the wedding date for display
  const weddingDate = new Date(invitation.wedding_date);
  const dateStr = weddingDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section id="Wedding" className="relative min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-wedding-cream to-wedding-blush overflow-hidden">
      <Sparkles count={20} />

      {/* Large mandala pattern - center background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <svg viewBox="0 0 500 500" className="w-[80vw] max-w-[600px] h-auto">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <ellipse key={angle} cx="250" cy="250" rx="220" ry="70" stroke="hsl(36, 60%, 45%)" strokeWidth="1.5" fill="none" transform={`rotate(${angle} 250 250)`} />
          ))}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((angle) => (
            <ellipse key={`inner-${angle}`} cx="250" cy="250" rx="140" ry="40" stroke="hsl(36, 60%, 45%)" strokeWidth="1" fill="none" transform={`rotate(${angle} 250 250)`} />
          ))}
          <circle cx="250" cy="250" r="80" stroke="hsl(36, 60%, 45%)" strokeWidth="1.5" fill="none" />
          <circle cx="250" cy="250" r="50" stroke="hsl(36, 60%, 45%)" strokeWidth="1" fill="none" />
          <circle cx="250" cy="250" r="20" fill="hsl(36, 60%, 45%)" opacity="0.5" />
          {Array.from({ length: 16 }, (_, i) => {
            const a = (i * 360) / 16 * Math.PI / 180;
            return <circle key={`dot-${i}`} cx={250 + 110 * Math.cos(a)} cy={250 + 110 * Math.sin(a)} r="5" fill="hsl(36, 60%, 45%)" />;
          })}
        </svg>
      </div>

      {/* Paisley corner motifs */}
      {['top-4 left-4', 'top-4 right-4 scale-x-[-1]', 'bottom-4 left-4 scale-y-[-1]', 'bottom-4 right-4 scale-[-1]'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-24 h-24 md:w-32 md:h-32 pointer-events-none opacity-20`}>
          <svg viewBox="0 0 120 120" fill="none">
            <path d="M20 100 Q5 60 30 30 Q55 5 80 20 Q95 30 85 55 Q75 80 45 85 Q25 88 20 100Z" stroke="hsl(36, 60%, 45%)" strokeWidth="1.5" fill="none" />
            <path d="M30 85 Q15 55 40 35 Q60 18 75 28 Q85 35 78 52 Q70 70 48 74 Q33 76 30 85Z" stroke="hsl(36, 60%, 50%)" strokeWidth="1" fill="none" />
            <circle cx="55" cy="40" r="8" fill="hsl(340, 50%, 70%)" opacity="0.5" />
            <circle cx="40" cy="55" r="5" fill="hsl(15, 70%, 75%)" opacity="0.4" />
          </svg>
        </div>
      ))}

      {/* Scattered floral dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${5 + Math.random() * 90}%`,
              width: 4 + Math.random() * 6,
              height: 4 + Math.random() * 6,
              backgroundColor: i % 3 === 0 ? 'hsl(340, 50%, 75%)' : i % 3 === 1 ? 'hsl(36, 60%, 65%)' : 'hsl(15, 60%, 80%)',
              opacity: 0.15 + Math.random() * 0.1,
            }}
          />
        ))}
      </div>

      {/* Hanging decorative elements from top */}
      <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none px-20">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="sway flex flex-col items-center" style={{ animationDelay: `${i * 0.5}s` }}>
            <div className="w-px h-8 bg-wedding-gold/30" />
            <svg viewBox="0 0 20 30" className="w-4 h-6">
              <path d="M10 0 L13 10 L10 30 L7 10 Z" fill="hsl(36, 60%, 55%)" opacity="0.5" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-wedding-gold/40" />
            <svg viewBox="0 0 20 20" className="w-4 h-4">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="hsl(36, 60%, 55%)" opacity="0.6" />
            </svg>
            <div className="w-12 h-px bg-wedding-gold/40" />
          </div>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Together with their families
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="font-script text-6xl md:text-8xl mb-1 gold-shimmer">{invitation.groom_name}</h1>

          <div className="flex items-center justify-center gap-4 my-3">
            <div className="w-16 h-px bg-wedding-gold/40" />
            <p className="font-display text-2xl text-wedding-gold">&</p>
            <div className="w-16 h-px bg-wedding-gold/40" />
          </div>
          <h1 className="font-script text-6xl md:text-8xl mb-6 gold-shimmer">{invitation.bride_name}</h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="font-display text-lg tracking-wider text-muted-foreground mb-1">
            Request the pleasure of your company
          </p>
          <p className="font-display text-lg tracking-wider text-muted-foreground">
            at their Wedding Celebration
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-8 py-6 px-8 border border-wedding-gold/20 rounded-xl bg-wedding-cream/50">
            <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              {dateStr}
            </p>
            <p className="font-body text-lg text-muted-foreground mt-2">at {invitation.wedding_time}</p>
            <div className="w-10 h-px bg-wedding-gold/40 mx-auto my-3" />
            <p className="font-body text-base text-muted-foreground">
              {venueName}<br />
              {venueCity}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className="mt-8 flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-wedding-gold/50" />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WeddingSection;
