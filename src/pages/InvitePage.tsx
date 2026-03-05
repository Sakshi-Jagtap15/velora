import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { InvitationProvider, type Invitation } from '@/contexts/InvitationContext';
import WelcomeDoors from '../components/wedding/WelcomeDoors';
import FloatingPetals from '../components/wedding/FloatingPetals';
import WeddingSection from '../components/wedding/WeddingSection';
import CountdownSection from '../components/wedding/CountdownSection';
import EngagementSection from '../components/wedding/EngagementSection';
import HaldiSection from '../components/wedding/HaldiSection';
import MehndiSection from '../components/wedding/MehndiSection';
import SangeetSection from '../components/wedding/SangeetSection';
import WeddingCeremonySection from '../components/wedding/WeddingCeremonySection';
import ReceptionSection from '../components/wedding/ReceptionSection';
import NavDots from '../components/wedding/NavDots';
import Footer from '../components/wedding/Footer';

const sections = ['Wedding', 'Countdown', 'Engagement', 'Haldi', 'Mehndi', 'Sangeet', 'WeddingCeremony', 'Reception'];

const InvitePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const fetchInvitation = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('invitations')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setInvitation(data);
      }
      setLoading(false);
    };

    fetchInvitation();
  }, [slug]);

  useEffect(() => {
    if (doorsOpen) {
      const timer = setTimeout(() => setShowContent(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [doorsOpen]);

  useEffect(() => {
    if (!showContent) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target.id);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [showContent]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-wedding-cream to-wedding-blush">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-wedding-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-display text-lg text-muted-foreground">Loading invitation...</p>
        </div>
      </div>
    );
  }

  if (notFound || !invitation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-wedding-cream to-wedding-blush">
        <div className="text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-wedding-gold/40" />
            <svg viewBox="0 0 20 20" className="w-4 h-4">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="hsl(36, 60%, 55%)" opacity="0.6" />
            </svg>
            <div className="w-12 h-px bg-wedding-gold/40" />
          </div>
          <h1 className="font-script text-5xl md:text-6xl text-primary mb-4">Invitation Not Found</h1>
          <p className="font-display text-lg text-muted-foreground mb-6">
            The invitation you're looking for doesn't exist or may have been removed.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-wedding-gold/30" />
            <div className="w-2 h-2 rotate-45 bg-wedding-gold/50" />
            <div className="w-16 h-px bg-wedding-gold/30" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <InvitationProvider invitation={invitation}>
      <div className="overflow-x-hidden">
        {!showContent && (
          <WelcomeDoors onOpen={() => setDoorsOpen(true)} isOpen={doorsOpen} />
        )}

        {doorsOpen && <FloatingPetals />}

        {showContent && (
          <>
            <NavDots sections={sections} activeIndex={activeSection} />
            <WeddingSection />
            <CountdownSection />
            <EngagementSection />
            <HaldiSection />
            <MehndiSection />
            <SangeetSection />
            <WeddingCeremonySection />
            <ReceptionSection />
            <Footer />
          </>
        )}
      </div>
    </InvitationProvider>
  );
};

export default InvitePage;
