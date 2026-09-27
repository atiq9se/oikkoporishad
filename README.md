# Oikkoparishad - Jalalabad Association Website

A modern, multilingual website for **Oikkoparishad (Jalalabad Association)** built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Multilingual Support**: English, Bengali (বাংলা), Chinese (中文)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Navigation**: Dropdown menus for About, Membership, Community, Members, Election, Media
- **Content Sections**: News, Notices, Events, Gallery, Opinions, Members Directory
- **Modern Stack**: Next.js App Router, TypeScript, ESLint

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: Custom context-based i18n
- **Linting**: ESLint 9 with flat config

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/oikkoparishad.git
cd oikkoparishad

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About pages (constitution, history, mission, staff)
│   ├── community/         # Executive Committee pages
│   ├── election/          # Election pages
│   ├── gallery/           # Photo gallery
│   ├── members/           # Member directories
│   ├── membership/        # Membership pages
│   ├── news/              # News pages
│   ├── notice/            # Notice pages
│   ├── opinion/           # Opinion pages
│   └── programs/          # Events/Programs pages
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── HeroSlider.tsx     # Homepage slider
│   ├── Marquee.tsx        # Scrolling announcements
│   └── Counter.tsx        # Statistics counter
├── context/               # React context providers
│   └── LanguageContext.tsx # Language switching logic
└── data/                  # Static data & locales
    ├── locales/           # Translation files (en, bn, zh)
    ├── notices.ts         # Notice data
    └── opinions.ts        # Opinion data
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm run start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [oikkoparishad.org](https://oikkoparishad.org)
- **Email**: info@oikkoparishad.org
- **Phone**: +880 1700-000000
- **Address**: 123 Main Street, Dhaka, Bangladesh

---

Developed by [Arts of Tech](https://www.artsoftech.com/)