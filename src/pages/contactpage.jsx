import React, { useState, useEffect } from 'react';

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact page";
  }, []);

  // Track the raw input values inside a local state object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // 'success' or 'error'

  // Update specific properties instantly as the user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });

    // If an error is showing and the user changes or clears fields, remove the alert banner
    if (status) {
      setStatus(null);
    }
  };

  // Comprehensive validation requirements check logic
  // 1. Phone numbers must contain only digits and be between 7 and 15 characters long
  const isPhoneValid = /^[0-9]{7,15}$/.test(formData.phone.trim());
  // 2. Message block must be at least 20 characters long
  const isMessageValid = formData.message.trim().length >= 20;
  // 3. Name and Email cannot be empty spaces
  const isNameValid = formData.name.trim() !== '';
  const isEmailValid = formData.email.trim() !== '' && formData.email.includes('@');

  // Master conditional layout check tracking rule
  const isFormValid = isNameValid && isEmailValid && isPhoneValid && isMessageValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Safety guard step to ensure form doesn't send broken metrics manually
    if (!isFormValid) {
      setStatus('error');
      return;
    }

    try {
      // Connects to your live API Gateway endpoint
      const response = await fetch('https://xyz123.execute-api.amazonaws.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear layout values
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-page py-5">
      <div className="container px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form id="contactForm" onSubmit={handleSubmit}>
                
                {/* Full Name Input */}
                <div className="form-floating mb-3">
                  <input 
                    className="form-control" 
                    id="name" 
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

                {/* Status Messages Banner Elements */}
                {status === 'success' && (
                  <div className="text-center mb-3 text-success fw-bolder">
                    Form submission successful! Message sent to Majesca.
                  </div>
                )}

                {/* FIX FOR BUG N1: Informative context message instead of system breakdown warning */}
                {status === 'error' && (
                  <div className="text-center text-danger mb-3 fw-bolder">
                    Please check your entries and make sure all constraints match formatting rules.
                  </div>
                )}

                {/* Button dynamically evaluates validation properties to apply colors */}
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