# Week 2 Day 3 Assignment

A suite of three interactive, responsive web applications built with vanilla HTML, CSS, and JavaScript, styled with a modern, aesthetic, and unified design system in `styles.css`.

---

## 📱 Applications Included

1. **Calculator** (`calculator.html` & `calculator.js`):
   - A calculator supporting basic arithmetic operations (`+`, `-`, `*`, `/`).
   - Clean 4-column CSS grid layout with spanning action buttons (`+`, `=`, `0`).
   - High-contrast OLED-style display with full keyboard support.

2. **Character Counter** (`counter.html` & `counter.js`):
   - Live character counter for input thoughts (up to 280 characters).
   - Dynamic real-time color feedback (normal, warning at 260+ characters, limit exceeded alert at 280+ characters).
   - Automatic button locking and border state feedback.

3. **Shopping List** (`shopping-list.html` & `shopping-list.js`):
   - Interactive item manager with real-time remaining items count.
   - Add items with custom names and quantities, with input validation.
   - Mark items as "Bought" (strikethrough) or "Delete" with dynamic counter recalculation.

---

## 🚀 Setup & How to Run

Because this project is built entirely with standard HTML, CSS, and JavaScript, no build tools or installations are required.

### Method 1: Open Directly in a Browser (Quickest)
1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   ```
2. Open the project folder and double-click any of the HTML files to launch them in your default web browser (Chrome, Edge, Firefox, Safari):
   - `calculator.html`
   - `counter.html`
   - `shopping-list.html`

---

### Method 2: Using VS Code Live Server Extension (Recommended)
1. Open the project folder in VS Code or your IDE.
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click on any `.html` file (e.g., `calculator.html`) and select **"Open with Live Server"**.
4. The page will launch automatically at `http://127.0.0.1:5500` with live reload on file edits.

---

### Method 3: Using a Local HTTP Server

#### Using Python (if Python is installed):
Open a terminal in the project directory and run:
```bash
python -m http.server 3000
```
Then visit:
- Calculator: `http://localhost:3000/calculator.html`
- Character Counter: `http://localhost:3000/counter.html`
- Shopping List: `http://localhost:3000/shopping-list.html`

#### Using Node.js / npx (if Node is installed):
Open a terminal in the project directory and run:
```bash
npx serve .
```

---

## 📁 Project Structure

```
├── calculator.html       # Calculator markup
├── calculator.js         # Calculator business logic and keyboard handling
├── counter.html          # Character Counter markup
├── counter.js            # Real-time character count and validation logic
├── shopping-list.html    # Shopping List markup
├── shopping-list.js      # Dynamic list generation, purchase, and delete logic
├── styles.css            # Central shared, aesthetic, and responsive stylesheet
└── README.md             # Project documentation and setup instructions
```

---

## 🎨 Styling Features (`styles.css`)

- **Single Stylesheet**: All three applications share a single, unified `styles.css`.
- **Modern Typography**: Uses Google Fonts (`Plus Jakarta Sans` for UI, `JetBrains Mono` for calculations and counters).
- **Responsive Layout**: Fluid scaling using CSS `clamp(...)`, CSS Grid, and Flexbox for mobile, tablet, and desktop viewports.
- **Mobile Optimized**:
  - `min-height: 100dvh` for mobile toolbar stability.
  - Safe-area inset handling (`env(safe-area-inset-top)` / `bottom`).
  - Base input font size of 16px to prevent iOS auto-zoom on focus.
  - Touch action optimizations and minimum 44px tap targets.
  - Media queries for ultra-compact screens (`<= 380px`) and mobile landscape orientations.
