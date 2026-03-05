-- Create invitations table for multi-client wedding invitations
CREATE TABLE public.invitations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  bride_name TEXT NOT NULL,
  groom_name TEXT NOT NULL,
  wedding_date DATE NOT NULL,
  wedding_time TEXT NOT NULL DEFAULT '11:00 AM',
  venue TEXT NOT NULL,
  story TEXT,
  image_url TEXT,
  engagement_date TEXT,
  engagement_time TEXT DEFAULT '6:00 PM onwards',
  engagement_venue TEXT,
  haldi_date TEXT,
  haldi_time TEXT DEFAULT '10:00 AM onwards',
  haldi_venue TEXT,
  mehndi_date TEXT,
  mehndi_time TEXT DEFAULT '4:00 PM onwards',
  mehndi_venue TEXT,
  sangeet_date TEXT,
  sangeet_time TEXT DEFAULT '7:00 PM onwards',
  sangeet_venue TEXT,
  ceremony_date TEXT,
  ceremony_time TEXT DEFAULT '11:00 AM onwards',
  ceremony_venue TEXT,
  reception_date TEXT,
  reception_time TEXT DEFAULT '7:00 PM onwards',
  reception_venue TEXT,
  hashtag TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Invitations are publicly viewable"
  ON public.invitations FOR SELECT USING (true);

CREATE INDEX idx_invitations_slug ON public.invitations (slug);

INSERT INTO public.invitations (
  slug, bride_name, groom_name, wedding_date, wedding_time, venue,
  engagement_date, engagement_time, engagement_venue,
  haldi_date, haldi_time, haldi_venue,
  mehndi_date, mehndi_time, mehndi_venue,
  sangeet_date, sangeet_time, sangeet_venue,
  ceremony_date, ceremony_time, ceremony_venue,
  reception_date, reception_time, reception_venue,
  hashtag, story
) VALUES (
  'riaan-pragya',
  'Pragya', 'Riaan',
  '2026-03-15', '11:00 AM onwards',
  'The Grand Palace Banquet Hall, New Delhi, India',
  'Friday, 13th March 2026', '6:00 PM onwards', 'The Royal Garden Venue, New Delhi, India',
  'Thursday, 12th March 2026', '10:00 AM onwards', 'Family Residence, New Delhi, India',
  'Wednesday, 11th March 2026', '4:00 PM onwards', 'The Garden Terrace, New Delhi, India',
  'Tuesday, 10th March 2026', '7:00 PM onwards', 'The Crystal Ballroom, New Delhi, India',
  'Sunday, 15th March 2026', '11:00 AM onwards', 'The Grand Palace Banquet Hall, New Delhi, India',
  'Sunday, 15th March 2026', '7:00 PM onwards', 'The Grand Palace Banquet Hall, New Delhi, India',
  '#RiaanWedsPragya',
  'A beautiful journey of love'
);