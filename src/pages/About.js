import React from 'react';

const About = () => {
  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <section className="coffee-bg text-white section-padding" style={{marginTop: '76px'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">About 31 by Gentry Timepieces</h1>
              <p className="lead">
                A journey of passion, tradition, and exceptional coffee since 2020
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="text-coffee mb-4">Our Story</h2>
              <p className="lead mb-4">
                Founded in 2020, 31 by Gentry Timepieces began as a small family business with a simple mission: 
                to bring the world's finest coffee to our local community.
              </p>
              <p className="mb-4">
                What started as a passion project has grown into a beloved coffee destination, 
                where every cup tells a story of dedication, quality, and the love for exceptional coffee.
              </p>
              <p>
                We believe that great coffee brings people together, creates moments of joy, 
                and fuels the dreams of our community. That's why we're committed to sourcing 
                only the best beans and crafting each drink with care and precision.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <i className="fas fa-coffee text-coffee" style={{fontSize: '8rem', opacity: 0.3}}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-light section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="text-coffee mb-3">Our Mission & Values</h2>
              <p className="lead">What drives us every day</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-bullseye text-coffee mb-3" style={{fontSize: '3rem'}}></i>
                <h4 className="text-coffee mb-3">Our Mission</h4>
                <p>
                  To provide exceptional coffee experiences that bring joy, 
                  community, and quality to every customer we serve.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-star text-coffee mb-3" style={{fontSize: '3rem'}}></i>
                <h4 className="text-coffee mb-3">Quality First</h4>
                <p>
                  We never compromise on quality. Every bean is carefully selected 
                  and every cup is crafted to perfection.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-users text-coffee mb-3" style={{fontSize: '3rem'}}></i>
                <h4 className="text-coffee mb-3">Community Focus</h4>
                <p>
                  We're more than just a coffee shop - we're a gathering place 
                  for friends, families, and the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="text-coffee mb-3">Meet Our Team</h2>
              <p className="lead">The passionate people behind 31 by Gentry Timepieces</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-user-circle text-coffee" style={{fontSize: '4rem'}}></i>
                  </div>
                  <h5 className="card-title">Mathew Saymo</h5>
                  <p className="text-muted">Founder & Head Barista</p>
                  <p className="card-text">
                    With over 10 years of experience in coffee, Maria brings 
                    passion and expertise to every cup we serve.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-user-circle text-coffee" style={{fontSize: '4rem'}}></i>
                  </div>
                  <h5 className="card-title">Frensua Yutrago</h5>
                  <p className="text-muted">Coffee Roaster</p>
                  <p className="card-text">
                    Carlos ensures every bean is perfectly roasted to bring out 
                    the unique flavors and aromas of our coffee.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-user-circle text-coffee" style={{fontSize: '4rem'}}></i>
                  </div>
                  <h5 className="card-title">Cedric Blanco</h5>
                  <p className="text-muted">Customer Experience Manager</p>
                  <p className="card-text">
                    Ana makes sure every customer feels welcome and leaves 
                    with a smile and a great coffee experience.
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

export default About;
