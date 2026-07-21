import React from 'react';
import { Link } from 'react-router-dom'; // Imported Link

// Removed props since we don't need state anymore
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
      <div className="container px-5">
        {/* Changed to flex-column on mobile, resets back to row on large lg desktops */}
        <div className="d-flex flex-column align-items-flex-start d-lg-contents w-100">
          <span className="navbar-brand m-0 p-0">
            {/* Swapped to a Link tag for the logo */}
            <Link 
              className="fw-bolder text-primary cursor-pointer title text-decoration-none"
              to="/"
            >
              Majesca Maclan
            </Link>
          </span>
          
          {/* Added a top margin (mt-2) to give the button breathing room on mobile when stacked */}
          <button 
            className="navbar-toggler mt-2 mb-3 mb-lg-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* The links dropdown wrapper */}
        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder text-center">
            <li className="nav-item">
              <Link className="nav-link cursor-pointer" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cursor-pointer" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cursor-pointer" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};