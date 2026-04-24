# 10th Planet Jiu-Jitsu Newton — 6-Month Local SEO Expansion Roadmap

**Business:** 10th Planet Jiu-Jitsu Newton
**Address:** 17 US-206 Unit 1, Augusta, NJ 07822
**Primary market:** Newton / Augusta / Sussex County, NJ
**Secondary markets:** Morris, Warren, and Pike/Orange border counties

**Baseline site (already built):** 12 pages — Home, About, Programs, 10P Jiu-Jitsu, MMA, Muay Thai, Kids, Schedule, Gallery, FAQ, Contact, Booking.

**Total roadmap target:** **161 new pages over 6 months** across 6 phases. Easier wins first; harder/higher-competition work later as domain authority builds.

---

## Why this plan wins

This academy has two SEO edges most competitors don't have:
1. **Official 10th Planet affiliate status.** Ranking for "10th Planet \_\_\_" queries is low-competition because there are only ~80 licensed 10P academies worldwide.
2. **Rural / semi-rural market.** Sussex County NJ is underserved for BJJ — the nearest "big-city BJJ" is 45+ minutes toward Morristown or Dover. Small-town SEO is winnable with consistent neighborhood coverage.

The plan leans **heavy on Locations + Personas + Glossary** (low-competition local + top-of-funnel), with Curation and Comparisons showing up in Phase 3 once the domain has indexed some pages.

---

## Keyword matrix (summary)

| Playbook | Count | Weight | Example |
|---|---|---|---|
| **Locations × Services** | 90 | Heavy | "10th Planet Jiu-Jitsu in Sparta NJ" |
| **Service × Persona** | 30 | Heavy | "Jiu-Jitsu for Adults Over 40 in Sussex County" |
| **Glossary / "What is"** | 15 | Heavy | "What Is 10th Planet Jiu-Jitsu?" |
| **Comparisons** | 8 | Medium | "10th Planet Jiu-Jitsu vs Traditional BJJ" |
| **Curation / Best-of** | 6 | Medium | "Best BJJ Gym in Newton NJ" |
| **Examples / Tutorials** | 12 | Light | "Rubber Guard Explained for Beginners" |
| **TOTAL** | **161** | | |

Full keyword inventory is in `keywords.json`.

---

## URL structure plan

```
/                                          (home)
/about /programs /schedule /gallery /faq /contact /booking   (core — already built)
/jiu-jitsu /mma /muay-thai /kids                             (program detail — already built)

# Phase 1–5: new pages
/locations/{neighborhood}/                                   (neighborhood hub)
/locations/{neighborhood}/{service}/                         (neighborhood × service)
/jiu-jitsu-for-{persona}/                                    (persona pages)
/best-{thing}-{city}/                                        (curation)
/learn/{term}/                                               (glossary)
/compare/{a}-vs-{b}/                                         (comparisons)

# Phase 6:
# Refresh + optimize Phase 1 pages based on real Search Console data
```

All new URLs get canonical tags pointing to themselves, are added to `sitemap.xml`, and link back to the relevant core page (programs, schedule, or contact).

---

## Phase-by-phase table

| Phase | Month | Pages | Focus | Shipping Target |
|---|---|---|---|---|
| **1** | Month 1 | 25 | Core neighborhood foundation — Tier-1 Sussex towns × JJ + Kids | Build 16 location × service pages (Tier-1 × 2 services) + 5 glossary top-of-funnel + 4 Tier-1 neighborhood hubs |
| **2** | Month 2 | 25 | Persona expansion + Tier-1 MMA/Muay Thai | 15 service×persona pages + 10 Tier-1 location × MMA/Muay Thai pages |
| **3** | Month 3 | 25 | Authority + comparisons | 6 curation "best of" pages + 5 vs comparisons + 10 Tier-2 Sussex extended locations + 4 Tier-2 × JJ |
| **4** | Month 4 | 30 | Long-tail glossary + tutorials | 10 more glossary pages + 12 example/tutorial pages + 8 Tier-2 × other services |
| **5** | Month 5 | 30 | Edge geographies + offers | 15 Tier-3 border-town locations + 10 service-specific offer/pricing pages + 5 persona-deep extensions |
| **6** | Month 6 | 26 | Fill + optimize | 10 remaining matrix gaps + 16 refresh/rewrite passes on Phase 1 pages based on Search Console data |
| **Total** | | **161** | | |

---

## Internal linking architecture

**Hub & spoke** — every neighborhood hub page links out to the 3–4 service-in-that-neighborhood pages. Every service page links back up to the two core program pages (e.g., `/locations/sparta-nj/jiu-jitsu/` → `/jiu-jitsu.html`).

