import React, { useEffect, useRef } from 'react';

export const ResumePage = () => {
  const highlightsRef = useRef(null);
  
  useEffect(() => {
    document.title = "Majesca Maclan | Resume page";

    // Check if the home button flagged that we should scroll down directly
    const checkScrollFlag = sessionStorage.getItem('scrollToPortfolioHighlights');
    if (checkScrollFlag === 'true' && highlightsRef.current) {
      // Remove flag immediately to avoid sticky behavior on hard refresh
      sessionStorage.removeItem('scrollToPortfolioHighlights');
      
      // Instantly scroll down directly to that section
      setTimeout(() => {
        highlightsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, []);
  
  return (
    <div className="resume-page container px-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Resume</span>
        </h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12">
          
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="text-primary fw-bolder mb-0">Experience</h2>
            <a className="btn btn-primary px-4 py-3" href="#!">
              <div className="d-inline-block bi bi-download me-2"></div>
              Download Resume
            </a>
          </div>
          
          <section className="outer-container">
            
            {/* EXPERIENCE 1 */}
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">2019 - Present</div>
                      <div className="small fw-bolder">Sales and Marketing director</div>
                      <div className="small text-muted">The Plaza Lodge</div>
                      <div className="small text-muted">Baguio, Philippines</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* EXPERIENCE 2 */}
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">2017 - 2019</div>
                      <div className="small fw-bolder">PIZZA Specialist</div>
                      <div className="small text-muted">Wayne Enterprises</div>
                      <div className="small text-muted">Gotham City, NY</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* EXPERIENCE 3 */}
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">2016 - 2017</div>
                      <div className="small fw-bolder">Laughter Yoga Instructor</div>
                      <div className="small text-muted">Shit City</div>
                      <div className="small text-muted">Zimbabwe, Africa</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* EXPERIENCE 4 */}
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">2015 - 2016</div>
                      <div className="small fw-bolder">Sperm Bank Receptionist</div>
                      <div className="small text-muted">Fairy Pool forest</div>
                      <div className="small text-muted">Isle of Skye, Scotland</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* EXPERIENCE 5 */}
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">2014 - 2015</div>
                      <div className="small fw-bolder">Octopus Masseur</div>
                      <div className="small text-muted">The Fishmarket</div>
                      <div className="small text-muted">Newhaven, Edinburgh</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                  </div>
                </div>
              </div>
            </div>
            
          </section>

          <section>
            <h2 className="text-secondary fw-bolder mb-4">
              Education
            </h2>

            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">2015 - 2017</div>
                      <div className="mb-2">
                        <div className="small fw-bolder">Barnett College</div>
                        <div className="small text-muted">Fairfield, NY</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Master's</div>
                        <div className="small text-muted">Web Development</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">

                <div className="mb-5">
                  <div className="d-flex align-items-center mb-4">

                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">
                          Professional Skills
                        </span>
                      </h3>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 mb-4">

                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          SEO/SEM Marketing
                        </div>
                      </div>
                            
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Statistical Analysis
                        </div>
                      </div>
                            
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Web Development
                        </div>
                      </div>

                    </div>
                            
                    <div className="row row-cols-1 row-cols-md-3">

                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Network Security
                        </div>
                      </div>
                            
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Adobe Software Suite
                        </div>
                      </div>

                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          User Interface Design
                        </div>
                      </div>

                    </div>
                </div>
                  
                <div className="mb-0">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                  </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                      <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3">
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Ruby</div></div>
                      <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                    </div>
                 </div>
                  
              </div>
            </div>
          </section>

          {/* Interactive 50/50 Video Case Study Section */}
          <section ref={highlightsRef} id="portfolio-highlights" className="py-5">
            <div className="container px-0">
              <div className="row g-5 align-items-center">
                
                {/* LEFT COLUMN: Video Presentation */}
                <div className="col-lg-6">
                  <div className="ratio ratio-16x9 shadow rounded-4 overflow-hidden bg-dark">
                    {/* Replace src with her actual video link (e.g., Vimeo, YouTube, or hosted mp4) */}
                    <iframe 
                      src="https://www.youtube.com/embed/placeholder" 
                      title="Majesca Maclan - Operational Strategy Presentation" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* RIGHT COLUMN: Alternative Metrics & Case Study Download */}
                <div className="col-lg-6">
                  <div className="mb-4">
                    <span className="text-uppercase small fw-bold main-color d-block mb-1">
                      Executive Case Study
                    </span>
                    <h2 className="fw-bold display-6">
                      The Plaza Lodge Transformation
                    </h2>
                    <p className="text-muted">
                      A look behind the numbers: how shifting from rigid budgets to an agile resource matrix unlocked record performance.
                    </p>
                  </div>

                  {/* Re-contextualized Metrics (Described differently than the homepage) */}
                  <div className="row g-4 mb-4">
                    <div className="col-sm-6">
                      <div className="p-3 bg-light rounded-4 h-100">
                        <span className="h2 fw-bold main-color d-block mb-1">1.45x</span>
                        <h3 className="h6 fw-bold text-uppercase mb-1">Commercial Lift</h3>
                        <p className="text-muted small mb-0">
                          Outperformed legacy year-over-year targets by scaling high-margin corporate bookings.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="p-3 bg-light rounded-4 h-100">
                        <span className="h2 fw-bold main-color d-block mb-1">£2.5M+</span>
                        <h3 className="h6 fw-bold text-uppercase mb-1">Capital Oversight</h3>
                        <p className="text-muted small mb-0">
                          Direct restructuring of vendor supply networks to maximize premium guest experiences.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button: Download PDF Strategy */}
                  <div className="d-grid d-sm-flex gap-3">
                    <a 
                      href="/path-to-your-case-study.pdf" 
                      download="Majesca_Maclan_Operational_Strategy.pdf"
                      className="btn btn-outline-dark px-4 py-3 fw-bold d-inline-flex align-items-center justify-content-center rounded-3 shadow-sm w-100 w-sm-auto"
                    >
                      <i className="bi bi-file-earmark-pdf me-2 fs-5"></i>
                      Download Strategy PDF
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};