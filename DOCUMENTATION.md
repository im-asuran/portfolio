# Santhosh G R — Portfolio

A modern, responsive single-page portfolio website built with **React** and **Vite**, showcasing professional experience, projects, skills, and education.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Architecture Overview](#architecture-overview)
5. [Folder Breakdown](#folder-breakdown)
6. [Component Reference](#component-reference)
7. [Utilities Reference](#utilities-reference)
8. [Styling Architecture](#styling-architecture)
9. [Data Layer](#data-layer)
10. [Customization Guide](#customization-guide)
11. [Build & Deployment](#build--deployment)
12. [Scripts Reference](#scripts-reference)

---

## Tech Stack

| Layer       | Technology                   |
| ----------- | ---------------------------- |
| Framework   | React 19                     |
| Bundler     | Vite 8                       |
| Language    | JavaScript (ES Modules)      |
| Styling     | Vanilla CSS with CSS Variables (design tokens) |
| Font        | Inter (Google Fonts)         |
| Deployment  | Static — works on any host   |

---

## Project Structure

```
portfolio/
├── index.html                  # HTML entry point
├── package.json
├── vite.config.js
├── public/                     # Static assets served as-is
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Root component — assembles all sections
    ├── App.css                 # App-level layout styles
    ├── index.css               # Global reset, imports shared CSS modules
    │
    ├── styles/                 # ◆ Shared CSS modules (design tokens & reusables)
    │   ├── variables.css       #   CSS custom properties (colors, spacing, etc.)
    │   ├── section.css         #   .section / .section-container / .section-title
    │   ├── buttons.css         #   .btn / .btn-primary / .btn-outline
    │   ├── card.css            #   .card / .card--lift / .card--lift-lg
    │   └── tags.css            #   .tag / .tag--primary / .tag--accent / .tag--outline / .tag--mono
    │
    ├── utils/                  # ◆ Utility modules (JS helpers & icons)
    │   ├── index.js            #   Barrel export
    │   ├── icons.jsx           #   SVG icon components (FolderIcon, MailIcon, etc.)
    │   ├── navLinks.js         #   Navigation link definitions
    │   └── skillHelpers.js     #   levelToPercent() helper
    │
    ├── components/             # ◆ Section components
    │   ├── Navbar.jsx / .css
    │   ├── Hero.jsx / .css
    │   ├── About.jsx / .css
    │   ├── Experience.jsx / .css
    │   ├── Projects.jsx / .css
    │   ├── Skills.jsx / .css
    │   ├── Education.jsx / .css
    │   ├── Contact.jsx / .css
    │   ├── Footer.jsx / .css
    │   └── common/             # ◆ Reusable sub-components
    │       ├── index.js        #   Barrel export
    │       ├── SectionWrapper.jsx  # Layout wrapper (section + container + title)
    │       ├── SkillBar.jsx    #   Progress bar for skill proficiency
    │       └── SkillBar.css
    │
    └── data/
        └── portfolioData.js    # ◆ All resume data in one file
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start dev server (hot-reload at http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

## Architecture Overview

```
┌─────────────┐
│  index.html │   Mounts #root
└──────┬──────┘
       │
┌──────▼──────┐
│   main.jsx  │   React.createRoot → <App />
└──────┬──────┘
       │
┌──────▼──────┐   Imports portfolioData + all section components
│   App.jsx   │   Passes data slices as props to each section
└──────┬──────┘
       │
       ├── Navbar          (fixed top nav — uses NAV_LINKS util)
       ├── Hero            (fullscreen intro — uses buttons.css)
       ├── About           (bio + highlight stats — uses SectionWrapper)
       ├── Experience      (timeline — uses SectionWrapper, card.css, tags.css)
       ├── Projects        (card grid — uses SectionWrapper, FolderIcon, card.css)
       ├── Skills          (progress bars + lists — uses SectionWrapper, SkillBar)
       ├── Education       (card grid — uses SectionWrapper, GraduationCapIcon, card.css)
       ├── Contact         (links — uses SectionWrapper, MailIcon, PhoneIcon, LinkedInIcon)
       └── Footer          (copyright)
```

**Data flow:** `portfolioData.js` → `App.jsx` (single import) → props down to each component. No state management needed — all content is static.

---

## Folder Breakdown

### `src/styles/` — Shared CSS Modules

These files define reusable CSS classes consumed across multiple components, eliminating duplication.

| File            | Classes Exported                                      | Consumed By                           |
| --------------- | ----------------------------------------------------- | ------------------------------------- |
| `variables.css` | `:root` custom properties (colors, spacing, fonts)    | Every CSS file via `var(--*)`         |
| `section.css`   | `.section`, `.section-container`, `.section-title`    | SectionWrapper, index.css             |
| `buttons.css`   | `.btn`, `.btn-primary`, `.btn-outline`                | Hero, Contact                         |
| `card.css`      | `.card`, `.card--lift`, `.card--lift-lg`               | Experience, Projects, Education       |
| `tags.css`      | `.tag`, `.tag--primary`, `.tag--accent`, `.tag--outline`, `.tag--mono` | Experience, Projects, Skills |

All shared CSS is imported once in `index.css`, making classes globally available.

### `src/utils/` — JavaScript Utilities

| Module             | Exports                                               | Purpose                               |
| ------------------ | ----------------------------------------------------- | ------------------------------------- |
| `icons.jsx`        | `FolderIcon`, `GraduationCapIcon`, `MailIcon`, `PhoneIcon`, `LinkedInIcon` | Reusable SVG icon components |
| `navLinks.js`      | `NAV_LINKS` (array)                                   | Central nav link definitions          |
| `skillHelpers.js`  | `levelToPercent(level)`                               | Maps skill level → CSS width string   |
| `index.js`         | Barrel re-export of all above                         | Clean imports via `from "../utils"`   |

### `src/components/common/` — Reusable Sub-Components

| Component        | Props                                        | Purpose                               |
| ---------------- | -------------------------------------------- | ------------------------------------- |
| `SectionWrapper` | `id`, `className`, `title`, `children`       | Wraps sections with consistent layout |
| `SkillBar`       | `name`, `level`                              | Renders a labeled progress bar        |

---

## Component Reference

### `Navbar`
- **File:** `components/Navbar.jsx`
- **Props:** None
- **Behavior:** Fixed top navigation bar. Links defined in `utils/navLinks.js`. Clicking a link smooth-scrolls to the matching section `id`.

### `Hero`
- **File:** `components/Hero.jsx`
- **Props:** `data` (personal info object)
- **Behavior:** Full-viewport intro section with animated floating circles background. Displays a circular profile picture (`src/assets/profile.jpg`), name, title, tagline, and two CTA buttons.

### `About`
- **File:** `components/About.jsx`
- **Props:** `data` (personal info object)
- **Behavior:** Summary paragraph + 4-column highlight grid (years, companies, projects, certifications).

### `Experience`
- **File:** `components/Experience.jsx`
- **Props:** `data` (experience array)
- **Behavior:** Vertical timeline. Each entry is a card showing role, company, period, bullet points, and tech stack tags.

### `Projects`
- **File:** `components/Projects.jsx`
- **Props:** `data` (projects array)
- **Behavior:** Auto-fit card grid. Each card shows folder icon, title, description, period, optional tag (e.g. "IoT Project"), and tech stack.

### `Skills`
- **File:** `components/Skills.jsx`
- **Props:** `data` (skills object), `certifications` (string array), `extracurricular` (string array)
- **Behavior:** Two-column layout. Left: language/framework progress bars (via `SkillBar`) + coursework tags. Right: certification & extracurricular lists.

### `Education`
- **File:** `components/Education.jsx`
- **Props:** `data` (education array)
- **Behavior:** Auto-fit card grid. Each card shows graduation cap icon, degree, institution, location, period, and score.

### `Contact`
- **File:** `components/Contact.jsx`
- **Props:** `data` (personal info object)
- **Behavior:** Centered layout with email, phone, and LinkedIn links using icon components. "Say Hello" CTA button.

### `Footer`
- **File:** `components/Footer.jsx`
- **Props:** `name` (string)
- **Behavior:** Simple copyright footer with name and current year.

---

## Utilities Reference

### `levelToPercent(level)`
```js
import { levelToPercent } from "./utils";

levelToPercent("Advanced");     // "90%"
levelToPercent("Intermediate"); // "65%"
levelToPercent("Beginner");     // "35%"
levelToPercent("Unknown");      // "50%" (fallback)
```

### `NAV_LINKS`
```js
import { NAV_LINKS } from "./utils";
// [{ label: "About", href: "#about" }, ...]
```

### Icon Components
```jsx
import { FolderIcon, GraduationCapIcon, MailIcon, PhoneIcon, LinkedInIcon } from "./utils";

<FolderIcon className="my-icon" />
```
Each icon accepts an optional `className` prop for styling.

---

## Styling Architecture

### Design Tokens (`styles/variables.css`)

All colors, fonts, spacing, transitions, and gradients are defined as CSS custom properties on `:root`. This enables:

- **Theme consistency** — change a color once, it updates everywhere
- **Easy theming** — override variables for dark/light modes or custom themes
- **Readable CSS** — `var(--color-primary-light)` is self-documenting

Key variable groups:
- `--color-primary-*`: Indigo primary palette (#6366f1 → #c7d2fe)
- `--color-bg-*`: Background colors (base, card, subtle, muted)
- `--color-border-*`: Border colors at different intensity levels
- `--color-text-*`: Text colors (heading, body, muted, subtle)
- `--font-sans` / `--font-mono`: Font stacks
- `--gradient-*`: Reusable gradient definitions
- `--transition-*`, `--shadow-*`: Animation & shadow presets

### Shared CSS Modules

Reusable classes (`card.css`, `buttons.css`, `tags.css`, `section.css`) are imported globally via `index.css` and composed in JSX:

```jsx
{/* Composing shared card + lift modifier */}
<div className="project-card card card--lift-lg">

{/* Composing shared tag variants */}
<span className="tag tag--primary">{tech}</span>

{/* Shared button styles */}
<a className="btn btn-primary">Get In Touch</a>
```

### Component-Scoped CSS

Each component has its own `.css` file for component-specific layout rules. These files use `var(--*)` references instead of hard-coded values.

---

## Data Layer

All portfolio content lives in `src/data/portfolioData.js`. This single-source-of-truth pattern means updating your portfolio only requires editing this one file.

### Data Shape

```js
{
  personal: {
    name: string,
    title: string,
    email: string,
    phone: string,
    linkedin: string,    // full URL
    tagline: string,
  },

  experience: [{
    company: string,
    role: string,
    period: string,      // e.g. "Aug 2024 – Present"
    location: string,
    points: string[],    // bullet points
    techStack: string[], // tags
  }],

  education: [{
    institution: string,
    degree: string,
    location: string,
    period: string,
    score: string,       // e.g. "CGPA: 8.24" or "91%"
  }],

  skills: {
    languages: [{ name: string, level: "Advanced"|"Intermediate"|"Beginner" }],
    frameworks: [{ name: string, level: string }],
    coursework: string[],
  },

  projects: [{
    title: string,
    period: string,
    tag?: string,        // optional badge (e.g. "IoT Project")
    description: string,
    techStack: string[],
  }],

  certifications: string[],
  extracurricular: string[],
}
```

---

## Customization Guide

### Update Profile Picture
Replace `src/assets/profile.jpg` with your own image (any aspect ratio works — it's cropped to a circle).

### Update Content
Edit `src/data/portfolioData.js` — all sections pull from this file.

### Change Colors
Edit `src/styles/variables.css`. Update the `--color-primary-*` group to change the accent color across the entire site.

### Add a New Section
1. Create `src/components/NewSection.jsx` and `NewSection.css`
2. Use `SectionWrapper` for consistent layout:
   ```jsx
   import { SectionWrapper } from "./common";
   function NewSection({ data }) {
     return (
       <SectionWrapper id="new-section" title="My Section">
         {/* content */}
       </SectionWrapper>
     );
   }
   ```
3. Import and add it in `App.jsx`
4. Add a nav link entry in `src/utils/navLinks.js`

### Add New Icons
Add a new export to `src/utils/icons.jsx` following the existing pattern, then re-export it in `src/utils/index.js`.

---

## Build & Deployment

```bash
# Create optimized production build
npm run build
```

Output is in `dist/`. Deploy to any static hosting:

- **Netlify:** Drag-and-drop `dist/` folder, or connect your git repo
- **Vercel:** `npx vercel` from project root
- **GitHub Pages:** Push `dist/` contents to `gh-pages` branch
- **Any static server:** Serve the `dist/` directory

---

## Scripts Reference

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start Vite dev server with hot reload    |
| `npm run build`    | Create production build in `dist/`       |
| `npm run preview`  | Preview production build locally         |
| `npm run lint`     | Run ESLint checks                        |

---

## License

Personal portfolio project. Feel free to use as a template.
