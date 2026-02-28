# codeformywedding
---

```markdown
# Digital Wedding Invitation By Zal (To render image only haha)

With Love, We Invite You 🤍  

This is a simple, elegant, and responsive digital wedding invitation built using pure HTML, CSS, and JavaScript.  
Designed to display exported PNG pages from Canva as a scrollable web invitation with background music.

---

## Features

- 📱 Fully responsive (mobile-friendly)
- 🎵 Background music (plays after user clicks "Open Invitation")
- 🖼️ Supports multiple PNG invitation pages
- 🎨 Clean and minimal aesthetic
- 🚀 Easy deployment via GitHub + Netlify

---

## Project Structure

```

/undangan
├── index.html
├── style.css
├── script.js
├── music.mp3
└── images/
├── page1.png
├── page2.png
├── page3.png

````

---

## Adding Background Music

1. Replace `music.mp3` with your own audio file.
2. Make sure the filename matches the one inside `index.html`:

```html
<audio id="bg-music" loop>
    <source src="music.mp3" type="audio/mpeg">
</audio>
````

⚠️ Note: Modern browsers require user interaction before playing audio.
Music will start after clicking the **"Open Invitation"** button.

---

## Adding or Updating Invitation Pages

1. Export your invitation pages from Canva as PNG.
2. Place them inside the `/images` folder.
3. Update `index.html` sections if needed:

```html
<section class="section">
    <img src="images/page1.png" alt="Cover">
</section>
```

You can add as many sections as needed.

---

## Deployment Guide (GitHub + Netlify)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial wedding invitation commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

### 2. Deploy on Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Click **"Add new site"**
3. Choose **"Import an existing project"**
4. Connect your GitHub repository
5. Click Deploy

No build settings required.

---

## Custom Domain (Optional)

After deployment, you can:

* Change the site name in Netlify settings
* Add a custom domain (e.g., `ourforever.com`)

---

## Future Improvements (Optional)

* Countdown timer
* RSVP form
* Google Maps button
* Background animation
* Personalized guest name in URL

---

Made with love 🤍

```

---
Zal🤍✨
```
