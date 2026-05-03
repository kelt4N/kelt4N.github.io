# Keltan Voyce — Portfolio

Black & white editorial portfolio. Static HTML/CSS/JS — no build tools needed.

---

## File structure

```
keltan-voyce-portfolio/
├── index.html          ← Home page
├── portfolio.html      ← Gallery page (My Work)
├── about.html          ← About page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Page transitions
├── images/
│   ├── profile.jpg     ← Your profile photo (add this)
│   └── projects/       ← Project images (add these)
└── projects/
    ├── project-01.html ← Template — duplicate for each project
    └── ...
```

---

## Customise

### 1. Profile photo
Add your photo as `images/profile.jpg` then uncomment the `<img>` tag in each nav.

### 2. Project gallery
In `portfolio.html`, for each `.gallery-item`:
- Replace the `<div class="img-placeholder img-N">` with `<img src="images/projects/your-image.jpg" alt="Project name">`
- Update the `href` to point to your project file
- Update the overlay title, category, and year

### 3. Project pages
- Duplicate `projects/project-01.html` for each project
- Fill in the title, category, meta details, and body text
- Add images inline inside `.project-text`

### 4. Side art margins
In `portfolio.html`, find the `<!-- CUSTOM ART SLOT -->` comments and replace with:
```html
<img src="images/art-left.png" alt="" class="side-art-img">
```

### 5. Links
Search the files for `your@email.com` and `yourprofile` and replace with your real email and LinkedIn URL.

---

## Run locally

Just open `index.html` in your browser — no server needed.

Or for proper local dev (avoids font CORS issues):
```bash
npx serve .
# then open http://localhost:3000
```

---

## Deploy to GitHub Pages (free hosting)

```bash
# 1. Create a repo on github.com named: keltanvoyce.github.io

# 2. In this folder:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/keltanvoyce.github.io.git
git push -u origin main

# 3. Go to github.com → your repo → Settings → Pages
#    Set source to: main branch, / (root)
#    Your site will be live at: https://keltanvoyce.github.io
```

### Adding changes later
```bash
git add .
git commit -m "Update portfolio"
git push
```
GitHub Pages auto-deploys within ~60 seconds.

---

## Adding more projects

1. Duplicate `projects/project-01.html` → rename to `projects/project-07.html`
2. Copy a `.gallery-item` block in `portfolio.html` and update the `href` and content
3. Add your image to `images/projects/`
