import React, { useEffect, useState, useRef } from 'react';
import profileImg from '../assets/profile.png';

export const HomePage = ({ currentPage, setCurrentPage }) => {
  
  const [animate, setAnimate] = useState(false);
  const targetRef = useRef(null);
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Set Title
    document.title = "Homepage";

    // Set up the Intersection Observer inside the hook
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is visible in the viewport
        if (entry.isIntersecting) {
          setAnimate(true); 
          // Once it animates, we can stop observing it
          if (targetRef.current) observer.unobserve(targetRef.current);
        }
      },
      {
        threshold: 0.4, // Triggers when 40% of the element is visible on screen
      }
    );

    // Start observing the target element
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (targetRef.current) observer.disconnect();
    };
  }, []);
  
  return (
    <>
      <main className="flex-shrink-0 bg-light">

        <header className="py-5">
          <div className="homepage container px-5 pb-5">
            <div className="row gx-5 align-items-center">
              <div className="col-xxl-5">
                <div className="text-center text-xxl-start">
                  <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                    <div className="text-uppercase">
                      Sales &middot; & &middot; Marketing
                    </div>
                  </div>
                  <div className="fs-3 fw-light text-muted">
                    I can help your business to
                  </div>
                  <h1 className="display-3 fw-bolder mb-5">
                    <span className="text-gradient">
                      Drive predictable revenue and market expansion
                    </span>
                  </h1>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" onClick={() => setCurrentPage("resumepage")}>
                      Resume
                    </a>
                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" onClick={() => setCurrentPage("contactpage")}>
                      Projects
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7">
                <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                  <div className="profile bg-gradient-primary-to-secondary">
                    <img className="profile-img" src={profileImg} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Target section hooked up to the intersection tracking ref */}
        <section ref={targetRef}>
          <div className="container under-jumbotron px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-12">
                <div className="text-center my-5">
                  <h2 className="display-5 fw-bolder">
                    <span className="text-gradient d-inline">
                      About Me
                    </span>
                  </h2>
                  {/* Dynamic class assigns standard styling or type-animation based on visibility */}
                  <p className={`lead fw-light mb-4 ${animate ? 'animate-typing' : ''}`}>
                    My name is Majesca Maclan and I build high-performing growth strategies.
                  </p>
                  <p className="text-muted">
                    Rising from an event clerk to director of sales and marketing, I seamlessly lead sales and marketing teams.
                    I personally engage clients and manage diverse vendors from premium catering to sound and lighting technicians—delivering top-tier results with elegance, professionalism, and genuine kindness.
                  </p>
                  <div className="d-flex justify-content-evenly fs-2 gap-4">
                    <a className="text-gradient" href="mailto:majesca.maclan@gmail.com">
                      <i className="bi bi-at"></i>
                    </a>
                    <a className="text-gradient" href="https://www.linkedin.com/in/majesca-m-6a9050165/" target="_blank" rel="noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
};