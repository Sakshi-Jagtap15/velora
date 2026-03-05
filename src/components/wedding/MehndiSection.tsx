import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useInvitation } from '@/contexts/InvitationContext';

const MehndiSection: React.FC = () => {
  const invitation = useInvitation();
  const mehndiVenueParts = (invitation.mehndi_venue || invitation.venue).split(',');
  const venueName = mehndiVenueParts[0]?.trim();
  const venueCity = mehndiVenueParts.slice(1).join(',').trim();

  return (
    <section id="Mehndi" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden" style={{ backgroundColor: 'hsl(40, 50%, 94%)' }}>
      
      {/* Mehndi hand pattern - left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 150 400" className="w-28 md:w-36 h-auto">
          <path d="M75 380 Q50 350 45 300 Q40 250 50 200 Q55 170 50 140 Q45 110 55 80 Q65 50 75 30 Q85 50 95 80 Q105 110 100 140 Q95 170 100 200 Q110 250 105 300 Q100 350 75 380Z" stroke="hsl(25, 70%, 40%)" strokeWidth="2" fill="none" />
          <path d="M60 250 Q55 220 70 200 Q85 185 90 210 Q95 235 80 250 Q65 260 60 250Z" stroke="hsl(25, 70%, 40%)" strokeWidth="1.5" fill="none" />
          <circle cx="75" cy="220" r="8" stroke="hsl(25, 70%, 40%)" strokeWidth="1" fill="none" />
          <circle cx="75" cy="220" r="3" fill="hsl(25, 70%, 40%)" />
          <circle cx="75" cy="40" r="10" stroke="hsl(25, 70%, 40%)" strokeWidth="1" fill="none" />
          <circle cx="75" cy="40" r="4" fill="hsl(25, 70%, 40%)" />
          <path d="M55 300 Q45 280 55 270 Q65 260 65 280" stroke="hsl(25, 70%, 40%)" strokeWidth="1" fill="none" />
          <path d="M95 300 Q105 280 95 270 Q85 260 85 280" stroke="hsl(25, 70%, 40%)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Mehndi hand pattern - right (mirrored) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none" style={{ transform: 'translateY(-50%) scaleX(-1)' }}>
        <svg viewBox="0 0 150 400" className="w-28 md:w-36 h-auto">
          <path d="M75 380 Q50 350 45 300 Q40 250 50 200 Q55 170 50 140 Q45 110 55 80 Q65 50 75 30 Q85 50 95 80 Q105 110 100 140 Q95 170 100 200 Q110 250 105 300 Q100 350 75 380Z" stroke="hsl(25, 70%, 40%)" strokeWidth="2" fill="none" />
          <path d="M60 250 Q55 220 70 200 Q85 185 90 210 Q95 235 80 250 Q65 260 60 250Z" stroke="hsl(25, 70%, 40%)" strokeWidth="1.5" fill="none" />
          <circle cx="75" cy="220" r="8" stroke="hsl(25, 70%, 40%)" strokeWidth="1" fill="none" />
          <circle cx="75" cy="220" r="3" fill="hsl(25, 70%, 40%)" />
          <circle cx="75" cy="40" r="10" stroke="hsl(25, 70%, 40%)" strokeWidth="1" fill="none" />
          <circle cx="75" cy="40" r="4" fill="hsl(25, 70%, 40%)" />
        </svg>
      </div>

      {/* Paisley motifs */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <svg key={i} className="absolute opacity-[0.08]" style={{ left: `${10 + (i % 4) * 25}%`, top: `${15 + Math.floor(i / 4) * 55}%`, width: 30 + Math.random() * 20, transform: `rotate(${Math.random() * 360}deg)` }} viewBox="0 0 40 60">
            <path d="M20 55 Q5 35 10 15 Q15 0 25 0 Q35 5 30 20 Q25 35 20 55Z" stroke="hsl(25, 70%, 45%)" strokeWidth="1.5" fill="none" />
            <circle cx="20" cy="20" r="4" fill="hsl(25, 70%, 45%)" opacity="0.5" />
          </svg>
        ))}
      </div>

      {/* Mehndi-style border top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-8 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 30" preserveAspectRatio="none">
          <path d="M0 15 Q25 0 50 15 Q75 30 100 15 Q125 0 150 15 Q175 30 200 15 Q225 0 250 15 Q275 30 300 15 Q325 0 350 15 Q375 30 400 15 Q425 0 450 15 Q475 30 500 15 Q525 0 550 15 Q575 30 600 15 Q625 0 650 15 Q675 30 700 15 Q725 0 750 15 Q775 30 800 15 Q825 0 850 15 Q875 30 900 15 Q925 0 950 15 Q975 30 1000 15" stroke="hsl(170, 45%, 30%)" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 30" preserveAspectRatio="none">
          <path d="M0 15 Q25 0 50 15 Q75 30 100 15 Q125 0 150 15 Q175 30 200 15 Q225 0 250 15 Q275 30 300 15 Q325 0 350 15 Q375 30 400 15 Q425 0 450 15 Q475 30 500 15 Q525 0 550 15 Q575 30 600 15 Q625 0 650 15 Q675 30 700 15 Q725 0 750 15 Q775 30 800 15 Q825 0 850 15 Q875 30 900 15 Q925 0 950 15 Q975 30 1000 15" stroke="hsl(170, 45%, 30%)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Henna-colored dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }, (_, i) => (
          <div key={i} className="absolute rounded-full" style={{ left: `${5 + Math.random() * 90}%`, top: `${5 + Math.random() * 90}%`, width: 3 + Math.random() * 5, height: 3 + Math.random() * 5, backgroundColor: i % 2 === 0 ? 'hsl(25, 70%, 45%)' : 'hsl(170, 45%, 35%)', opacity: 0.1 + Math.random() * 0.08 }} />
        ))}
      </div>

      {/* Hanging marigold garlands */}
      <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none px-6">
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className="sway flex flex-col items-center" style={{ animationDelay: `${i * 0.5}s` }}>
            <div className="w-px h-3 bg-wedding-gold/30" />
            {Array.from({ length: 5 + (i % 3) }, (_, j) => (
              <div key={j} className="mt-1 rounded-full" style={{ width: 9 + Math.sin(j) * 3, height: 9 + Math.sin(j) * 3, backgroundColor: j % 3 === 0 ? 'hsl(25, 85%, 55%)' : j % 3 === 1 ? 'hsl(45, 90%, 58%)' : 'hsl(15, 75%, 60%)', opacity: 0.65 }} />
            ))}
          </div>
        ))}
      </div>

      {/* Corner floral */}
      {['top-6 right-6', 'bottom-6 left-6', 'top-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} pointer-events-none`}>
          <svg viewBox="0 0 90 90" className="w-16 h-16 md:w-20 md:h-20">
            <circle cx="45" cy="45" r="14" fill="hsl(340, 65%, 55%)" opacity="0.35" />
            <circle cx="28" cy="35" r="9" fill="hsl(25, 85%, 55%)" opacity="0.3" />
            <circle cx="60" cy="55" r="9" fill="hsl(340, 65%, 60%)" opacity="0.25" />
            <circle cx="35" cy="60" r="7" fill="hsl(45, 90%, 60%)" opacity="0.25" />
            <path d="M50 30 Q55 22 60 30 Q55 26 50 30Z" fill="hsl(120, 30%, 42%)" opacity="0.3" />
            <path d="M30 50 Q35 42 40 50 Q35 46 30 50Z" fill="hsl(120, 30%, 42%)" opacity="0.3" />
          </svg>
        </div>
      ))}

      <div className="relative z-10 w-full max-w-md mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-block px-6 py-2.5 border-2 rounded-lg mb-5" style={{ borderColor: 'hsl(170, 45%, 32%)', backgroundColor: 'hsla(170, 45%, 30%, 0.08)' }}>
            <p className="font-body text-sm tracking-[0.3em] uppercase" style={{ color: 'hsl(170, 45%, 28%)' }}>
              Welcome to the
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-script text-6xl md:text-8xl mb-2" style={{ color: 'hsl(170, 45%, 25%)' }}>
            Mehndi
          </h2>
          <p className="font-display text-xl italic" style={{ color: 'hsl(340, 50%, 45%)' }}>Ceremony</p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-14 h-px" style={{ backgroundColor: 'hsl(170, 45%, 38%)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'hsl(25, 85%, 55%)' }} />
            <div className="w-14 h-px" style={{ backgroundColor: 'hsl(170, 45%, 38%)' }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="space-y-2 py-5 px-6 rounded-xl" style={{ backgroundColor: 'hsla(40, 50%, 90%, 0.5)', border: '1px solid hsla(170, 45%, 35%, 0.15)' }}>
            <p className="font-display text-2xl font-semibold" style={{ color: 'hsl(170, 45%, 18%)' }}>
              {invitation.mehndi_date || 'Date TBA'}
            </p>
            <p className="font-body text-lg" style={{ color: 'hsl(170, 35%, 38%)' }}>at {invitation.mehndi_time || '4:00 PM onwards'}</p>
            <div className="w-8 h-px mx-auto my-2" style={{ backgroundColor: 'hsl(170, 40%, 40%)' }} />
            <p className="font-body text-base" style={{ color: 'hsl(170, 30%, 42%)' }}>
              {venueName}<br />
              {venueCity}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MehndiSection;
