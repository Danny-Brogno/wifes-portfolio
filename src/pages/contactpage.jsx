import React, { useState, useEffect } from 'react';

export const ContactPage = () => {
  useEffect(() => {
    document.title = "Majesca Maclan | Contact page";
  }, []);

  // Track raw input values inside local state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Modal Display State Management
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ 
    title: '', 
    message: '', 
    isSuccess: true 
  });

  // Update form values as user types
  const handleChange = (e) => {
    const targetKey = e.target.id || e.target.name;
    setFormData({
      ...formData,
      [targetKey]: e.target.value
    });
  };

  // Validation rules:
  // 1. Phone numbers: allow optional '+' prefix followed by 7-15 digits
  const cleanedPhone = formData.phone.trim().replace(/\s+/g, '');
  const isPhoneValid = /^\+?[0-9]{7,15}$/.test(cleanedPhone);
  
  // 2. Message: minimum 20 characters
  const isMessageValid = formData.message.trim().length >= 20;
  
  // 3. Name & Email validation
  const isNameValid = formData.name.trim() !== '';
  const isEmailValid = formData.email.trim() !== '' && formData.email.includes('@');

  // Master validation state
  const isFormValid = isNameValid && isEmailValid && isPhoneValid && isMessageValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setModalConfig({
        title: 'Validation Error',
        message: 'Please check your entries. Make sure your phone number contains 7–15 digits and your message is at least 20 characters.',
        isSuccess: false
      });
      setShowModal(true);
      return;
    }

    try {
      // Azure Static Web Apps Route for managed API Functions: /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: cleanedPhone
        })
      });

      if (response.ok) {
        setModalConfig({
          title: 'Success!',
          message: 'Form submission successful! Message sent to Majesca.',
          isSuccess: true
        });
        setShowModal(true);
        // Clear form values
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Azure API return non-200 code');
      }
    } catch (err) {
      setModalConfig({
        title: 'Submission Error',
        message: 'Unable to process your request at this moment. Please try again later or contact us directly via email.',
        isSuccess: false
      });
      setShowModal(true);
    }
  };

  return (
    <section className="contact-page py-5">
      {/* ==================== POP-UP MODAL OVERLAY ==================== */}
      {showModal && (
        <div className="custom-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="custom-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className={`custom-modal-header ${modalConfig.isSuccess ? 'bg-success-theme' : 'bg-danger-theme'}`}>
              <h4 className="m-0 fw-bold">{modalConfig.title}</h4>
              <button 
                type="button" 
                className="custom-modal-close" 
                onClick={() => setShowModal(false)} 
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="custom-modal-body">
              <p className="fs-5 mb-0">{modalConfig.message}</p>
            </div>
            <div className="custom-modal-footer">
              <button 
                type="button" 
                className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" 
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container px-5">
        <div className="bg-light rounded-4">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i className="bi bi-envelope-at"></i>
            </div>
            <h1 className="fw-bolder text-gradient">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
          </div>
          
          {/* Contact Information Section */}
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-lg-8 col-xl-8">
              <div className="d-flex flex-column align-items-center gap-4">
              
                {/* Landline/Mobile Block */}
                <div className="d-flex flex-column align-items-center">
                  <p className="mb-2 fs-5">Call me on my mobile:</p>
                  <a href="tel:+447849619283" className="text-decoration-none text-reset">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-telephone-fill fs-3"></i>
                      <span className="fs-4 fw-normal">+44 784 9619 283</span>
                    </div>
                  </a>
                </div>

                {/* WhatsApp Block */}
                <div className="d-flex flex-column align-items-center mt-3">
                  <p className="mb-2 fs-5">Text me on WhatsApp:</p>
                  <a href="https://wa.me/447849619283" target="_blank" rel="noreferrer" className="text-decoration-none text-reset">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-whatsapp fs-3"></i>
                      <span className="fs-4 fw-normal">+44 784 9619 283</span>
                    </div>
                  </a>
                </div>

                {/* Email Block */}
                <div className="d-flex flex-column align-items-center mt-3">
                  <p className="mb-2 fs-5">Email me at the following email address:</p>
                  <a href="mailto:info@majescamaclan.com" className="text-decoration-none text-reset">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-envelope second fs-2"></i>
                      <span className="fs-4 fw-normal">info@majescamaclan.com</span>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
          
          <div className="row gx-5 justify-content-center mt-5">
            <div className="col-lg-8 col-xl-8">

              <div className="text-center mb-5 mt-5">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                  <i className="bi bi-chat-dots"></i>
                </div>
                <h1 className="fw-bolder text-gradient">Or send me a message</h1>
                <p className="lead fw-normal text-muted mb-0">By filling up the form</p>
              </div>
              
              <form id="contactForm" onSubmit={handleSubmit}>
                
                {/* Full Name Input */}
                <div className="form-floating mb-3">
                  <input 
                    className="form-control" 
                    id="name" 
                    name="name"
                    type="text" 
                    placeholder="Enter your name..." 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <label htmlFor="name">Full name</label>
                </div>

                {/* Email Input */}
                <div className="form-floating mb-3">
                  <input 
                    className="form-control" 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                  <label htmlFor="email">Email address</label>
                </div>

                {/* Phone Input with constraint details */}
                <div className="form-floating mb-1">
                  <input 
                    className="form-control" 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="(123) 456-7890" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                  <label htmlFor="phone">Phone number</label>
                </div>
                <div className="small text-muted mb-3 px-1">
                  * Must contain only digits (7 to 15 characters, no spaces or hyphens).
                </div>

                {/* Message Input with minimum length feedback details */}
                <div className="form-floating mb-1">
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    placeholder="Enter your message here..." 
                    style={{ height: '10rem' }} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <div className="small text-muted mb-4 px-1">
                  * Please enter a detailed message (minimum 20 characters required). 
                  Current count: {formData.message.length}
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button 
                    className={`btn btn-primary btn-lg ${!isFormValid ? 'disabled' : ''}`} 
                    id="submitButton" 
                    type="submit"
                    disabled={!isFormValid}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};