<div align="center">

  <a href="https://metanef.github.io/annyeong-15mintolearnkorean/">
    <img src="favicon.svg" width="96" height="96" alt="Annyeong Logo" />
  </a>

  <h1>Annyeong! Learn to Read Korean in 15 Minutes</h1>

  <p><strong>An interactive, visual single-page web application designed to teach the fundamentals of reading Hangul (the Korean alphabet) in under 15 minutes.</strong></p>

  <p>
    <a href="https://metanef.github.io/annyeong-15mintolearnkorean/"><img src="https://img.shields.io/badge/LIVE%20DEMO-PLAY%20ONLINE-2ecc71?style=for-the-badge" alt="Live Demo" /></a>
    <img src="https://img.shields.io/badge/VERSION-1.3.0-9b59b6?style=for-the-badge" alt="Version" />
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>

</div>

---

This project is built using a highly effective, visual mnemonic-based approach inspired by Ryan Estrada's famous comic guide.

---

## 🚀 Live Demo & How to Run

Because this is a lightweight, fully client-side application, there are no dependencies to install or complex build steps!

### Running Locally
1. Clone or download the repository.
2. Open the `index.html` file directly in any modern web browser (e.g., Double-click the file or right-click and choose **Open with...**).
3. Alternatively, you can run a local server (e.g., using VS Code's Live Server extension, Python's `http.server`, or Node's `serve`) to preview it:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Deployment
This application is 100% compatible and ready for instant deployment on static hosting platforms like **GitHub Pages**, **Vercel**, or **Netlify**.

---

## ✨ Features

- **Interactive Visual Mnemonics:** Association of Hangul consonants and vowels with visual shapes and Ryan Estrada's mnemonic method (e.g., `ㄱ` looking like a **G**un, `ㄷ` looking like a **D**oor).
- **The "Notch" Rule Slide:** Explains Ryan Estrada's method on how adding a notch transforms consonants (`ㄱ` → `ㅋ`, `ㄷ` → `ㅌ`, `ㅇ` → `ㅎ`, `ㅅ` → `ㅈ` → `ㅊ`).
- **Dynamic Slide Counters:** Clear card-level step counts (e.g., `1 / 14` for basic consonants, `1 / 10` for vowels).
- **Interactive Dual-Canvas Writing Practice:** Built-in dual-canvas sketchpad modal with real-time 80% accuracy corridor validation and celebration sound.
- **100% Offline Native Audio Pronunciation:** High-quality native Korean MP3 audio files for all 57 Jamo and training terms (426 KB total), played exclusively on user click.
- **Progress Tracking & Four Learning Modules:** Step-by-step Jamo course, Pop-Culture training, Interactive Review Table, and the History of Hangul.

---

## 🛠️ Technology Stack & Structure

- **Structure & Layout:** Semantic HTML5 (`index.html`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (loaded dynamically via CDN for maximum portability) and custom CSS (`css/style.css`)
- **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts
- **Interactivity & Logic:** Modern Vanilla JavaScript (ES6+) separated into logic (`js/app.js`) and course data (`js/data.js`)
- **Canvas Rendering:** Dual-canvas architecture (`#guide-canvas` & `#paint-canvas`) for pixel-perfect stencil validation
- **Audio System:** Offline MP3 audio assets mapped via `AUDIO_MAP` with Web Speech API fallback

### 📁 File Structure

```text
/
├── index.html       # Main application structure and UI layout
├── css/
│   └── style.css    # Custom animations and fonts
├── js/
│   ├── app.js       # Core logic (navigation, dual-canvas validation, audio playback, quiz handling)
│   └── data.js      # Course data (Jamo lists, training exercises, mnemonics)
├── assets/
│   └── audio/       # 57 offline native Korean MP3 files organized into subfolders:
│       ├── consonant/
│       ├── vowels/
│       ├── double_consonant/
│       ├── compound_vowels/
│       └── training/
└── scripts/         # Automated asset utility scripts
```

---

## 📚 Credits & Methodology

- Based on the visual method created by **Ryan Estrada** for learning Hangul instantly.
- Hand-drawn stencils/emojis used for direct association.

---

## 📌 TODO

### ✅ Done (Validated in v1.2.0)
- [x] Modular Architecture (HTML/CSS/JS)
- [x] Interactive Review Table (Auto-evaluation, Audio, Drawing)
- [x] "Pop-Culture" Training Mode (Ryan Estrada method)
- [x] History of Hangeul module (5 interactive slides)
- [x] Responsive layout with single-line home navigation bar
- [x] Ryan Estrada's "Kick It Up a Notch!" aspiration rule slide
- [x] Slide counters for all lesson card series (1/14, 1/10, etc.)
- [x] Square Korean Flag SVG Favicon
- [x] Unified card format & height across slides and lesson cards (no layout jumps)
- [x] Footer links to Ryan Estrada's comic and author profile
- [x] Harmonized color themes for module cards (Red for History, Purple for Learning)
- [x] Dual-canvas stroke accuracy validation (80% corridor threshold & celebratory feedback)
- [x] 100% offline native Korean MP3 audio for all 57 terms, organized into clean subfolders (`consonant`, `vowels`, `double_consonant`, `compound_vowels`, `training`)
- [x] Dynamic action button labels (`Next →` vs `Start Section →`) and bug fixes for card content updates

### ⏳ Future Roadmap (To Do)

- [ ] **Dynamic Card Micro-Animations:** Add CSS/JS 3D flip, smooth slide transitions, and interactive hover animations for lesson cards.
- [ ] **3 Specialized Training Modes:**
  - ⚡ **Speed Recognition Quiz:** Fast-paced multiple choice matching for consonants & vowels
  - ✍️ **Guided Stroke Challenge:** Interactive drawing mode with stroke matching with the real character
  - 🎧 **Audio Ear-Training Mode:** Listening practice mode to match native Korean sound clips with the correct Hangul character
- [ ] **Progress Persistence:** LocalStorage-based achievement badges and completion tracking
