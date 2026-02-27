

# Update Color Palette & Font

## Color Mapping
- **Primary/Turquoise** → Very light cyan `#99ffd6` (HSL: `150 100% 80%`)
- **White** → `#FFFFFF` (background stays white)
- **Gold** → Light gold `#FDDC5C` (HSL: `45 98% 68%`) and Abarian gold `#F4CA3E` (HSL: `43 90% 60%`)
- **Font** → `Lucida Sans` system font everywhere (no Google Fonts needed)

## Files to Update

### 1. `src/index.css`
- Remove all `@import url(...)` Google Font lines
- Update CSS variables:
  - `--primary`: `150 100% 80%` (#99ffd6)
  - `--primary-foreground`: dark green for contrast
  - `--turquoise`: `150 100% 93%` (lighter tint of #99ffd6)
  - `--turquoise-deep`: `150 100% 80%` (#99ffd6 itself)
  - `--turquoise-dark`: `150 60% 30%`
  - `--gold`: `45 98% 68%` (#FDDC5C)
  - `--gold-deep`: `43 90% 60%` (#F4CA3E)
  - `--gold-dark`: `43 85% 45%`
  - `--accent`: lighter tint of #99ffd6
  - `--accent-foreground`: darker green
  - `--ring`: match primary
  - `--background`: `0 0% 100%` (pure white)
  - `--card`: `0 0% 100%`
  - Chart colors updated to match new cyan/gold palette
- Update body font-family to `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif`
- Update h1-h6 font-family to same
- Update dark mode variables to match new palette
- Update gradient utilities (`.gradient-hero`, `.text-gradient-turquoise`, `.text-gradient-gold`) to use new hex values

### 2. `tailwind.config.ts`
- Update `fontFamily.sans` to `['Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif]`
- Remove `sora` and `inter` font family entries (or point them to Lucida Sans too)
- Update `fontFamily.serif` and `fontFamily.mono` to also use Lucida Sans as primary

### 3. `index.html`
- Update `<title>` to "NextGen Sustainable Wealth — Aurora"

No section component files need changes — they all reference CSS variables and Tailwind classes which will cascade automatically.

