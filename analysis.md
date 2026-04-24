# 10th Planet Jiu-Jitsu Newton — Site Analysis

**Current URL:** https://martialwaymma.com
**Legacy brand name:** Martial Way MMA
**Primary (preferred) brand name:** 10th Planet Jiu-Jitsu Newton
**Location:** 17 US-206, Unit 1, Augusta, NJ 07822 (marketed as Newton / Sussex County)
**Business type:** 10th Planet affiliate academy + full-service martial arts / MMA gym

## What the business actually is
10th Planet Newton (operating under the legacy umbrella "Martial Way MMA") is an official 10th Planet Jiu-Jitsu affiliate in Sussex County, NJ. They run four programs under one roof:
- 10th Planet Jiu-Jitsu (the Eddie Bravo no-gi grappling system)
- Mixed Martial Arts
- Muay Thai / Kickboxing
- Kids 10P Jiu-Jitsu & Kickboxing

They hold a Sunday Competition Class, a women's-only jiu-jitsu class, and open mats — signals of a real, active competitive gym rather than a generic "fitness" martial-arts studio.

## Brand vibe
10th Planet globally is moody, creative, and unmistakably combat-sports — black + oxblood red, galaxy/planetary visual language, unorthodox terminology (Rubber Guard, Twister, Lockdown). This academy inherits that identity but the current website does not express any of it.

The existing site is a 2010-era WordPress "LinkNow Media" martial-arts template:
- Homepage opens with generic gray placeholder boxes where photos should live
- "See What Our Clients Are Saying" sits under a fake Google badge graphic
- Footer has duplicated contact columns (Martial Way MMA and 10th Planet Jiujitsu Newton side-by-side)
- No clear CTA — two phone numbers, two emails, no trial offer, no booking button
- AudioEye accessibility overlay is persistent and cluttered
- No real brand expression, no hero photo, no above-the-fold schedule, no student proof
- Legacy "Martial Way MMA" branding competes with the 10th Planet identity the academy actually uses on Instagram (@10pnewton)

## Biggest design problems to fix
1. No visual identity — gray placeholder boxes where a cinematic hero belongs
2. Brand confusion — legacy Martial Way vs. current 10th Planet Newton
3. No CTA path — zero clear "book a free class" flow
4. Schedule buried — a competition gym should show the schedule above the fold
5. Cramped cluttered footer with duplicate info columns
6. Testimonials feel fake/auto-generated (Google badge graphic) rather than showing real reviews
7. Mobile layout is an afterthought, not the priority
8. No Instagram proof (@10pnewton has 1.8K followers, 415 posts — real social proof being wasted)

## Page inventory (11 pages to rebuild)
| # | URL | Type | Purpose |
|---|-----|------|---------|
| 1 | / | home | Hero, programs overview, social proof, CTA |
| 2 | /about | about | Philosophy, instructor ethos, "your path to a better life" |
| 3 | /programs | services | Overview of all 4 programs |
| 4 | /jiu-jitsu | program-detail | 10th Planet JJ (history, Eddie Bravo, benefits) |
| 5 | /mma | program-detail | MMA — strike + grapple combined |
| 6 | /muay-thai | program-detail | Muay Thai / Kickboxing (art of 8 limbs) |
| 7 | /kids | program-detail | Kids 10P JJ & Kickboxing |
| 8 | /schedule | schedule | Full weekly schedule (already scraped, 16+ class slots) |
| 9 | /gallery | gallery | Academy photos / IG feed |
| 10 | /faq | faq | 6 FAQs already written |
| 11 | /contact | contact | Address, phones, hours, contact form |

Plus `booking.html` (the required lead-capture step 2 page per the kit spec) = **12 HTML files total.**

## Design recommendation — cinematic-fight-skill
This is the right choice because:
- **Brand match:** 10th Planet is already a moody, combat-sports, red/black identity. Performance-athletic-skill would soften it too much.
- **Real competitive credentials:** They run a Sunday Competition Class and teach an advanced (invite-only) class — this isn't a "fitness martial arts" studio where cinematic would feel overwrought.
- **Photo potential:** Even if we start with stock, the cinematic-fight treatment (obsidian + oxblood, oversized portraits, film-grain overlays) will make any future real photos from the gym feel premium immediately.
- **Differentiates from generic gym sites:** Most martial arts school sites in Sussex County NJ will use the stock "red/black template" — cinematic-fight makes this one unmistakable.

**Backup style if client ever provides weak photography:** `performance-athletic-skill` is the safer fallback — still on-brand, still bold, less photo-dependent.

## Brand color direction
- Primary: #AD0707 (deep oxblood, from current H1 color) — keep
- Accent: #FF0000 (pure red, for fight-card energy) — keep, use sparingly
- Substrate: near-black (#0A0A0A) rather than pure black — warmer, less harsh
- Add: bone/cream off-white (#F2EAE0 or #EEE8DC) for body copy legibility on dark — gives the prestige-TV feel
- Brand-analysis step will finalize this palette.

## What to do in the redesign
- Lead with the 10th Planet Newton identity, not the legacy Martial Way name
- Hero: full-bleed cinematic fight/rolling photo with huge condensed display type
- Above the fold: "Book A Free Class" CTA → opens the kit's standard lead modal → booking.html
- Programs grid with short punchy copy pulled from the real scraped content
- Schedule page: clean grid view showing the real 16-class weekly schedule
- Real testimonials surfaced (Anthony Guzman, C Storms, Jill Gendelman — already scraped from Google reviews)
- Instagram proof: link to @10pnewton with the real follower count
- Kids program: separate warmer section/page (per cinematic-fight guidance kids sections should feel less moody)
- Footer: single clean contact column, not duplicated
