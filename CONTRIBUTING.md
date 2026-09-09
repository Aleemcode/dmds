# Contributing to Warm Fusion Design System (`@designmaven/design-system`)

Thank you for your interest in contributing to **Warm Fusion**! We welcome contributions from developers, designers, and AI engineers across the world.

---

## 🌟 The Warm Fusion Philosophy

When contributing components, tokens, or templates, always align with the core synthesis:
1. **The Tactile Brutalist Bone**: Physical 2.5px solid ink borders (`var(--slate-12)`), 5px hard offset drop shadows (`5px 5px 0 var(--wf-border)`), zero blurred shadows, and active press micro-interactions (`translate(2px, 2px)`).
2. **The Swiss Typographic Soul**: Organic cream backgrounds, human-centered typography (*Bricolage Grotesque*, *Instrument Sans*), and smooth curved corners (16px / 22px).
3. **12-Step Radix Semantic Color Tokens**: All colors and background washes MUST be parameterized via `@radix-ui/colors` (Steps 1–12 + Alpha variants). Never hardcode random hex values in components.
4. **Phosphor Icons Standard**: Exclusively use `@phosphor-icons/react` with `weight="bold"` or `@phosphor-icons/web` with `ph-bold`. Never use emojis for UI controls.
5. **Zero Button Text Breaks**: All buttons and action pills must enforce `white-space: nowrap !important;`.

---

## 🛠️ Contribution Workflow

### 1. Fork & Clone
Fork the repository on GitHub, then clone your fork locally:
```bash
git clone https://github.com/YOUR_USERNAME/dmds.git
cd dmds
npm install
```

### 2. Create a Topic Branch
```bash
git checkout -b feat/your-component-name
# or
git checkout -b fix/issue-description
```

### 3. Local Development & Preview
Start the local documentation and component preview server:
```bash
npm run dev
```

### 4. Component Contribution Guidelines
When creating or enhancing a component in `src/components/`:
- Use accessible **Radix UI headless primitives** (`@radix-ui/react-*`) where applicable.
- Ensure TypeScript interfaces are fully typed and exported in `src/index.ts`.
- Ensure dark mode compatibility (`.dark` / `[data-theme="dark"]`).
- For modal dialogs, ensure they adapt automatically to a bottom sheet on mobile screens ($\le 680\text{px}$) with a tactile drag handle.

### 5. Submitting a Pull Request (PR)
1. Commit your changes using conventional commits (e.g., `feat(button): add loading spinner variant` or `fix(input): resolve focus halo ring on safari`).
2. Push your branch to your fork:
   ```bash
   git push origin feat/your-component-name
   ```
3. Open a Pull Request against the `main` branch of `https://github.com/Aleemcode/warm-fusion`.
4. Fill out the PR template checklist.

---

## 🤝 Code of Conduct
Be respectful, inclusive, and constructive. We build together with warmth and high standards.

---

**Warm Fusion Design System** · Created by [Design Maven Studio](https://github.com/Aleemcode) · Architected by [Aleem Akinyoola](https://www.linkedin.com/in/aleemakinyoola).
