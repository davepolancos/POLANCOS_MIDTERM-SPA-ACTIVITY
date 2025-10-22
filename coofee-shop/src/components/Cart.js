import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    setIsCheckoutOpen
  } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h5 className="mb-0">
            <i className="fas fa-shopping-cart me-2"></i>
            Shopping Cart ({getTotalItems()})
          </h5>
          <button 
            className="btn-close" 
            onClick={() => setIsCartOpen(false)}
            aria-label="Close"
          ></button>
        </div>
        
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="text-center py-4">
              <i className="fas fa-shopping-cart text-muted mb-3" style={{fontSize: '3rem'}}></i>
              <p className="text-muted">Your cart is empty</p>
              <p className="text-muted">Add some delicious items from our menu!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h6 className="item-name">{item.name}</h6>
                      <p className="item-price text-coffee">₱{(parseFloat(item.price.replace('₱', '').replace(',', '')) * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button 
                          className="btn btn-sm btn-outline-coffee"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="btn btn-sm btn-outline-coffee"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-footer">
                <div className="total-section">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Total:</h5>
                    <h5 className="mb-0 text-coffee">₱{getTotalPrice().toFixed(2)}</h5>
                  </div>
                  <button 
                    className="btn btn-coffee w-100 btn-lg"
                    onClick={handleCheckout}
                  >
                    <i className="fas fa-credit-card me-2"></i>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
