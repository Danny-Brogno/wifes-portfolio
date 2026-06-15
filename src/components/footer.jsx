import React from 'react';

const scrollToTheTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

export const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          
          <div className="col-auto">
            <div className="small m-0">
              &copy; 2026 Danny Brogno. All Rights Reserved.
            </div>
          </div>
          
          <div className="col-auto scroll-top-btn" onClick={scrollToTheTop}>
            <div className="bg-gradient-primary-to-secondary">
              <div>
                <i id="foot-chevron" className="bi bi-chevron-up"></i>
              </div>
            </div>
          </div>
          
          <div className="col-auto">
            <a className="small" href="#!">Privacy</a>
            <span className="mx-1">&middot;</span>
            <a className="small" href="#!">Terms</a>
            <span className="mx-1">&middot;</span>
            <a className="small" href="#!">Contact</a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}