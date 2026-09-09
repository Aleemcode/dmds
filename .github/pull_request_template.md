## 📋 Description of Changes
<!-- Briefly describe what component, token, or feature this PR adds or fixes -->

## 🛡️ Warm Fusion Checklist
- [ ] Uses 2.5px solid ink borders (`var(--wf-bw)`) and hard offset drop shadows with zero blur
- [ ] Color tokens reference standard 12-step Radix semantic scales (`@radix-ui/colors`) or `--wf-*` tokens
- [ ] Uses Phosphor Icons (`ph-bold` / `@phosphor-icons/react` with `weight="bold"`)
- [ ] Buttons & action chips enforce `white-space: nowrap !important;` (zero text breaks)
- [ ] Modals adapt to a mobile bottom-sheet drawer on viewports $\le 680\text{px}$
- [ ] Tested in both Light and Dark mode
- [ ] TypeScript types exported in `src/index.ts`
