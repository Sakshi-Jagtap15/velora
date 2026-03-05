import React, { useState } from 'react';
import Sparkles from './Sparkles';
import { useInvitation } from '@/contexts/InvitationContext';

interface WelcomeDoorsProps {
  onOpen: () => void;
  isOpen: boolean;
}

const WelcomeDoors: React.FC<WelcomeDoorsProps> = ({ onOpen, isOpen }) => {
  const [sealBroken, setSealBroken] = useState(false);
  const invitation = useInvitation();

  const initials = `${invitation.groom_name[0]}&${invitation.bride_name[0]}`;

  const handleSealClick = () => {
    if (sealBroken) return;
    setSealBroken(true);
    setTimeout(() => onOpen(), 600);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-wedding-cream to-wedding-blush">
      <Sparkles count={30} color="hsl(36, 60%, 65%)" />

      {/* Decorative border frame */}
      <div className="absolute inset-4 md:inset-12 border-2 border-wedding-gold/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-6 md:inset-14 border border-wedding-gold/15 rounded-lg pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center" style={{ perspective: '1200px' }}>
        {/* Envelope + Card container */}
        <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
          
          {/* Card (slides up when opened) */}
          <div
            className={`absolute left-[10%] right-[10%] bottom-[10%] top-[5%] rounded-xl bg-gradient-to-b from-wedding-cream to-wedding-blush border-2 border-wedding-gold/40 flex flex-col items-center justify-center p-6 text-center shadow-lg transition-all duration-1000 ${
              isOpen ? 'card-rise' : ''
            }`}
            style={{ 
              zIndex: isOpen ? 30 : 1,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? 'auto' : 'none',
            }}
          >
            <div className="absolute inset-3 border border-wedding-gold/20 rounded-lg pointer-events-none" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              You are cordially invited to
            </p>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-1">
              the wedding celebration of
            </p>
            <h2 className="font-script text-4xl md:text-5xl text-primary mt-1">{invitation.groom_name}</h2>
            <p className="font-display text-lg text-wedding-gold my-0.5">&</p>
            <h2 className="font-script text-4xl md:text-5xl text-primary mb-3">{invitation.bride_name}</h2>
            <div className="w-12 h-px bg-wedding-gold/50 mx-auto my-2" />
            <p className="font-display text-sm text-muted-foreground">
              Scroll down to explore
            </p>
          </div>

          {/* Envelope body */}
          <div className="absolute inset-0 z-10" style={{ pointerEvents: isOpen ? 'none' : 'auto' }}>
            <div className="absolute inset-0 rounded-xl overflow-hidden" style={{ backgroundColor: 'hsl(36, 45%, 82%)' }}>
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="absolute w-full h-px" style={{ top: `${20 + i * 13}%`, backgroundColor: 'hsl(36, 40%, 55%)' }} />
                ))}
              </div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 320" preserveAspectRatio="none">
                <path d="M0 0 L210 130 L420 0" stroke="hsl(36, 40%, 72%)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[55%] rounded-b-xl overflow-hidden" style={{ backgroundColor: 'hsl(36, 42%, 78%)', zIndex: 15 }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 176" preserveAspectRatio="none">
                <path d="M0 176 L210 40 L420 176 Z" fill="hsl(36, 42%, 78%)" stroke="hsl(36, 40%, 68%)" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Envelope flap */}
          <div
            className={`absolute top-0 left-0 right-0 z-20 ${sealBroken ? 'envelope-flap-open' : ''}`}
            style={{ transformOrigin: 'top center', height: '55%', pointerEvents: sealBroken ? 'none' : 'auto' }}
          >
            <svg className="w-full h-full" viewBox="0 0 420 176" preserveAspectRatio="none">
              <path d="M0 0 L420 0 L210 176 Z" fill="hsl(36, 45%, 82%)" stroke="hsl(36, 40%, 72%)" strokeWidth="1" />
              <circle cx="210" cy="70" r="18" stroke="hsl(36, 50%, 62%)" strokeWidth="0.8" fill="none" opacity="0.3" />
              <circle cx="210" cy="70" r="28" stroke="hsl(36, 50%, 62%)" strokeWidth="0.5" fill="none" opacity="0.2" />
            </svg>
          </div>

          {/* Wax seal */}
          <button
            onClick={handleSealClick}
            className={`absolute z-30 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${
              sealBroken ? 'seal-break' : ''
            }`}
            style={{ 
              top: '42%',
              background: 'radial-gradient(circle at 35% 35%, hsl(0, 55%, 42%), hsl(0, 55%, 30%))',
              boxShadow: '0 4px 15px hsla(0, 55%, 25%, 0.5), inset 0 1px 2px hsla(0, 40%, 60%, 0.3)',
              border: '2px solid hsl(0, 45%, 25%)',
            }}
            disabled={sealBroken}
          >
            <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 80 80">
              {Array.from({ length: 16 }, (_, i) => {
                const angle = (i * 360) / 16;
                const rad = (angle * Math.PI) / 180;
                const cx = 40 + 38 * Math.cos(rad);
                const cy = 40 + 38 * Math.sin(rad);
                return <circle key={i} cx={cx} cy={cy} r="4" fill="hsl(0, 55%, 35%)" />;
              })}
            </svg>
            <span className="font-script text-lg md:text-xl" style={{ color: 'hsl(40, 50%, 88%)' }}>{initials}</span>
          </button>
        </div>

        {!sealBroken && (
          <p className="mt-8 font-display text-sm tracking-wider text-muted-foreground animate-pulse">
            Tap the seal to open
          </p>
        )}
      </div>
    </section>
  );
};

export default WelcomeDoors;
