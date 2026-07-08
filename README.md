# Elliot Castro — Personal Brand Website

Next.js 16 (App Router) + Tailwind CSS. Deployed via Vercel.

## Setup

```bash
npm install
cp .env.example .env.local
# Fill in RESEND_API_KEY and CONTACT_EMAIL in .env.local
npm run dev
```

## Environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | From [resend.com](https://resend.com) — used to send enquiry form emails |
| `CONTACT_EMAIL` | Email address that receives all enquiry forms |

Add these to Vercel project settings under **Environment Variables** before deploying.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, service overview, insights preview |
| `/about` | Story, photo, expertise areas |
| `/keynote` | Topics, formats, testimonials, enquiry form |
| `/consultancy` | Services, engagement model, enquiry form |
| `/media` | Commentary availability, appearances, press kit, enquiry form |
| `/insights` | Writing index |
| `/contact` | Consolidated contact page |

## Updating content

All copy is hardcoded in the page files under `src/app/`. Edit the relevant `page.tsx` for each section.

### Replacing the hero image

In `src/app/page.tsx`, find the commented `<Image>` block and:
1. Add Elliot's photo as `public/hero.jpg` (recommended: 2000×1200px minimum, eyes/face cropped)
2. Uncomment the `<Image>` block and delete the placeholder `<div>`

### Replacing the about photo

Add `public/about-photo.jpg` and update `src/app/about/page.tsx` to use `<Image>` from `next/image`.

### Adding press kit PDFs

Place PDFs in `public/downloads/`:
- `elliot-castro-press-kit.pdf`
- `elliot-castro-bio.pdf`

### Adding OG image

Add `public/og-image.jpg` (1200×630px).

## Connecting a domain

1. In Vercel project settings → Domains, add your domain
2. Update DNS records as instructed
3. Update `metadataBase` in `src/app/layout.tsx` to the live URL

## Form handling

Forms use [Resend](https://resend.com). You need to:
1. Create a Resend account and verify your sending domain
2. Add `RESEND_API_KEY` to Vercel environment variables
3. Update the `from` address in `src/app/api/contact/route.ts` to match your verified domain
