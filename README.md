# DMaven Design System · Warm Fusion

<div align="center">
  <h3>The Neo-Brutalist structure of crisp tactile physics, fused with the organic warmth of Swiss design.</h3>
  <p><strong>Purposefully built for rich multi-color brand identities.</strong></p>
</div>

---

## 🌟 The Philosophy: Why Warm Fusion?

Most brutalist systems feel punishingly cold and aggressive, while modern corporate systems often drift into sterile, flat gray minimalism. **DMaven Design System (Warm Fusion)** is the intentional middle ground:

- **The Neo-Brutalist Bone**: 2.5px solid dark ink borders, hard 5px drop shadows with zero blur, physical press animations (`translate(2px, 2px)`), and bold monospace badges.
- **The Swiss Typographic Soul**: Organic cream canvases (`#F9F6F0`), generous structural rhythm, human-centered typography (*Bricolage Grotesque* & *Instrument Sans*), and smooth curved corners (16px / 22px).
- **Multi-Color Brand Harmony**: Engineered specifically to balance vibrant multi-color palettes (Deep Navy, Sacred Terra, Emerald Growth, Warm Gold, Brilliant Blue) without visual clutter.

---

## 🚀 Features

- 🎨 **Interactive Live Theme Studio**: Customize color tokens, border width, and shadow depth in real time with 1-click preset switching.
- 🤖 **Dynamic AI Agent Skill Generator**: Export a complete `SKILL.md` or `AGENTS.md` for Antigravity, Claude, Cursor, or Gemini loaded with all system guardrails.
- ⚡ **Pure Tailwind CSS Preset**: Zero-JS styling utilities for HTML, Vue, Svelte, or Astro.
- 🧩 **React + Radix UI Primitives**: Accessible, unstyled headless primitives pre-wrapped in Warm Fusion styling.
- 📱 **Mobile-First Bottom Sheet**: Modals seamlessly dock to the bottom with tactile drag handles on mobile screens ($\le 680\text{px}$) with zero horizontal drift.

---

## 📦 Quickstart

### 1. Install via Starter Template or Direct GitHub
```bash
# Option A: Instant Starter Kit (Recommended)
npx degit Aleemcode/dmds my-app

# Option B: Direct GitHub dependency
npm install github:Aleemcode/dmds @phosphor-icons/react

# Option C: Git clone
git clone https://github.com/Aleemcode/dmds.git
```

### 2. Add Tailwind Preset
In your `tailwind.config.js`:
```javascript
module.exports = {
  presets: [require("@dmaven/design-system/preset")],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
};
```

### 3. Use React + Radix Primitives
```tsx
import { Button, Card, Badge, Dialog } from "@dmaven/design-system";

export default function App() {
  return (
    <Card variant="surface" interactive>
      <Badge variant="terra">Active</Badge>
      <h2 className="font-display font-bold text-xl text-forest mt-2">Tactile Card</h2>
      <Button variant="primary" className="mt-4">
        Confirm Action
      </Button>
    </Card>
  );
}
```

---

## 🛡️ Strict System Guardrails

1. **Never use soft, blurred shadows**: Always use hard offset drop shadows (`5px 5px 0 #001F51`).
2. **Never use pure #000000 black**: Always use customized brand ink (`#001F51`).
3. **No emojis in UI controls**: Always use Lucide SVG vector icons (`stroke-width: 2.2`).
4. **Mobile Bottom-Sheet Rule**: On mobile viewports ($\le 680\text{px}$), modals must dock to `bottom: 0` with drag handles.
5. **Physical Press Animations**: Buttons animate with `transform: translate(2px, 2px)` on active press.
6. **Minimum 44px Tap Targets**: Ensure touch-friendly controls across mobile devices.

---

## 📄 License
MIT © 2026 [Aleem Akinyoola](https://github.com/Aleemcode)
