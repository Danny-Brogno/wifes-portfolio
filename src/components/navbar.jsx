import React from 'react';

export const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        {/* Changed to flex-column on mobile, resets back to row on large lg desktops */}
        <div className="d-flex flex-column align-items-flex-start d-lg-contents w-100">
          <a className="navbar-brand m-0">
            <span 
              className="fw-bolder text-primary cursor-pointer title"
              onClick={() => setCurrentPage("homepage")}
            >
              Majesca Maclan Brogno
            </span>
          </a>
          
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
            <li className="nav-item cursor-pointer" onClick={() => setCurrentPage("homepage")}>
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item cursor-pointer" onClick={() => setCurrentPage("resumepage")}>
              <a className="nav-link">Resume</a>
            </li>
            <li className="nav-item cursor-pointer" onClick={() => setCurrentPage("contactpage")}>
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};