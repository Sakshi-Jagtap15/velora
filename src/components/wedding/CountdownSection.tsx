import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { useInvitation } from '@/contexts/InvitationContext';

const CountdownSection: React.FC = () => {
  const invitation = useInvitation();
  const weddingDate = new Date(invitation.wedding_date + 'T11:00:00+05:30');

  const venueParts = invitation.venue.split(',');
  const venueCity = venueParts.slice(1).join(',').trim() || invitation.venue;

  const dateStr = weddingDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="Countdown" className="relative py-20 overflow-hidden" style={{ backgroundColor: 'hsl(30, 30%, 15%)' }}>
      {/* Subtle mandala background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <svg viewBox="0 0 400 400" className="w-[90vw] max-w-[500px]">
          {[0, 45, 90, 135].map((angle) => (
            <ellipse key={angle} cx="200" cy="200" rx="180" ry="50" stroke="hsl(36, 60%, 55%)" strokeWidth="1" fill="none" transform={`rotate(${angle} 200 200)`} />
          ))}
          <circle cx="200" cy="200" r="60" stroke="hsl(36, 60%, 55%)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wedding-gold/30 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.35em] uppercase" style={{ color: 'hsl(36, 60%, 60%)' }}>
            Counting down to
          </p>
          <h2 className="font-script text-4xl md:text-5xl mt-2 mb-10" style={{ color: 'hsl(40, 50%, 92%)' }}>
            Our Special Day
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex justify-center gap-4 md:gap-8">
            {units.map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: 'hsla(36, 60%, 45%, 0.12)',
                    border: '1px solid hsla(36, 60%, 50%, 0.2)',
                  }}
                >
                  <span className="font-display text-3xl md:text-4xl font-semibold" style={{ color: 'hsl(36, 60%, 72%)' }}>
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="font-body text-xs tracking-[0.2em] uppercase mt-2" style={{ color: 'hsl(36, 30%, 55%)' }}>
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-wedding-gold/20" />
            <svg viewBox="0 0 20 20" className="w-3 h-3">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="hsl(36, 60%, 50%)" opacity="0.5" />
            </svg>
            <div className="w-16 h-px bg-wedding-gold/20" />
          </div>
          <p className="font-display text-base mt-4" style={{ color: 'hsl(36, 25%, 55%)' }}>
            {dateStr} · {venueCity}
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wedding-gold/30 to-transparent" />
    </section>
  );
};

export default CountdownSection;
