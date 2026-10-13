# Kristal Lounge & Bar - Digital Menu

A beautiful, modern digital menu web application for Kristal Lounge & Bar located in Shadërvan, Prizren.

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with smooth animations
- 🗂️ Easy category navigation
- 🌟 Beautiful gold and amber color scheme matching the brand
- ⚡ Fast and optimized with Next.js 16
- 💎 Professional presentation of all menu items

## Menu Categories

- 🥤 Milkshakes
- 🍹 Smoothies
- 🍸 Non-Alcoholic Cocktails
- 🍷 Alcoholic Cocktails
- 🥃 Shots
- 💨 Hookah Menu
- 🍗 Food Menu

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## Customization

To update the menu items, edit `/lib/menu-data.ts`. The menu data structure is simple and easy to modify:

```typescript
{
  id: "category-id",
  title: "Category Title",
  icon: "🎯",
  items: [
    { name: "Item Name", price: "5.00€", description: "Optional" }
  ]
}
```

## Contact

**Kristal Lounge & Bar**
- Location: Shadërvan, Prizren
- Instagram: @kristal_lounge_bar
- Facebook: @kristal_lounge_bar
- TikTok: @kristal_lounge_bar

---

*Shije e paster... Kristal* ✨
