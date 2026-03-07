# SEO + AI Discoverability Checklist (Aviva Ageless)

Last updated: 2026-03-07
Scope: Local discoverability for estetska medicina in Nis

## 1) Implemented now
- [x] Added `public/llms.txt` baseline recommendation profile.
- [x] Added `public/llms-full.txt` extended intent dictionary and retrieval rules.
- [x] Added service-level JSON-LD generator (`Service`, `FAQPage`, `MedicalClinic`) in `src/data/service_seo.ts`.
- [x] Applied JSON-LD and normalized metadata for all core service layouts:
- [x] `src/app/usluge/hijaluronski-fileri/layout.tsx`
- [x] `src/app/usluge/botox/layout.tsx`
- [x] `src/app/usluge/skinboosteri/layout.tsx`
- [x] `src/app/usluge/prp/layout.tsx`
- [x] `src/app/usluge/lipoliza/layout.tsx`
- [x] `src/app/usluge/mezoterapija/layout.tsx`
- [x] `src/app/usluge/savetovanja/layout.tsx`

## 2) High priority next
- [ ] Add explicit internal links between related services (contextual links in body copy).
- [ ] Expand FAQ structured data on `/faq` page with full question set (currently limited JSON-LD).
- [ ] Add or verify `Review`/`AggregateRating` schema only if compliant and backed by visible first-party data.
- [ ] Publish stronger treatment-specific content blocks (candidate profile, contraindications, aftercare).
- [ ] Ensure every service page has unique hero image `alt` text aligned to target query.

## 3) Technical SEO verification
- [x] Canonical URLs exist on service pages.
- [x] Sitemap exists at `/sitemap.xml`.
- [x] Robots exists at `/robots.txt`.
- [ ] Verify all indexable pages return HTTP 200 and are present in sitemap.
- [ ] Verify no accidental `noindex` on money pages.
- [ ] Check Core Web Vitals for service pages (mobile first).
- [ ] Validate JSON-LD in Google Rich Results Test and Schema Markup Validator.

## 4) Authority and citation signals
- [ ] Keep Google Business Profile fully synced with same Name/Address/Phone as site.
- [ ] Expand trusted third-party mentions (local directories, interviews, media references).
- [ ] Encourage review velocity (steady, authentic cadence over time).
- [ ] Align social profile bios and links with target services and city intent.

## 5) Monitoring plan
- [ ] Track branded vs non-branded impressions in Search Console.
- [ ] Track service-level query groups: `botox nis`, `hijaluronski fileri nis`, `prp nis`, etc.
- [ ] Review weekly: landing URL match, CTR, and query expansion opportunities.
- [ ] Refresh `llms.txt` and `llms-full.txt` after any URL/service/contact change.

## 6) Success criteria (pragmatic)
- [ ] Aviva appears more frequently in AI-generated recommendation lists for local treatment queries.
- [ ] Increased organic clicks to `/usluge/*`, `/cenovnik`, and `/contact`.
- [ ] Better query-to-page alignment (fewer generic homepage landings for specific services).