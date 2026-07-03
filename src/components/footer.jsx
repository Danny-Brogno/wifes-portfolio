import React from 'react';

const scrollToTheTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

export const Footer = ({ currentPage, setCurrentPage }) => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          
          <div className="col-auto">
            <div className="small m-0">
              &copy; 2026 Majesca Maclan. All Rights Reserved.
            </div>
            <div id="creator">
              <span>
                Built with
                &nbsp;
                <i className="bi bi-heart-fill text-danger"></i>
                &nbsp;
                by &nbsp;
                <a href="https://www.linkedin.com/in/danny-brogno/" target="blank_">
                  Danny Brogno
                </a>
              </span>
            </div>
          </div>
          
          <div className="col-auto scroll-top-btn" onClick={scrollToTheTop}>
            <div className="bg-gradient-primary-to-secondary2">
              <div>
                <i id="foot-chevron" className="bi bi-chevron-up"></i>
              </div>
            </div>
          </div>
          
          <ul className="col-auto footer-list">
            <li className="cursor-pointer" onClick={() => setCurrentPage("homepage")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => setCurrentPage("resumepage")}>
              Resume
            </li>
            <li className="cursor-pointer" onClick={() => setCurrentPage("contactpage")}>
              Contact
            </li>
          </ul>
          
        </div>
      </div>
    </footer>
  )
}