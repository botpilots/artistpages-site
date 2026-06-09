# ArtistPages

Marketing site for ArtistPages — custom artist websites with a free Git-backed CMS.

Built with Vite, React, TypeScript, Tailwind CSS, and [Pages CMS](https://pagescms.org).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static assets in `public/` (including `public/media/`) are copied to `dist/` as-is. Content lives in `content/` as JSON and is imported at build time.

## Deployment

GitHub Pages deployment runs via `.github/workflows/pages-cms-action.yml`. Set `VITE_BASE_PATH` in repository variables if serving from a project URL (e.g. `/artistpages-site/`); defaults to `/` for custom domains.
