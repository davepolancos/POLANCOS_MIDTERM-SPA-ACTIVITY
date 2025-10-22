import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <section className="coffee-bg text-white section-padding" style={{marginTop: '76px'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead">
                We'd love to hear from you! Get in touch with us today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-4">
              <h2 className="text-coffee mb-4">Get in Touch</h2>
              <div className="mb-4">
                <h5 className="text-coffee mb-3">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Visit Us
                </h5>
                <p className="mb-0">
                  123 Coffee Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-coffee mb-3">
                  <i className="fas fa-phone me-2"></i>
                  Call Us
                </h5>
                <p className="mb-0">
                  Phone: (555) 123-4567<br />
                  Fax: (555) 123-4568
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-coffee mb-3">
                  <i className="fas fa-envelope me-2"></i>
                  Email Us
                </h5>
                <p className="mb-0">
                  info@31bygentry.com<br />
                  orders@31bygentry.com
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-coffee mb-3">
                  <i className="fas fa-clock me-2"></i>
                  Hours
                </h5>
                <p className="mb-0">
                  Monday - Friday: 6:00 AM - 8:00 PM<br />
                  Saturday: 7:00 AM - 9:00 PM<br />
                  Sunday: 8:00 AM - 6:00 PM
                </p>
              </div>

              <div className="social-icons">
                <h5 className="text-coffee mb-3">Follow Us</h5>
                <button className="btn btn-link me-3 p-0" style={{color: 'white'}}>
                  <i className="fab fa-facebook"></i>
                </button>
                <button className="btn btn-link me-3 p-0" style={{color: 'white'}}>
                  <i className="fab fa-instagram"></i>
                </button>
                <button className="btn btn-link me-3 p-0" style={{color: 'white'}}>
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="btn btn-link p-0" style={{color: 'white'}}>
                  <i className="fab fa-youtube"></i>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h3 className="text-coffee mb-4">Send us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">Subject *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message *</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-coffee btn-lg">
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-light section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="text-coffee mb-3">Find Us</h2>
              <p className="lead">We're located in the heart of downtown</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow">
                <div className="card-body p-0">
                  <div className="bg-coffee text-white text-center p-5">
                    <i className="fas fa-map-marked-alt" style={{fontSize: '4rem'}}></i>
                    <h4 className="mt-3">Interactive Map</h4>
                    <p className="mb-0">
                      Click here to view our location on Google Maps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
