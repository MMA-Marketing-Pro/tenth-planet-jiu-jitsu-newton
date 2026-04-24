# Phase 1 — Foundation: Core Sussex County Neighborhoods

**Ship target:** 25 pages. Focus: establish indexable local-SEO footprint in the Tier-1 Sussex County towns before the site has any authority.

---

## Skills required (read before building)

- `.agent/skills/site-redesign/SKILL.md` (design system, nav/footer/modal spec)
- `.agent/skills/taste-skill/SKILL.md` (quality bar)
- `.agent/skills/seo-audit/SKILL.md` (on-page requirements)
- `.agent/skills/programmatic-seo/SKILL.md` (playbooks)
- `sites/tenth-planet-jiu-jitsu-newton/brand-kit.json` (palette + fonts)
- `sites/tenth-planet-jiu-jitsu-newton/content-profile.json` (real academy content)
- `sites/tenth-planet-jiu-jitsu-newton/seo-roadmap/keywords.json` (keyword inventory)

**Do NOT re-invent any of these.** Match the existing CSS variables, typography, lead modal markup, and footer attribution EXACTLY.

---

## Build manifest — 25 pages

### Group A: Tier-1 Neighborhood Hubs (4 pages)

Create a hub page per top-priority neighborhood. Each hub links to all 4 program pages for that neighborhood.

| # | URL | H1 | Target keyword | Meta |
|---|---|---|---|---|
| 1 | `/locations/newton-nj/index.html` | Martial Arts Classes in Newton, NJ | "martial arts newton nj" | 155 chars: "Jiu-jitsu, MMA, Muay Thai, and kids martial arts for Newton, NJ residents. Official 10th Planet affiliate just off US-206. Book your free trial class." |
| 2 | `/locations/sparta-nj/index.html` | Martial Arts Classes Near Sparta, NJ | "martial arts sparta nj" | "Serving Sparta, NJ from our US-206 academy in Augusta — 10th Planet Jiu-Jitsu, MMA, Muay Thai, and kids classes. 20 minutes from downtown Sparta." |
| 3 | `/locations/franklin-nj/index.html` | Martial Arts Classes for Franklin, NJ | "martial arts franklin nj" | "Franklin NJ residents — train at 10th Planet Jiu-Jitsu Newton. No-gi BJJ, MMA, Muay Thai, and kids 10P JJ just 15 min up 517." |
| 4 | `/locations/vernon-nj/index.html` | Martial Arts Classes for Vernon, NJ | "martial arts vernon nj" | "Vernon NJ martial arts — 10th Planet Jiu-Jitsu, MMA, Muay Thai, and kids classes at our Augusta academy. 25 min from Vernon center." |

### Group B: Neighborhood × Service pages (16 pages — 4 neighborhoods × 4 services: JJ + Kids + MMA + Muay Thai)

For each of Newton, Sparta, Franklin, Vernon — build 4 service-specific pages. Example pattern below; expand to all 16:

| # | URL | H1 | Primary keyword |
|---|---|---|---|
| 5 | `/locations/newton-nj/jiu-jitsu/` | 10th Planet Jiu-Jitsu in Newton, NJ | "10th planet jiu jitsu newton nj" |
| 6 | `/locations/newton-nj/kids/` | Kids Martial Arts in Newton, NJ | "kids martial arts newton nj" |
| 7 | `/locations/newton-nj/mma/` | MMA Classes in Newton, NJ | "mma classes newton nj" |
| 8 | `/locations/newton-nj/muay-thai/` | Muay Thai in Newton, NJ | "muay thai newton nj" |
| 9-12 | `/locations/sparta-nj/{service}/` × 4 | (same pattern) | |
| 13-16 | `/locations/franklin-nj/{service}/` × 4 | (same pattern) | |
| 17-20 | `/locations/vernon-nj/{service}/` × 4 | (same pattern) | |

**Each page MUST contain:**
- 800+ words of unique body copy (no variable-swap templates)
- A neighborhood-specific intro paragraph (reference a landmark, road, or local detail)
- Drive time from that neighborhood to 17 US-206 Augusta NJ (use Google Maps approximation)
- An embedded mini-schedule showing the 3-4 classes most relevant to this service
- 1 real testimonial (rotate which one — don't use Anthony Guzman's quote on every page)
- "Book Free Trial" CTA opening the lead modal (same markup as existing pages)
- Link UP to the program page (`/jiu-jitsu.html`, `/kids.html`, etc.) and ACROSS to 2 sibling neighborhood pages

### Group C: Top-of-funnel glossary (5 pages)

| # | URL | H1 | Primary keyword |
|---|---|---|---|
| 21 | `/learn/what-is-10th-planet-jiu-jitsu/` | What Is 10th Planet Jiu-Jitsu? | "what is 10th planet jiu jitsu" |
| 22 | `/learn/what-is-no-gi-jiu-jitsu/` | What Is No-Gi Jiu-Jitsu? | "what is no gi jiu jitsu" |
| 23 | `/learn/what-to-wear-to-first-bjj-class/` | What to Wear to Your First BJJ Class | "what to wear to first bjj class" |
| 24 | `/learn/jiu-jitsu-belt-ranks/` | Jiu-Jitsu Belt Ranks Explained | "jiu jitsu belts" |
| 25 | `/learn/what-is-rubber-guard/` | What Is Rubber Guard? (The 10th Planet Signature Position) | "what is rubber guard" |

Each glossary page: 600–900 words, `Article` + `DefinedTerm` + `BreadcrumbList` schema, links to `/jiu-jitsu.html` and to the modal CTA.

---

## Content uniqueness checklist per page

- [ ] 600+ words of unique prose
- [ ] 1 neighborhood/topic-specific intro paragraph (not templated)
- [ ] 1 real student testimonial placed contextually
- [ ] Real schedule or class-times reference pulled from the main site
- [ ] H1 contains the primary keyword
- [ ] Meta description 150–160 chars, unique, has primary keyword + CTA
- [ ] 3+ internal links: 1 UP to parent, 1 ACROSS to sibling, 1+ to `/schedule.html` or `/booking.html`
- [ ] 1+ outbound link to an authoritative source (10th Planet HQ site, IBJJF, etc. — use `rel="noopener"`)
- [ ] Canonical tag pointing to self
- [ ] Open Graph + Twitter Card meta present
- [ ] Correct JSON-LD schema type for page (see table in `roadmap.md`)
- [ ] `"Powered by MMA Marketing Pro"` footer link present (with `target="_blank" rel="noopener"`)
- [ ] Mobile quality bar passed — viewport-fit=cover, backdrop-filter override on nav.open, 44px tap targets

---

## Integration tasks (after all 25 pages ship)

1. Add new pages to `sitemap.xml` (already in site root — append the 25 new URLs with appropriate priority/changefreq)
2. Add new top-level `/locations/` link to the footer under "Academy" (optional — keeps nav clean)
3. Update the footer of every existing page to link to `/locations/newton-nj/` and `/learn/` (hub entry points)
4. Update homepage hero to include a "Serving Newton, Sparta, Franklin & Vernon NJ" local-signal line under the value props
5. Run `/seo-audit` on the 25 new pages before committing
6. `git add` all new pages, commit with message like "Phase 1 — 25 local SEO pages (Tier-1 Sussex County)", push

---

## Target ship date

**Fill in:** ______________

Recommended: 2 weeks of writing + 1 week of review + publish. Submit sitemap in GSC on ship day and monitor indexation daily for 2 weeks.
