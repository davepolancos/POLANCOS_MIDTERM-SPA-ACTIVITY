import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid">
      <section className="section-padding" style={{marginTop: '76px', minHeight: '70vh'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-5">
                <i className="fas fa-coffee text-coffee" style={{fontSize: '8rem', opacity: 0.3}}></i>
              </div>
              
              <h1 className="display-1 fw-bold text-coffee mb-4">404</h1>
              <h2 className="h3 mb-4">Oops! Page Not Found</h2>
              <p className="lead mb-5">
                The page you're looking for seems to have wandered off like a lost coffee bean. 
                Don't worry, we'll help you find your way back to our delicious coffee!
              </p>
              
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/" className="btn btn-coffee btn-lg">
                  <i className="fas fa-home me-2"></i>
                  Go Home
                </Link>
                <button onClick={goBack} className="btn btn-outline-coffee btn-lg">
                  <i className="fas fa-arrow-left me-2"></i>
                  Go Back
                </button>
                <Link to="/menu" className="btn btn-outline-coffee btn-lg">
                  <i className="fas fa-utensils me-2"></i>
                  Browse Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="bg-light section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h3 className="text-coffee mb-3">Maybe you were looking for:</h3>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-home text-coffee mb-3" style={{fontSize: '2rem'}}></i>
                  <h5 className="card-title">Home</h5>
                  <p className="card-text text-muted">Return to our main page</p>
                  <Link to="/" className="btn btn-outline-coffee btn-sm">Visit Home</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-utensils text-coffee mb-3" style={{fontSize: '2rem'}}></i>
                  <h5 className="card-title">Menu</h5>
                  <p className="card-text text-muted">Browse our delicious menu</p>
                  <Link to="/menu" className="btn btn-outline-coffee btn-sm">View Menu</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-info-circle text-coffee mb-3" style={{fontSize: '2rem'}}></i>
                  <h5 className="card-title">About</h5>
                  <p className="card-text text-muted">Learn more about us</p>
                  <Link to="/about" className="btn btn-outline-coffee btn-sm">About Us</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-envelope text-coffee mb-3" style={{fontSize: '2rem'}}></i>
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text text-muted">Get in touch with us</p>
                  <Link to="/contact" className="btn btn-outline-coffee btn-sm">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Coffee Facts */}
      <section className="coffee-bg text-white section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h3 className="mb-4">While you're here, did you know?</h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <i className="fas fa-lightbulb mb-3" style={{fontSize: '2rem'}}></i>
                  <h5>Coffee Facts</h5>
                  <p className="mb-0">
                    Coffee is the second most traded commodity in the world, after oil!
                  </p>
                </div>
                <div className="col-md-4">
                  <i className="fas fa-heart mb-3" style={{fontSize: '2rem'}}></i>
                  <h5>Health Benefits</h5>
                  <p className="mb-0">
                    Moderate coffee consumption can help improve cognitive function and mood.
                  </p>
                </div>
                <div className="col-md-4">
                  <i className="fas fa-globe mb-3" style={{fontSize: '2rem'}}></i>
                  <h5>Global Love</h5>
                  <p className="mb-0">
                    Over 2.25 billion cups of coffee are consumed worldwide every day!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
