# WealthFlow - Personal Finance Dashboard

A modern, intuitive personal finance management application built with React and TypeScript. WealthFlow helps users track spending, set savings goals, and learn about financial literacy through an engaging, gamified experience.

![WealthFlow](https://img.shields.io/badge/version-1.0.0-ginger)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

## 🌟 Features

### Dashboard
- **Stats Overview**: Quick view of total balance, income, expenses, and savings rate
- **Spending Wheel**: Visual pie chart breakdown of monthly expenses by category
- **Recent Transactions**: List of recent transactions with emotional spending tags
- **Savings Goals**: Track progress towards multiple savings goals with visual progress bars
- **Learning Progress**: Gamified financial education modules with streak tracking

### Spending Tracker
- Detailed expense categorization
- Monthly spending analysis
- Category-wise breakdown

### Goals Management
- Create and track savings goals
- Visual progress indicators
- Days remaining countdown

### Learning Center
- Financial literacy modules
- Progress tracking
- Streak rewards system

### Personality Quiz
- Financial personality assessment
- Personalized recommendations

## 🛠️ Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.0+ | Type Safety |
| Vite | 5.0+ | Build Tool & Dev Server |
| Tailwind CSS | 3.4+ | Utility-First Styling |

### UI Components & Libraries
| Library | Purpose |
|---------|---------|
| Radix UI | Accessible UI Primitives |
| shadcn/ui | Pre-built Component Library |
| Lucide React | Icon Library |
| Recharts | Data Visualization |
| Framer Motion | Animations (via class-variance-authority) |

### Form & Validation
| Library | Purpose |
|---------|---------|
| React Hook Form | Form State Management |
| Zod | Schema Validation |
| @hookform/resolvers | Form Validation Integration |

### Routing & State
| Library | Purpose |
|---------|---------|
| React Router DOM | Client-Side Routing |
| TanStack Query | Server State Management |

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/           # Dashboard-specific components
│   │   ├── GoalProgress.tsx
│   │   ├── LearningProgress.tsx
│   │   ├── RecentTransactions.tsx
│   │   ├── SpendingWheel.tsx
│   │   └── StatsCard.tsx
│   ├── layout/              # Layout components
│   │   └── Navbar.tsx
│   ├── quiz/                # Quiz components
│   │   └── PersonalityQuiz.tsx
│   └── ui/                  # Reusable UI components (shadcn)
│       ├── button.tsx
│       ├── card.tsx
│       ├── progress.tsx
│       └── ... (40+ components)
├── hooks/                   # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                     # Utility functions
│   └── utils.ts
├── pages/                   # Route pages
│   ├── Index.tsx            # Dashboard
│   ├── Goals.tsx
│   ├── Learn.tsx
│   ├── Quiz.tsx
│   ├── Spending.tsx
│   └── NotFound.tsx
├── App.tsx                  # Main app with routing
├── App.css                  # Global styles
├── index.css                # Tailwind & CSS variables
└── main.tsx                 # Entry point
```

## 🎨 Design System

### Color Palette

The app uses a warm, inviting color scheme with semantic tokens:

| Token | Description |
|-------|-------------|
| `--ginger-*` | Primary brand color (warm orange tones) |
| `--coral-*` | Accent color for highlights |
| `--peach-*` | Secondary accent |
| `--cream-*` | Background tones |
| `--success` | Positive indicators (green) |
| `--warning` | Alert indicators (amber) |

### Typography

| Font | Usage |
|------|-------|
| Plus Jakarta Sans | Body text, UI elements |
| Space Grotesk | Display headings, titles |

### Component Variants

Buttons support multiple variants:
- `default` - Primary action
- `gradient` - Premium/highlighted actions
- `glow` - Attention-grabbing CTAs
- `soft` - Secondary actions
- `outline` - Tertiary actions
- `ghost` - Minimal footprint
- `destructive` - Dangerous actions
- `link` - Text-style links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `tsconfig.json` | TypeScript configuration |
| `components.json` | shadcn/ui configuration |
| `eslint.config.js` | ESLint rules |

### Alternative Deployment

The app can be deployed to any static hosting platform:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 🔮 Future Enhancements

- [ ] Backend integration with Lovable Cloud
- [ ] User authentication
- [ ] Real transaction data sync
- [ ] Bank account connections
- [ ] Budget alerts and notifications
- [ ] Export reports (PDF/CSV)
- [ ] Mobile app (PWA)

