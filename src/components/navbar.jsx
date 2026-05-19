import React from 'react';

export const Navbar = ({currentPage, setCurrentPage}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      
      <div className="container px-5">
        <a className="navbar-brand">
          <span className="fw-bolder text-primary cursor-pointer"
          onClick={()=>setCurrentPage("homepage")}>
          Majesca Maclan
          </span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li className="nav-item cursor-pointer" onClick={()=>setCurrentPage("homepage")}>
              <a className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item cursor-pointer" onClick={()=>setCurrentPage("resumepage")}>
              <a className="nav-link">
                Resume
              </a>
            </li>
            <li className="nav-item cursor-pointer" onClick={()=>setCurrentPage("contactpage")}>
              <a className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}