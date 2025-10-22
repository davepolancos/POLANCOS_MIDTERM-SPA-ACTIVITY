import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title">Welcome to 31 by Gentry Timepieces</h1>
              <p className="hero-subtitle">
                Experience the finest coffee crafted with passion and tradition
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/menu" className="btn btn-coffee btn-lg">
                  <i className="fas fa-utensils me-2"></i>View Menu
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-info-circle me-2"></i>Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="text-coffee mb-3">Why Choose 31 by Gentry Timepieces?</h2>
              <p className="lead">We bring you the best coffee experience with premium quality and exceptional service</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-coffee text-coffee mb-3" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title">Premium Coffee</h5>
                  <p className="card-text">
                    We source the finest coffee beans from around the world, 
                    carefully roasted to perfection for the ultimate taste experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-clock text-coffee mb-3" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title">Fresh Daily</h5>
                  <p className="card-text">
                    Our coffee is roasted fresh daily to ensure maximum flavor 
                    and aroma in every cup we serve.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-heart text-coffee mb-3" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title">Made with Love</h5>
                  <p className="card-text">
                    Every cup is crafted with passion and attention to detail, 
                    creating a warm and welcoming atmosphere for our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="coffee-bg text-white section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Ready to Experience Great Coffee?</h2>
              <p className="lead mb-4">
                Visit us today and discover why 31 by Gentry Timepieces is the talk of the town!
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/menu" className="btn btn-light btn-lg">
                  <i className="fas fa-utensils me-2"></i>Order Now
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-map-marker-alt me-2"></i>Find Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
