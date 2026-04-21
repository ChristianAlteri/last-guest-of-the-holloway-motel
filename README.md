# The Last Guest of the Holloway Motel — Official Website

A bold, cinematic single-page website for the documentary film, inspired by the clean aesthetic of ourherobalthazar.com.

## 🎬 About the Film

**The Last Guest of the Holloway Motel** (2025) is a documentary following Tony Powell, a former British soccer star who played for Norwich City Football Club in the 1970s before mysteriously disappearing from public life. Decades later, Powell manages the Holloway Motel in West Hollywood as its sole resident — until the motel faces closure and he must confront his past.

- **Directors:** Ramiel Petros, Nicholas Freeman
- **Runtime:** 94 minutes
- **Release:** June 8, 2025

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/lastguestdoc)

### Option 2: Manual Deploy

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

Or simply drag the `dist/` folder into [Vercel's dashboard](https://vercel.com/dashboard).

### Option 3: GitHub + Vercel Integration

1. Push this repo to GitHub
2. Connect the repo in [Vercel dashboard](https://vercel.com/dashboard)
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve dist
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page with all sections
├── public/
│   ├── hero.png         # Hero background image
│   └── still.png        # Synopsis section image
├── dist/                # Static export output
└── next.config.ts       # Next.js config (static export)
```

## 🎨 Features

- **Bold typographic hero** with cinematic background
- **Synopsis section** with film stills
- **Screening events** with "Get Tickets" CTAs (placeholder links ready for real ticketing)
- **Cast & Crew** bios
- **Newsletter signup** form
- **Fully responsive** design
- **Dark, moody aesthetic** fitting the documentary subject

## 📝 Customization

### Update Ticket Links

In `app/page.tsx`, find the `events` array and replace `ticketUrl: "#tickets"` with actual ticketing URLs:

```typescript
const events: Event[] = [
  {
    id: "1",
    title: "Los Angeles Premiere",
    location: "Laemmle Royal Theatre",
    date: "June 8, 2025",
    time: "7:30 PM",
    ticketUrl: "https://tickets.landmarktheatres.com/...", // <-- Replace
  },
  // ...
];
```

### Update Images

Replace files in `public/` folder:
- `hero.png` — Main hero background (16:9 recommended)
- `still.png` — Synopsis section image (portrait 4:5 recommended)

### Update Copy

All text content is in `app/page.tsx` in the data sections:
- `events` — Screening dates/locations
- `cast` — Featured subject bio
- `filmmakers` — Directors & producers

## 🐉 Credits

Forged by Perlavous the Dragon for your buddy's film. ROAR!

---

Built with [Next.js](https://nextjs.org) + [Tailwind CSS](https://tailwindcss.com)
