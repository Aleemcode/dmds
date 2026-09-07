/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ground: {
          DEFAULT: "var(--wf-ground, #F9F6F0)",
          2: "var(--wf-ground-2, #F1ECE0)",
        },
        surface: "var(--wf-surface, #FFFFFF)",
        forest: {
          DEFAULT: "var(--wf-forest, #001F51)",
          pine: "var(--wf-pine, #0A2D6E)",
        },
        ink: {
          DEFAULT: "var(--wf-ink, #001F51)",
          2: "var(--wf-ink-2, #27456D)",
          muted: "var(--wf-muted, #5E718D)",
          inv: "var(--wf-ink-inv, #F8FAFC)",
          "inv-2": "var(--wf-ink-inv-2, #CBD5E1)",
        },
        terra: {
          DEFAULT: "var(--wf-terra, #FB5707)",
          deep: "var(--wf-terra-deep, #D44200)",
          tint: "var(--wf-terra-tint, #FFF0EA)",
        },
        green: {
          DEFAULT: "var(--wf-green, #1BC67F)",
          dark: "var(--wf-green-dark, #006634)",
          tint: "var(--wf-green-tint, #E8F9F1)",
        },
        gold: {
          DEFAULT: "var(--wf-gold, #FFCB66)",
          dark: "var(--wf-gold-dark, #916100)",
          deep: "var(--wf-gold-deep, #D97706)",
          tint: "var(--wf-gold-tint, #FFF8E8)",
        },
        blue: {
          DEFAULT: "var(--wf-blue, #3B86FE)",
          tint: "var(--wf-blue-tint, #EEF4FF)",
        },
        chip: {
          lime: "var(--wf-lime, #E1F8EC)",
          sky: "var(--wf-sky, #E2EEFF)",
          pink: "var(--wf-pink, #FCE7F3)",
          peach: "var(--wf-peach, #FFEBE1)",
        },
      },
      boxShadow: {
        wf: "var(--wf-shadow, 5px 5px 0 var(--wf-border, #001F51))",
        "wf-sm": "var(--wf-shadow-sm, 3px 3px 0 var(--wf-border, #001F51))",
        "wf-lg": "var(--wf-shadow-lg, 8px 8px 0 var(--wf-border, #001F51))",
      },
      borderWidth: {
        wf: "var(--wf-bw, 2.5px)",
        "wf-thin": "var(--wf-bw-thin, 2px)",
      },
      borderRadius: {
        "wf-xl": "var(--wf-r-xl, 22px)",
        "wf-lg": "var(--wf-r-lg, 16px)",
        "wf-md": "var(--wf-r-md, 12px)",
        "wf-sm": "var(--wf-r-sm, 8px)",
        "wf-pill": "var(--wf-r-pill, 9999px)",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        body: ['"Instrument Sans"', "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
        arabic: ['"Amiri"', "serif"],
      },
      transitionDuration: {
        wf: "var(--wf-dur, 200ms)",
        "wf-fast": "var(--wf-dur-fast, 120ms)",
      },
    },
  },
  plugins: [],
};
