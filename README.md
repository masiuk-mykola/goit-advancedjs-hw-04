# Image Search App

A vanilla JavaScript image search application built with Vite. Search for photos using the Pixabay API with lightbox preview support.

## Features

- Search images by keyword via the Pixabay API
- Gallery with lightbox (SimpleLightbox) for full-size preview
- Per-image stats: likes, views, comments, downloads
- Loading state indicator
- Error notifications via iziToast

## Tech Stack

- Vite
- Axios
- SimpleLightbox
- iziToast
- PostCSS

## Getting Started

1. Install [Node.js LTS](https://nodejs.org/en/) if not already installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your Pixabay credentials:
   ```
   VITE_API_URL=https://pixabay.com/api/
   VITE_API_KEY=your_api_key_here
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── main.js               # App entry point, form submit handler
├── js/
│   ├── pixabay-api.js    # Pixabay API request (axios)
│   └── render-functions.js # Gallery rendering, loader, lightbox
├── css/
│   └── styles.css
└── index.html
```

## Environment Variables

| Variable       | Description                  |
| -------------- | ---------------------------- |
| `VITE_API_URL` | Pixabay API base URL         |
| `VITE_API_KEY` | Your Pixabay API key         |

## Deploy

The production build deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

```bash
npm run build
```

Live demo: [https://mykolamasiuk.github.io/goit-advancedjs-hw-03/](https://mykolamasiuk.github.io/goit-advancedjs-hw-03/)
