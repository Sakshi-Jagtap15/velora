

# Redesign: Envelope Opening + Event-Specific Backgrounds

## 1. Envelope Opening Animation (WelcomeDoors.tsx + index.css)

Replace the current card-flip with an **envelope + card** interaction:

- **Envelope body**: A landscape-oriented envelope shape (cream/gold) with a triangular flap on top
- **Wax seal**: A circular deep-red seal with "R&P" initials, positioned on the flap closure point. This is the clickable element
- **Animation sequence** (on seal click):
  1. Seal breaks/fades with a subtle scale animation
  2. Envelope flap rotates open (hinge at top edge, flips upward using rotateX)
  3. Card slides up and out of the envelope with a smooth translateY animation
  4. Card displays the invitation content (names, "scroll to explore")
- The inner card content is hidden behind the envelope until the flap opens and card rises
- New CSS keyframes: `envelope-flap-open` (rotateX from 0 to 180deg, origin top), `card-rise` (translateY from inside envelope upward), `seal-break` (scale + fade out)

## 2. Event Section Background Redesigns

Remove all Mughal arch SVGs from every section. Replace with decorations relevant to each function:

### Wedding Section
- Remove: MughalArch component usage, arch SVG
- Add: Large subtle mandala pattern in the background center (low opacity), paisley corner motifs, a decorative rangoli-style circular pattern, scattered small floral dots

### Engagement Section  
- Remove: Large white Mughal arch SVG frame
- Add: Scattered diamond/ring motifs, elegant circular wreath of small flowers in center background, soft radial gradient glow, delicate string light dots across the top

### Haldi Section
- Keep: Floral vine borders (already relevant), mandala patterns, lotus (these are good)
- Remove: Nothing major needed here -- already has relevant haldi decorations
- Add: Turmeric bowl/kalash silhouette motif, scattered turmeric splatter dots for texture

### Mehndi Section
- Remove: Deep teal Mughal arch SVG
- Add: Henna/mehndi hand pattern outlines as subtle background, paisley motifs, intricate border patterns with mehndi-style swirls, scattered henna-colored dots

### Sangeet Section
- Remove: Scalloped gold arch SVG
- Add: Musical note motifs scattered in background, disco ball / spotlight radial gradient, dancing figure silhouettes (abstract), more prominent twinkling stars, microphone/dholak subtle icons

## Files to Modify

1. **src/components/wedding/WelcomeDoors.tsx** -- Complete rewrite for envelope design
2. **src/index.css** -- Replace card-flip keyframes with envelope-flap-open, card-rise, seal-break animations
3. **src/components/wedding/WeddingSection.tsx** -- Remove MughalArch, add mandala/rangoli background
4. **src/components/wedding/EngagementSection.tsx** -- Remove arch SVG, add ring/wreath/lights
5. **src/components/wedding/MehndiSection.tsx** -- Remove arch SVG, add mehndi patterns
6. **src/components/wedding/SangeetSection.tsx** -- Remove arch SVG, add music-themed decorations
7. **src/components/wedding/HaldiSection.tsx** -- Minor additions (turmeric motifs)

