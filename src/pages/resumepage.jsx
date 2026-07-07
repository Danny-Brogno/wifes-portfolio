import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>My Resume | Web Developer Portfolio</title>
        <meta name="description" content="View my professional experience and skills." />
      </Helmet>

      <div className="resume-page container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>

        <div className="row gx-5 justify-content-center">
          <div className="col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12">

            <div className="d-flex align-items-center justify-content-between mb-5 my-flex-column">
              <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              <a 
                className="btn btn-primary btn-lg px-4 py-3"
                href="/CV-Majesca Maclan.pdf" 
                target="_blank" 
                rel="noopener noreferrer"

              >
                <i className="d-inline-block bi bi-download me-2"></i>
                Download CV
              </a>
            </div>

            <section className="outer-container">
              {/* EXPERIENCE 1 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">05/2022 – Present</div>
                        <div className="small fw-bolder">Sales and Marketing director</div>
                        <div className="small text-muted">The Plaza Lodge</div>
                        <div className="small text-muted">Baguio City, Philippines</div>
                      </div>
                    </div>
                    <ul className="col-lg-8">
                      <li>
                        Prepare Sales Reports and Annual Sales &amp; Marketing Plans.
                      </li>
                      <li>
                        Create effective sales programs to increase brand awareness and positive perception.
                      </li>
                      <li>  
                        Assist Managing Director in budgeting and strategic marketing within approved plans.
                      </li>
                      <li>
                        Develop rates and deployment strategies through competitive data and demand analysis.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE 2 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">01/2021 – 04/2022</div>
                        <div className="small fw-bolder">Assistant Director of Sales &amp; Marketing</div>
                        <div className="small text-muted">The Plaza Lodge</div>
                        <div className="small text-muted">Baguio City, Philippines</div>
                      </div>
                    </div>
                    <ul className="col-lg-8">
                      <li>
                        Generated major accounts through face-to-face and telephone sales activities.
                      </li>
                      <li>
                        Established sales objectives, action plans, and targets for the sales team.
                      </li>
                      <li>  
                        Managed reactive and proactive group sales efforts to maximize revenue opportunities.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE 3 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">05/2018 – 12/2020</div>
                        <div className="small fw-bolder">Catering Sales Manager</div>
                        <div className="small text-muted">Holiday Inn</div>
                        <div className="small text-muted">Baguio City, Philippines</div>
                      </div>
                    </div>
                    <ul className="col-lg-8">
                      <li>
                        Traveled to promote the hotel and develop potential business generators.
                      </li>
                      <li>
                        Prepared collateral materials and educated planners on hotel procedures.
                      </li>
                      <li>  
                        Coordinated Banquet Event Orders, AV equipment, and billing specifications.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE 4 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">05/2017 – 05/2018</div>
                        <div className="small fw-bolder">Conventions Manager</div>
                        <div className="small text-muted">The Manor at Camp John Hay</div>
                        <div className="small text-muted">Baguio City, Philippines</div>
                      </div>
                    </div>
                    <ul className="col-lg-8">
                      <li>
                        Communicated with management regarding work schedules and client requirements.
                      </li>
                      <li>
                        Ensured events ran smoothly while managing budgets and staff training.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE 5 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">08/2015 – 06/2016</div>
                        <div className="small fw-bolder">Sales Manager</div>
                        <div className="small text-muted">Costa Pacifica</div>
                        <div className="small text-muted">Baler, Philippines</div>
                      </div>
                    </div>
                    <ul className="col-lg-8">
                      <li>
                        Managed full sales process for new prospects from initial contact to closure.
                      </li>
                      <li>
                        Reported business trends and performance metrics to Group Sales Manager.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE 6 */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">12/2011 – 08/2015</div>
                        <div className="small fw-bolder">Events Coordinator / Assistant</div>
                        <div className="small text-muted">The Manor at Camp John Hay</div>
                        <div className="small text-muted">Baguio City, Philippines</div>
                      </div>
                    </div>
                    <ul className="col-lg-8">
                      <li>
                        Overall, in-charge for groups from 30 to 2,000 persons.
                      </li>
                      <li>
                        Negotiated with suppliers and prepared timelines for multiple concurrent events.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-secondary fw-bolder mb-5">Education</h2>

              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">2008 – 2012</div>
                        <div className="mb-2">
                          <div className="small fw-bolder">University of the Cordilleras,</div>
                          <div className="small text-muted">Baguio City, Philippines</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Bachelor of Science</div>
                          <div className="small text-muted">Hotel and Restaurant Management</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      Earned a comprehensive degree focusing on hospitality operations, food service systems, and guest relations. 
                      Developed core leadership, financial management, and communication skills vital for successfully managing premium international hospitality establishments.
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-secondary fw-bolder mb-5">Skills &amp; Competencies</h2>

              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  {/* FIRST GROUP: STRATEGIC / COMMERCIAL SKILLS */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-briefcase"></i>
                      </div>
                      <h4 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">Strategic Expertise</span>
                      </h4>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Revenue Management
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Luxury Brand Marketing
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          B2B &amp; Corporate Sales
                        </div>
                      </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          OPEX &amp; Capital Budgeting
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Stakeholder Relations
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Digital Acquisition &amp; OTA
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECOND GROUP: OPERATIONAL SKILLS */}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-clipboard-data"></i>
                      </div>
                      <h4 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">Operational Execution</span>
                      </h4>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Guest Experience (CX)
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Luxury Brand Standards
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          MICE &amp; Event Planning
                        </div>
                      </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Competitive Benchmarking
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Public Relations &amp; Media
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Hospitality Analytics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive 50/50 Video Case Study Section */}
            <section ref={highlightsRef} id="portfolio-highlights" className="py-5">
              <h2 className="text-secondary fw-bolder mb-5">How I manage budgets</h2>

              <div className="container px-0">
                <div className="row g-5">
                  {/* LEFT COLUMN: Video Presentation */}
                  <div className="col-lg-6 d-flex flex-column">
                    <div className="shadow rounded-4 overflow-hidden bg-dark flex-grow-1 h-100 min-vh-25">
                      <iframe 
                        src="https://www.youtube.com/embed/jKI93UjPdxg"
                        title="Majesca Maclan | Director of Sales and Marketing - Executive Video Introduction" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-100 h-100 border-0"
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

                    {/* Re-contextualized Metrics */}
                    <div className="row g-4 mb-4">
                      <div className="col-sm-6 no-padding-small">
                        <div className="p-3 bg-light rounded-4 h-100">
                          <span className="h2 fw-bold main-color d-block mb-1">1.45x</span>
                          <h3 className="h6 fw-bold text-uppercase mb-1">Commercial Lift</h3>
                          <p className="text-muted small mb-0">
                            Outperformed legacy year-over-year targets by scaling high-margin corporate bookings.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 no-padding-small">
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
                        href="/project-description.pdf" 
                        download="Majesca_Maclan_Operational_Strategy.pdf"
                        className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
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
    </>
  );
};