

# Move All Interactions Inside iPhone Mockups

## Current State
- 5 sections already have phone mockups (Hero, Onboarding, Dashboard, HiddenRisk, Preferences)
- 7 sections have interactive controls or rich content on the page with no phone mockup: ESGScoring, Scenario, Nudges, Impact, Discovery, Legacy, Compliance
- NavigationSection has a tab bar preview but no phone mockup

## Changes (8 files)

### 1. ESGScoringSection.tsx
- Add PhoneMockup containing: company picker as segmented control at top, three animated score bars (blue/green/violet), divergence gap indicator, greenwashing risk badge
- Page keeps: editorial copy + the Claimed→Verified→Projected layer diagram (read-only)

### 2. ScenarioSection.tsx
- Add PhoneMockup containing: time horizon segmented control, mini Recharts AreaChart (height ~120px), pathway chips, carbon tax cards as scrollable list
- Page keeps: editorial copy + read-only stranded vs transition bars

### 3. NudgesSection.tsx
- Add PhoneMockup containing: notification card stack with nudges, dismiss button revealing cost-of-inaction inline, suitability badge at bottom
- Page keeps: editorial copy + 2-3 read-only feature description cards

### 4. ImpactSection.tsx
- Add PhoneMockup containing: tab bar (Personal/Community/Global), metric cards with colored icons, Singapore map with labeled dots, time range selector
- Page keeps: editorial copy + SDG pie chart + collective counter (read-only)

### 5. DiscoverySection.tsx
- Add PhoneMockup containing: Like-for-Like comparison cards, thematic explorer grid with colored icons, rewards tier with progress bar and perk list
- Page keeps: editorial copy + read-only feature description cards

### 6. LegacySection.tsx
- Add PhoneMockup containing: goal card with progress ring, transition roadmap timeline, projected value display
- Page keeps: editorial copy + exportable report preview card

### 7. ComplianceSection.tsx
- Add PhoneMockup containing: suitability gauge (semicircular), checklist with green checkmarks, privacy toggles, audit timeline
- Page keeps: editorial copy + framework badges

### 8. NavigationSection.tsx
- Add PhoneMockup with interactive tab bar — tapping a tab shows the corresponding screen list inside the phone
- Page keeps: the 4-column IA grid (read-only)

## Layout Pattern
Every section follows: left side = PhoneMockup (interactive), right side = editorial copy + read-only cards. Uses the same `flex-col lg:flex-row` layout as existing Dashboard/Preference sections.

## Technical Notes
- Import PhoneMockup into all 8 files
- All state stays in section components
- For ScenarioSection mini-chart: `<ResponsiveContainer width="100%" height={120}>`
- Use colorful Lucide icons inside phone screens (emerald for env, blue for water, amber for governance, red for risk)
- Phone text sizing: text-[11px] body, text-[13px] headers, text-[10px] captions

