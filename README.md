<div align="center">

  <h1>🇰🇷 Learn to Read Korean in 15 Minutes</h1>

  <p><strong>An interactive, visual single-page web application designed to teach the fundamentals of reading Hangul (the Korean alphabet) in under 15 minutes.</strong></p>

  <p>
    <a href="https://metanef.github.io/annyeong-15mintolearnkorean/"><img src="https://img.shields.io/badge/LIVE%20DEMO-PLAY%20ONLINE-2ecc71?style=for-the-badge" alt="Live Demo" /></a>
    <img src="https://img.shields.io/badge/VERSION-1.0.0-9b59b6?style=for-the-badge" alt="Version" />
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
- **Interactive Writing Practice:** A built-in HTML5 Canvas-based sketchpad modal that lets users practice drawing each character with a guiding stencil backdrop.
- **Audio Pronunciation:** Integrates with the browser's native Web Speech API (`SpeechSynthesis`) to read out the correct Korean pronunciation for every character and syllable.
- **Progress Tracking & Four Learning Modules:** Step-by-step Jamo course, Pop-Culture training, Interactive Review Table, and the History of Hangul.

---

## 🛠️ Technology Stack & Structure

- **Structure & Layout:** Semantic HTML5 (`index.html`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (loaded dynamically via CDN for maximum portability) and custom CSS (`css/style.css`)
- **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts
- **Interactivity & Logic:** Modern Vanilla JavaScript (ES6+) separated into logic (`js/app.js`) and course data (`js/data.js`)
- **Canvas Rendering:** Native HTML5 Canvas API for touch-and-mouse drawing practice
- **Audio synthesis:** Native Web Speech API (`SpeechSynthesis`) configured for Korean locale (`ko-KR`)

### 📁 File Structure

```text
/
├── index.html       # Main application structure and UI layout
├── css/
│   └── style.css    # Custom animations and fonts
└── js/
    ├── app.js       # Core logic (navigation, canvas drawing, speech synthesis, quiz handling)
    └── data.js      # Constant course data (Jamo lists, exercises, mnemonics)
```

---

## 📚 Credits & Methodology

- Based on the visual method created by **Ryan Estrada** for learning Hangul instantly.
- Hand-drawn stencils/emojis used for direct association.

---

## 📌 TODO

### ✅ Done (Validated)
- [x] Modular Architecture (HTML/CSS/JS)
- [x] Interactive Review Table (Auto-evaluation, Audio, Drawing)
- [x] "Pop-Culture" Training Mode (Ryan Estrada method)
- [x] History of Hangeul module (5 interactive slides)
- [x] Responsive layout with single-line home navigation bar
- [x] Ryan Estrada's "Kick It Up a Notch!" aspiration rule slide
- [x] Slide counters for all lesson card series (1/14, 1/10, etc.)
- [x] Korean Flag SVG Favicon

### ⏳ To Do

- [ ] Automatic stroke validation on the writing board (80% accuracy check on stencil path)
