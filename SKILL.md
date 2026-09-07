---
name: dmaven-warm-fusion
description: >-
  Comprehensive guide and design system rules for DMaven Design System (Warm Fusion).
  Combines Neo-Brutalist tactile physics with Swiss typographic warmth for rich multi-color brands.
  Includes Tailwind CSS presets, Radix UI accessible primitives, and strict guardrails.
---

# DMaven Design System · Warm Fusion (`dmaven-warm-fusion`)

The **DMaven Design System** is an intentional, high-contrast design language and component architecture born from the fusion of **Neo-Brutalist structural physics** and **Swiss typographic warmth**, engineered specifically for expressive, multi-color brand identities.

---

## 1. The Design Genesis & Philosophy

### A. The Neo-Brutalist Outset (The Bone)
- **Tactile Physics**: Crisp 2.5px ink borders (`#001F51`), hard 5px × 5px drop shadows with zero blur, and physical press micro-interactions (`translate(2px, 2px)` on active/hover).
- **Structural Confidence**: High visual clarity, bold monospace badges, distinct section boundaries, and truth to screen.

### B. The Swiss Style Warmth (The Soul)
- **Organic Grounds**: Replaces cold sterile pure whites/grays with warm organic cream backgrounds (`#F9F6F0`, `#F1ECE0`).
- **Human Typographic Scale**: High-character display headers (`Bricolage Grotesque`), ultra-legible modern body type (`Instrument Sans`), precise data badges (`Space Mono`), and classical Arabic script (`Amiri`).
- **Warm Rounded Curves**: Generous rounded corners (16px / 22px) and pill chips that soften brutalist rigidity into an inviting, approachable artifact.

### C. Multi-Color Brand Harmony
- Engineered specifically for brands with rich multi-color palettes (Deep Navy, Sacred Terra, Emerald Growth, Warm Gold, Brilliant Blue), ensuring high vibrancy without visual clutter.

---

## 2. Core Token Standards

### Color Palette (Canonical Values)
```css
:root {
  /* Grounds & Surfaces */
  --wf-ground: #F9F6F0;      /* App background (warm organic cream) */
  --wf-ground-2: #F1ECE0;    /* Raised / alt section wash */
  --wf-surface: #FFFFFF;     /* Pure card surface */
  --wf-forest: #001F51;      /* Deep DMaven Navy — main ink & dark borders */
  --wf-pine: #0A2D6E;        /* Navy secondary */

  /* Ink Hierarchy */
  --wf-ink: #001F51;         /* Primary text */
  --wf-ink-2: #27456D;       /* Secondary text */
  --wf-muted: #5E718D;       /* Muted captions */
  --wf-ink-inv: #F8FAFC;     /* Text on dark panels */
  --wf-ink-inv-2: #CBD5E1;

  /* Brand Accents */
  --wf-terra: #FB5707;       /* Primary CTA & Energy Orange */
  --wf-terra-deep: #D44200;  /* Hover / active */
  --wf-terra-tint: #FFF0EA;  /* Accent wash */

  --wf-green: #1BC67F;       /* Emerald Growth & Barakah */
  --wf-green-dark: #006634;
  --wf-green-tint: #E8F9F1;

  --wf-gold: #FFCB66;        /* Warm Gold */
  --wf-gold-dark: #916100;
  --wf-gold-tint: #FFF8E8;

  --wf-blue: #3B86FE;        /* Brilliant Blue */
  --wf-blue-tint: #EEF4FF;

  /* Category Chips */
  --wf-lime: #E1F8EC;
  --wf-sky: #E2EEFF;
  --wf-pink: #FCE7F3;
  --wf-peach: #FFEBE1;

  /* Structure & Shadows */
  --wf-border: #001F51;
  --wf-bw: 2.5px;
  --wf-bw-thin: 2px;
  --wf-shadow: 5px 5px 0 var(--wf-border);
  --wf-shadow-sm: 3px 3px 0 var(--wf-border);
  --wf-shadow-lg: 8px 8px 0 var(--wf-border);

  /* Radii */
  --wf-r-xl: 22px;
  --wf-r-lg: 16px;
  --wf-r-md: 12px;
  --wf-r-sm: 8px;
  --wf-r-pill: 9999px;

  /* Typography */
  --wf-f-disp: "Bricolage Grotesque", -apple-system, sans-serif;
  --wf-f-body: "Instrument Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --wf-f-mono: "Space Mono", ui-monospace, Menlo, monospace;
  --wf-f-ar: "Amiri", serif;
}
```

---

## 3. Strict System Guardrails

1. **Never use soft, blurred shadows**: Always use hard offset drop shadows (`5px 5px 0 #001F51` or `3px 3px 0 #001F51`). Never `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`.
2. **Never use pure #000000 black for borders/ink**: Always use Deep Navy `#001F51` (or the customized brand ink).
3. **Never use purple #8B5CF6 or unanchored neon colors**: Keep strictly to the brand palette tokens.
4. **No emojis in UI controls or icons**: Always use clean Lucide SVG vector icons (`stroke-width: 2.2`).
5. **Mobile-first Drawer / Modal standard**:
   - On screens <= 680px, modals **must** dock to `bottom: 0` as a bottom-sheet drawer with a tactile pill handle (`.wf-modal-handle`), zero lateral offset, and safe-area padding.
   - On desktop screens (> 680px), modals render as centered dialogs with a solid 8px × 8px drop shadow.
6. **Minimum Touch Target**: All clickable elements must have a minimum tap target of 44px × 44px on mobile.
7. **Tactile Button Press**: Interactive buttons must animate with physical feedback on active: `transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--wf-border);`.

---

## 4. Architecture: Tailwind CSS + Radix UI

- **Tailwind Utility Tokens**:
  - `bg-ground`, `bg-ground-2`, `bg-surface`, `bg-terra`, `bg-forest`, `bg-green`, `bg-gold`, `bg-blue`
  - `border-wf` (2.5px solid #001F51), `border-wf-thin` (2px solid #001F51)
  - `shadow-wf` (5px 5px 0 #001F51), `shadow-wf-sm` (3px 3px 0 #001F51), `shadow-wf-lg` (8px 8px 0 #001F51)
  - `rounded-wf-xl` (22px), `rounded-wf-lg` (16px), `rounded-wf-md` (12px), `rounded-wf-pill` (9999px)
  - `font-display`, `font-body`, `font-mono`, `font-arabic`
- **Radix UI Primitives**:
  - Wrap Radix `Dialog`, `Sheet`, `Tabs`, `Accordion`, `DropdownMenu`, `Tooltip`, `Switch` in DMaven Warm Fusion Tailwind classes to achieve accessible, unstyled logic with tactile brutalist styling.
