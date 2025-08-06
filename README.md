# 🛍️ Showcase Product Grid

A simple product listing UI built with vanilla JavaScript and TailwindCSS.  
No frameworks, no build steps — just clean HTML, CSS, and JS.

Includes basic category filtering and a modal for viewing product details.

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone git@github.com:alejoas1981/showcase.git
   ```

2. Navigate into the project folder:
   ```bash
   cd showcase
   ```

3. Make sure there is a `products.json` file in the root directory.  
   This file is used as the data source.

4. Open `index.html` in any modern browser.  
   That’s it — no setup, no server needed.

## 📦 Project Structure

```
showcase/
├── index.html           # Main HTML page
├── productViewer.js     # JS logic for rendering and interactivity
├── products.json        # Local product data (you must provide this)
```

## 🛠️ Features

- Fetches product data from a local JSON file  
- Displays products in a responsive grid  
- Filters by category using a dropdown  
- Clickable cards open a modal with full product details  
- TailwindCSS for styling  
- No external dependencies

## 📝 Sample `products.json` format

```json
[
  {
    "title": "Wireless Headphones",
    "price": 89.99,
    "image": "images/headphones.jpg",
    "category": "electronics",
    "description": "High-quality wireless headphones with noise cancellation."
  }
]
```

## 📄 License

MIT — free for personal or commercial use.
