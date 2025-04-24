import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Add animation class after component mounts for entrance effect
    const timer = setTimeout(() => setIsAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className={`content-container ${isAnimated ? "animated" : ""}`}>
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="title">Jenkins</h1>
          <p className="subtitle">CI/CD</p>

          <a
            className="App-link"
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Jenkins
          </a>
        </header>

        <div className="card">
          <p className="card-text">Start editing to see some magic happen!</p>
        </div>

        <footer className="App-footer">
          <p className="author">
            Created by <span className="highlight">@thev1ndu</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
