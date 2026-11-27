# Rifat Personal Identity Website — Updated Portfolio

A responsive, animated personal portfolio for Molla Mohammad Rifat Osama.

## Project structure

```text
rifat_identity_updated/
├── index.html
├── vercel.json
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   ├── developer-portrait-1.webp
│   ├── developer-portrait-2.webp
│   └── favicon.svg
├── css/
│   └── style.css
└── js/
    ├── main.js
    └── links.js
```

## Update social links

Open `js/links.js` and replace each `"#"` with the matching public URL.
Pre-filled links: one Facebook, two Telegram links, and one GitHub.
Slots included: 4 Facebook, 10 Telegram, 5 GitHub, 1 YouTube and 2 TikTok.

Do not publish passwords, private access tokens, or personal contact details you do not want public.

## Deploy to Vercel using GitHub

1. Extract this ZIP on your device.
2. Create a public GitHub repository, e.g. `rifat-personal-identity`.
3. Upload the CONTENTS of this folder to the repository root (not the ZIP alone).
4. Import the repository in Vercel.
5. Framework Preset: Other. Build Command: leave empty. Output Directory: leave empty/default.
6. Deploy.

## SEO after deployment

The site includes a canonical URL, description, Open Graph tags, Person JSON-LD and robots directives.
If you deploy to a different domain, update the canonical, Open Graph and JSON-LD URLs in `index.html`, plus `sitemap.xml`.
Submit the site in Google Search Console and request indexing. Search indexing and Knowledge Panels are controlled by Google and are not guaranteed.

## Notes

- The two supplied portraits are included as optimized WebP files.
- Social links marked `#` are placeholders and must be replaced.
- This is a static site; no backend or database is required.
