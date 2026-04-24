# Phase 6 — Fill, Refresh, and Optimize

**Ship target:** 26 pages (10 new + 16 refreshes). Focus: close matrix gaps and re-write Phase 1 pages using real Search Console data so the highest-traffic pages convert better.

**Prereq:** Phases 1-5 shipped. Have 3+ months of Search Console data for Phase 1 URLs.

---

## Part A: Matrix Gaps (10 new pages)

Before writing new pages, run a gap analysis: compare the services × personas × locations from `keywords.json` against what's actually built. Identify 10 combinations that:
1. Have realistic search volume (check with GSC "discovered - currently not indexed" queries, or AnswerThePublic)
2. Don't duplicate an existing page's intent
3. Close a hole in the persona or geography coverage

Likely candidates:
- `/jiu-jitsu-for-cops/` (law enforcement detail, complements Phase 5's LE page)
- `/mma-for-fitness/` (distinct from MMA-for-weight-loss)
- `/kids-jiu-jitsu-homeschool/` (homeschool parent intent)
- `/10th-planet-seminars-new-jersey/` (if the academy hosts 10P HQ seminars)
- `/locations/sparta-nj/womens-jiu-jitsu/` (women's-specific variant on a top market)
- Plus 5 more from the gap-analysis output

---

## Part B: Refresh Phase 1 Pages (16 pages)

Open Google Search Console. Filter by "Pages" to find the 16 Phase 1 URLs with the most impressions but lowest CTR. For each, run this refresh workflow:

### Per-page refresh checklist

1. **Pull GSC queries for this URL** — what terms are people searching when they see this page?
2. **Check the position data** — is the page ranking for queries you targeted, or unexpected ones?
3. **Rewrite the title tag** to match the top 2-3 actual queries. Stay under 60 chars.
4. **Rewrite the meta description** to use words from the query data (not just the keywords you originally targeted).
5. **Expand the body copy** by 200-400 words. Add a section that directly answers a specific query from GSC. If people are searching "jiu jitsu for kids cost newton nj" add a "What does it cost?" section.
6. **Add internal links** from the refreshed page to 2-3 Phase 3-5 pages that are relevant (curation, comparison, or tutorial pages).
7. **Add or improve schema** — if the page doesn't have `FAQPage` schema for a FAQ section, add one.
8. **Re-check mobile rendering** — 3 months later, some CSS changes may have subtly affected layout. Verify the page still passes the Mobile Quality Bar.

### Prioritization for the 16 refreshes

Pick the Phase 1 URLs with:
- **High impressions (>100/month)** but **CTR under 2%** → meta description / title rewrite wins big
- **Low impressions (<20/month)** but ranked in positions 20-40 → content expansion to push into top 10
- **Decent rank (5-15) but low CTR** → eyebrow-grabbing title rewrites

DON'T refresh pages that are already ranking in top 3 with high CTR — they're doing their job.

---

## Agency attribution

Every new or refreshed page: verify `"Powered by MMA Marketing Pro"` footer link is still present with correct attributes. Run `/seo-audit` on refreshed pages to double-check.

## Target ship date

**Fill in:** ______________
