content/
├── contact.json
├── home.json
├── about.json
├── portfolio/
│   ├── [project-name].json
├── testimonials.json
├── blog/
│   ├── [post-name].json
public/
└── media/

# Note: Files on disk → public/media/
Actual image/video files live under public/media/ (e.g. public/media/jolo-mb-3956.jpeg).

Vite copies everything in public/ into the build output unchanged, so after npm run build you get:

dist/media/jolo-mb-3956.jpeg
No import or bundling step — they are static assets at the site root.

