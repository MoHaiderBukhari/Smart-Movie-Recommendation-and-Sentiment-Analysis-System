

# Project Report — PDF Generation Plan

## What Will Be Generated

A comprehensive PDF report documenting the **Smart Movie Recommendation and Sentiment Analysis System (SMRSA)**, saved to `/mnt/documents/SMRSA_Report.pdf`.

## Report Structure

### 1. Title Page
- Project title: "Smart Movie Recommendation and Sentiment Analysis System (SMRSA)"
- Subtitle: "Technical Report"
- Date

### 2. Project Overview
- Description: A web application that suggests films based on genre similarity and analyzes public opinion through sentiment distribution of user reviews
- Purpose: Combine content-based filtering with sentiment analysis to help users discover movies aligned with their tastes

### 3. Technology Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v3 with custom dark cinematic theme (gold accent palette)
- **UI Components**: Radix UI primitives via shadcn/ui
- **State Management**: React Context (Watchlist), TanStack React Query
- **Routing**: React Router DOM v6
- **Charts**: Recharts (sentiment visualization)
- **Icons**: Lucide React
- **Backend**: Lovable Cloud (Supabase) — Edge Functions, Secrets Management
- **External API**: TMDB API for real movie poster images
- **Typography**: Playfair Display (display), Inter (body)

### 4. Dataset
- 832+ movies spanning 1939–2024, covering 20+ genres
- Each movie: id, title, year, genres, rating, overview, poster URL
- Each movie has 3–5 structured reviews with sentiment labels (positive/negative/neutral) and numerical scores

### 5. Core Functionalities

**a. Movie Browsing & Display**
- Hero section with search bar
- Trending films section (sorted by rating, top 8)
- Full movie catalog with genre filter buttons
- Responsive grid layouts (2–6 columns)

**b. Search**
- Real-time title search with dropdown results
- Shows poster thumbnail, rating, year, genres, and sentiment summary per result

**c. Movie Detail Modal**
- Full poster, title, year, genres, rating, overview
- Sentiment analysis bar chart (positive/neutral/negative percentages + compound score)
- Individual review cards with sentiment badges and scores
- Similar movie recommendations

**d. Content-Based Recommendation Engine**
- Algorithm: Jaccard similarity on genre sets
- Formula: `similarity = shared_genres / union_genres`
- Returns top N most similar movies (default 4)

**e. Sentiment Analysis (VADER-inspired)**
- Aggregates review sentiment labels into percentage distribution
- Computes compound score as average of numerical review scores
- Visual bar chart with color coding (green/gold/red)

**f. Watchlist**
- Add/remove movies via bookmark icon
- Persisted in localStorage
- Dedicated "My Watchlist" section on homepage
- React Context for global state

**g. TMDB Poster Integration**
- Edge Function (`tmdb-poster`) securely proxies TMDB API calls
- Batched requests (up to 40 movies per batch) for efficiency
- Client-side localStorage caching to minimize API calls
- Progressive loading with debounced queue (300ms)
- Graceful fallback: genre-based gradient poster with initials when no TMDB poster available

### 6. Architecture Diagram (text)
- Single-page application with one route (`/`)
- Components: HeroSection, MovieCard, MoviePoster, MovieDetail, SentimentChart
- Data flow: local dataset → filtering/search → display; TMDB edge function → poster cache → MoviePoster

### 7. UI/UX Design
- Dark cinematic theme with gold accents
- Fade-in animations with staggered delays
- Backdrop blur navigation bar
- Responsive design (mobile to desktop)
- Hover effects on cards revealing rating overlay

## Technical Approach

- Use Python `reportlab` to generate a multi-page PDF
- Include section headers, body text, bullet lists, and a simple architecture text diagram
- Write script to `/tmp/`, output PDF to `/mnt/documents/SMRSA_Report.pdf`
- QA by converting to images and inspecting

