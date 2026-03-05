import React from 'react';
import { useInvitation } from '@/contexts/InvitationContext';

const Footer: React.FC = () => {
  const invitation = useInvitation();
  const weddingDate = new Date(invitation.wedding_date);
  const dateStr = weddingDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const venueParts = invitation.venue.split(',');
  const venueCity = venueParts.slice(1, 2).join('').trim() || invitation.venue;

  return (
    <footer className="relative py-16 overflow-hidden" style={{ backgroundColor: 'hsl(30, 25%, 10%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wedding-gold/30 to-transparent" />

      <div className="relative z-10 max-w-md mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px" style={{ backgroundColor: 'hsl(36, 50%, 40%)' }} />
          <svg viewBox="0 0 20 20" className="w-4 h-4">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="hsl(36, 60%, 50%)" opacity="0.5" />
          </svg>
          <div className="w-12 h-px" style={{ backgroundColor: 'hsl(36, 50%, 40%)' }} />
        </div>

        <p className="font-script text-4xl md:text-5xl" style={{ color: 'hsl(36, 60%, 65%)' }}>
          {invitation.groom_name} & {invitation.bride_name}
        </p>

        <p className="font-display text-base mt-3" style={{ color: 'hsl(30, 20%, 50%)' }}>
          {dateStr} · {venueCity}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-20 h-px" style={{ backgroundColor: 'hsl(36, 40%, 30%)' }} />
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="hsl(0, 55%, 45%)" opacity="0.5" />
          </svg>
          <div className="w-20 h-px" style={{ backgroundColor: 'hsl(36, 40%, 30%)' }} />
        </div>

        <p className="font-body text-xs mt-8 tracking-[0.2em] uppercase" style={{ color: 'hsl(30, 15%, 35%)' }}>
          We can't wait to celebrate with you
        </p>

        {invitation.hashtag && (
          <p className="font-body text-xs mt-6" style={{ color: 'hsl(30, 10%, 28%)' }}>
            {invitation.hashtag}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
