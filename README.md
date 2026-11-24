# Molla Mohammad Rifat Osama — Identity Website V3

A responsive, multi-section personal identity and portfolio website with:
- Dark premium visual design, animated hero, responsive navigation and scroll effects
- Detailed biography and cybersecurity/development interest sections
- Configurable multi-account social profile directory
- Person + WebSite JSON-LD structured data
- SEO metadata, canonical URL, Open Graph tags, robots.txt and sitemap.xml
- Vercel / GitHub Pages static hosting
- Blogger page and Blogger head snippet

## 1. Before publishing: edit your real profile links

Open `assets/profile-config.js` and replace the placeholder Facebook, additional GitHub and additional Telegram entries with real public links. You can add as many objects as needed to each `links` array. Remove any unused placeholder rows.

The site already contains these supplied public links:
- https://github.com/mrifatislam2008
- https://t.me/RiFAT_TECH_BD
- https://t.me/Molla_Mohammad_Rifat_Osama

Do not publish private account details, passwords, tokens or non-public links.

## 2. Add your real photo (optional but recommended)

Add a square portrait as `assets/profile.jpg` and update the `image` URL in the Person JSON-LD inside `index.html`. Replace the letter R avatar with an `<img>` if desired. The starter package uses an initials avatar and does not invent a photograph.

## 3. Replace the domain

Search all files for `YOUR-DOMAIN.com` and replace it with the final public domain, including the correct URL in:
- `index.html` canonical, Open Graph and JSON-LD URLs
- `robots.txt`
- `sitemap.xml`

Do not leave the example domain in production. If using Vercel's free URL, use that exact deployed URL. If using Blogger only, use the actual published profile page URL in the Blogger head snippet.

## 4. Vercel deployment (phone friendly)

1. Extract this ZIP on your phone.
2. Create a GitHub repository, e.g. `rifat-identity`.
3. Upload the CONTENTS of this folder to the repository root (index.html must be at root).
4. Sign in at https://vercel.com using GitHub.
5. Add New → Project → import the repository.
6. Framework preset: Other. Build command: blank. Output directory: `.`.
7. Deploy and open the assigned URL.
8. Edit domain placeholders and `assets/profile-config.js`, commit changes, and redeploy.

## 5. GitHub Pages

Repository → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save. Wait for the public URL, then update canonical and sitemap URLs.

## 6. Blogger

1. Blogger → Pages → New Page.
2. Switch to HTML view and paste `blogger-page.html`.
3. Publish the page.
4. Back up your Blogger theme.
5. Theme → Edit HTML. Add `blogger-head-snippet.html` inside the theme `<head>` and replace `YOUR-BLOGGER-PAGE-URL` with the published page URL.
6. Blogger themes can have their own canonical tags or structured data. Avoid adding duplicate/conflicting canonical tags or duplicate Person entities. Validate the published page.

Blogger pages often use a URL path such as `/p/about-me.html`; canonical URL should be that exact public page URL, not automatically the domain root.

## 7. Google search visibility

1. Verify the published domain or URL-prefix property in Google Search Console: https://search.google.com/search-console
2. Submit `https://YOUR-DOMAIN.com/sitemap.xml` for this static site.
3. Inspect the homepage URL and request indexing.
4. Ensure the page is public, loads without login, and is not blocked by robots/noindex.
5. Link your website from your genuine public social profiles and keep your name/biography consistent.
6. Publish original, useful project write-ups and link to public repositories.
7. Validate structured data with Google's Rich Results Test and Schema.org Validator.

Google decides whether, when and how to show pages. Indexing, ranking, AI Overviews and Knowledge Panels are not guaranteed. Structured data helps search engines understand content; it does not force a special search result.

## 8. Accuracy and trust

This starter describes skills as interests and ongoing practice. Add actual years of experience, certifications, completed projects, employers, awards and client work only when accurate and verifiable. Describe security testing as permission-based and authorized.
