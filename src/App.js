import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p class="footer">
            <a
              href="https://github.com/Ditke-ZH/dictionary-project"
              target="_blank"
              rel="noreferrer"
              title="Open-source code"
              id="personal-link"
            >
              Open-source code
            </a>
            &nbsp;by&nbsp;
            <a
              href="https://www.linkedin.com/in/edit-guntermann-563357104"
              target="_blank"
              rel="noreferrer"
              title="Edit Guntermann"
              id="personal-link"
            >
              Edit Guntermann
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
