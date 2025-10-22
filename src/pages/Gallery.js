import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/image/cozy.jpg',
      title: 'Cozy Interior',
      description: 'Our warm and welcoming coffee shop interior with comfortable seating'
    },
    {
      id: 2,
      src: '/image/beans.jpg',
      title: 'Fresh Coffee Beans',
      description: 'Premium coffee beans sourced from around the world'
    },
    {
      id: 3,
      src: '/image/barista.jpg',
      title: 'Expert Barista',
      description: 'Our skilled barista crafting the perfect cup'
    },
    {
      id: 4,
      src: '/image/pastries.jpg',
      title: 'Fresh Pastries',
      description: 'Delicious pastries baked fresh daily'
    },
    {
      id: 5,
      src: '/image/art.jpg',
      title: 'Latte Art',
      description: 'Beautiful latte art created by our talented baristas'
    },
    {
      id: 6,
      src: '/image/outdoor.jpg',
      title: 'Outdoor Seating',
      description: 'Enjoy your coffee in our beautiful outdoor area'
    },
    {
      id: 7,
      src: '/image/equipment.jpg',
      title: 'Professional Equipment',
      description: 'State-of-the-art coffee brewing equipment'
    },
    {
      id: 8,
      src: '/image/happy.jpg',
      title: 'Happy Customers',
      description: 'Our satisfied customers enjoying their coffee'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <section className="coffee-bg text-white section-padding" style={{marginTop: '76px'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Gallery</h1>
              <p className="lead">
                Take a visual journey through our coffee shop and see what makes us special
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6">
                <div 
                  className="card border-0 shadow-sm gallery-item"
                  style={{cursor: 'pointer'}}
                  onClick={() => openModal(image)}
                >
                  <img 
                    src={image.src} 
                    className="card-img-top" 
                    alt={image.title}
                    style={{height: '250px', objectFit: 'cover'}}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-coffee">{image.title}</h5>
                    <p className="card-text text-muted">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="modal show d-block" 
          tabIndex="-1" 
          style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="modal-title text-coffee">{selectedImage.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body p-0">
                <img 
                  src={selectedImage.src} 
                  className="img-fluid w-100" 
                  alt={selectedImage.title}
                />
              </div>
              <div className="modal-footer">
                <p className="text-muted mb-0">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="coffee-bg text-white section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Experience It Yourself</h2>
              <p className="lead mb-4">
                Don't just look at the pictures - come and experience the warmth 
                and quality of 31 by Gentry Timepieces in person!
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="/menu" className="btn btn-light btn-lg">
                  <i className="fas fa-utensils me-2"></i>View Menu
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-map-marker-alt me-2"></i>Visit Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
