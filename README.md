# KeplerViz

**KeplerViz** is an interactive React app for visualizing Kepler's Laws of Planetary Motion. Explore the three laws with dynamic diagrams, animations, and mathematical derivations.

## Features

- **Definition Tab:** Clear summary of Kepler's three laws with historical context.
- **Laws Tab:**  
  - **First Law:** Animated elliptical orbit showing the Sun at one focus.  
  - **Second Law:** Visualizes equal areas swept in equal times with dynamic speed.  
  - **Third Law:** Interactive chart and slider to explore the relationship between orbital period and semi-major axis.  
  - **Derivation:** Step-by-step animated derivation of Kepler's Third Law with equations.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/RashmitSaha/kepler_viz.git
   cd kepler_viz
   ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```
    The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```sh
npm run build
```

## Project Structure

```
.
├── public/
│   ├── index.html
│   ├── kepler.png
│   └── logo.png
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── index.css
│   └── components/
│       ├── Definition.jsx
│       ├── Header.jsx
│       ├── KeplerFirstLaw.jsx
│       ├── KeplerSecondLaw.jsx
│       ├── KeplerThirdLaw.jsx
│       ├── LawThreeDerivation.jsx
│       ├── Navbar.jsx
│       └── OrbitCanvas.jsx
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Recharts](https://recharts.org/) (charts)
- [KaTeX](https://katex.org/) & [react-katex](https://github.com/garrettgman/react-katex) (math rendering)

## License

MIT

---

*Created for educational and visualization purposes.*