```
/programs (hub)
  ├── /jiu-jitsu (spoke)
  │     ├── /jiu-jitsu-for-beginners (persona spoke)
  │     ├── /jiu-jitsu-for-over-40 (persona spoke)
  │     └── /locations/sparta-nj/jiu-jitsu/ (neighborhood spoke)
  ├── /mma
  └── ...

/locations/sparta-nj/ (neighborhood hub)
  ├── /locations/sparta-nj/jiu-jitsu/
  ├── /locations/sparta-nj/kids/
  └── /locations/sparta-nj/muay-thai/
```

Every new page adds 3–5 internal links to existing pages (minimum 1 up, 2 across, 1 down).

---

## Content uniqueness rules (non-negotiable)

Each page must have **real, different content** — not a variable swap. The thin-swap penalty is real. For each page, customize:

1. **Local landmark or reference** — nearest highway exit, neighboring business, park, high school
2. **Specific drive time** from the neighborhood to 17 US-206 Augusta NJ
3. **Parking / transit notes** (free on-site parking; nearest major route)
4. **Neighborhood-specific intro** (2-3 sentences that show local knowledge)
5. **Local testimonial placement** — reuse real Google Reviews, but vary WHICH one leads
6. **Unique H2 structure** — rotate the H2 order/phrasing per template to avoid doorway-page patterns

Minimum 600 words of unique body copy per page. 900-1200 words ideal.

---

## Schema strategy per page type

| Page type | JSON-LD blocks |
|---|---|
| Neighborhood × Service | `LocalBusiness` (served area = this neighborhood) + `Service` + `BreadcrumbList` |
| Persona page | `Service` + `FAQPage` (3-5 persona-specific FAQs) + `BreadcrumbList` |
| Curation "best of" | `ItemList` (with positions) + `BreadcrumbList` |
| Glossary | `Article` + `DefinedTerm` + `BreadcrumbList` |
| Comparison | `Article` + `BreadcrumbList` + optional `ItemList` |
| Tutorial | `HowTo` with numbered steps + `BreadcrumbList` |

All pages additionally inherit the site-wide `Organization` + `WebSite` from the home.

---

## Success metrics per phase

| Phase | Target by end of month |
|---|---|
| 1 | 20+ new pages indexed in GSC (check site:yoursite.com); first impressions in GSC for "10th planet jiu jitsu newton", "bjj sparta nj", "kids martial arts sussex county" |
| 2 | 1+ page ranking top-50 for a Tier-1 neighborhood × service query; first click-through from a persona page |
| 3 | 3+ pages ranking top-20; first "best bjj \_\_\_" impression; GBP calls up 10% month-over-month |
| 4 | Top-10 ranking on 1+ glossary keyword ("what is rubber guard"); new-student intake form mentions at least one new page as source |
| 5 | Top-3 ranking on 1+ neighborhood × service ("jiu-jitsu sparta nj"); 25+ form submits attributable to organic landing pages |
| 6 | Organic traffic 3x baseline; 1+ page on page 1 for "10th planet jiu jitsu new jersey"; 40+ new leads sourced organic |

Track everything in Google Search Console + GA4 + the academy's GHL CRM attribution.

---

## Agency attribution requirement

**Every single page built in every phase** must include the standard footer attribution:

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

This matches the 12 already-deployed pages. Any phase that ships pages without this line will fail SEO audit.

---

## Assumptions that need client validation BEFORE Phase 1 ships

| Assumption | Why it matters |
|---|---|
| Tier-1 neighborhoods are the right priority order (Newton, Sparta, Franklin, Sussex borough, Hamburg, Branchville, Vernon, Hopatcong) | If actual student intake comes mostly from Andover or Hackettstown, we're targeting the wrong neighborhoods in Phase 1. |
| Kids and Jiu-Jitsu are the two strongest conversion funnels | If MMA or Muay Thai actually drives more signups, those should come earlier. |
| There's no direct 10P or no-gi-specialty competitor in Sussex County | If there is, comparison pages move earlier. |
| The client is OK with the site scaling to ~170 pages over 6 months | Some owners prefer fewer, deeper pages. Confirm appetite. |
| GHL calendar embeds will be live by end of Phase 1 | Ranking pages without a working booking funnel wastes traffic. |

**Flag each of these in a quick call before committing to Phase 1 shipping.**

---

## What to do next

When ready to ship Phase 1, open `phase-1-prompt.md` in a fresh Claude Code session inside this repo and paste its contents. It contains the full build manifest + paste-to-execute instructions for Phase 1's 25 pages.

Each subsequent phase has its own `phase-N-prompt.md` that can be run in isolation — you don't have to ship all 6 phases back-to-back. The recommended cadence is one phase per month with 2 weeks of writing + 2 weeks of monitoring/iteration.
