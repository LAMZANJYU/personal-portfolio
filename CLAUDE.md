# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website with a Next.js frontend (static export for GitHub Pages) and a Go backend API.

## Commands

### Frontend (Next.js)
```bash
cd frontend
npm install          # Install dependencies
npm run dev         # Start dev server at localhost:3000
npm run build       # Build static site to frontend/out/
npm run lint        # Run ESLint
```

### Backend (Go)
```bash
cd backend
go run main.go      # Start API server (default port 8080)
```

Environment variables (backend):
- `PORT` - Server port (default: 8080)
- `ENV` - Environment (default: development)
- `ALLOW_ORIGINS` - CORS allowed origins (default: "*")

## Architecture

### Frontend (`frontend/`)
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Output**: Static export (`output: 'export'`) for GitHub Pages deployment
- **Key files**:
  - `src/app/page.tsx` - Main homepage with hero, skills, projects, contact form
  - `src/app/about/page.tsx` - About page with experience, education, values
  - `src/components/ui/` - shadcn/ui components (Button, Card, Badge)
  - `src/hooks/useScrollAnimation.ts` - Scroll reveal animations
  - `next.config.ts` - Static export config with basePath for GitHub Pages

### Backend (`backend/`)
- **Framework**: Go with Gin
- **API endpoints** (`/api/v1/`):
  - `GET /health` - Health check
  - `GET /profile` - Profile data
  - `GET /projects` - Projects list
  - `GET /skills` - Skills data
  - `GET /contact` - Contact info
  - `POST /contact` - Submit contact form
  - `GET /contact/submissions` - Get form submissions

### Deployment
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Deploys frontend static files to GitHub Pages on push to main
- Form handling: Uses Formspree for static deployment (edit `YOUR_FORM_ID` in page.tsx)

## Key Configuration

- `frontend/next.config.ts`: basePath must match your GitHub repo name for proper asset loading
- Contact form in `frontend/src/app/page.tsx`: Replace `YOUR_FORM_ID` with your Formspree form ID
- Update personal info (name, skills, projects, contact) in `page.tsx` and `about/page.tsx`
