// Import React
import React from 'react';

// Import stylesheet
import './style.css';

// Create and export footer component
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footText">
          
          {/* Contact Details */}
          <div className="col-5 justify-content-center footer-text">
            <a href="mailto:alwiehrs@gmail.com" className="my-1 px-2 contact-link">alwiehrs@gmail.com</a> Copyright &copy; 2021
          </div>

        </div>
      </div>
    </footer>
  );
}