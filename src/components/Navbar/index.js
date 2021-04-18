// Import React and stylesheet
import React from 'react';
import './style.css';

// Create and export navbar component
export default function Navbar() {
  return (
    <nav
      style={{ height: '60px' }}
      id="navbar"
      className="navbar navbar-expand-lg"
    >
      <div>
        {/* Primary Links */}
        <a href="#home" className="nav-link px-2 rounded">
          home
        </a>
        <a href="#portfolio" className="nav-link px-2 rounded">
          portfolio
        </a>
        <a href="#about" className="nav-link px-2 rounded">
          about
        </a>
        <a href="#contact" className="nav-link px-2 rounded">
          contact
        </a>

        {/* Secondary Links */}
        <a
          href="https://www.github.com/awiehrs"
          className="d-none d-md-inline nav-link px-2 rounded"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/amanda-wiehrs"
          className="d-none d-md-inline nav-link px-2 rounded"
        >
          linkedin
        </a>
      </div>
    </nav>
  );
}