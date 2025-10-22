import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const { addToCart } = useCart();

  const menuItems = {
    coffee: [
      { 
        id: 'coffee-1', 
        name: 'Espresso', 
        price: '₱135.00', 
        description: 'Rich, full-bodied coffee with a perfect crema',
        image: '/image/espresso.jpg'
      },
      { 
        id: 'coffee-2', 
        name: 'Americano', 
        price: '₱140.00', 
        description: 'Espresso with hot water for a smooth, clean taste',
        image: '/image/americano.jpg'
      },
      { 
        id: 'coffee-3', 
        name: 'Cappuccino', 
        price: '₱150.00', 
        description: 'Espresso with steamed milk and foam',
        image: '/image/cappuccino.jpg'
      },
      { 
        id: 'coffee-4', 
        name: 'Latte', 
        price: '₱155.00', 
        description: 'Espresso with steamed milk and a light layer of foam',
        image: '/image/latte.jpg'
      },
      { 
        id: 'coffee-5', 
        name: 'Mocha', 
        price: '₱160.00', 
        description: 'Espresso with chocolate and steamed milk',
        image: '/image/mocha.jpg'
      },
      { 
        id: 'coffee-6', 
        name: 'Macchiato', 
        price: '₱165.00', 
        description: 'Espresso with a dollop of foam',
        image: '/image/macchiato.jpg'
      }
    ]
  };

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: 'fas fa-coffee' }
  ];

  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <section className="coffee-bg text-white section-padding" style={{marginTop: '76px'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Our Menu</h1>
              <p className="lead">
                Discover our carefully crafted selection of coffee, pastries, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center mb-5">
                <div className="btn-group" role="group">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`btn ${activeCategory === category.id ? 'btn-coffee' : 'btn-outline-coffee'}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <i className={`${category.icon} me-2`}></i>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="row g-4">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="col-lg-6">
                <div className="card menu-item h-100 border-0 shadow-sm">
                  <img 
                    src={item.image} 
                    className="card-img-top" 
                    alt={item.name}
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title text-coffee mb-0">{item.name}</h5>
                      <span className="text-coffee fw-bold fs-5">{item.price}</span>
                    </div>
                    <p className="card-text text-muted mb-3">{item.description}</p>
                    <button 
                      className="btn btn-coffee w-100"
                      onClick={() => addToCart(item)}
                    >
                      <i className="fas fa-plus me-2"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offers */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card bg-coffee text-white">
                <div className="card-body text-center p-4">
                  <h4 className="card-title mb-3">
                    <i className="fas fa-gift me-2"></i>
                    Special Offers
                  </h4>
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Morning Special</h6>
                      <p className="mb-0">Any coffee + pastry for ₱200.00</p>
                    </div>
                    <div className="col-md-4">
                      <h6>Lunch Combo</h6>
                      <p className="mb-0">Sandwich + drink for ₱180.00</p>
                    </div>
                    <div className="col-md-4">
                      <h6>Happy Hour</h6>
                      <p className="mb-0">20% off all beverages 3-5 PM</p>
                    </div>
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

export default Menu;
