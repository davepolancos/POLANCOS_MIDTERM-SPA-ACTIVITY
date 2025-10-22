import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems,
    getTotalPrice,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      clearCart();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsCheckoutOpen(false);
        setFormData({ name: '', address: '', paymentMethod: '' });
      }, 3000);
    }, 2000);
  };

  const handleClose = () => {
    if (!isProcessing) {
      setIsCheckoutOpen(false);
      setFormData({ name: '', address: '', paymentMethod: '' });
    }
  };

  if (!isCheckoutOpen) return null;

  return (
    <>
      {/* Success Toast */}
      {showSuccess && (
        <div className="toast-container position-fixed top-0 end-0 p-3">
          <div className="toast show" role="alert">
            <div className="toast-header bg-success text-white">
              <i className="fas fa-check-circle me-2"></i>
              <strong className="me-auto">Order Successful!</strong>
            </div>
            <div className="toast-body">
              <p className="mb-0">Thank you for your order! Your coffee will be ready soon.</p>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-coffee">
                <i className="fas fa-credit-card me-2"></i>
                Checkout
              </h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={handleClose}
                disabled={isProcessing}
              ></button>
            </div>
            
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="text-coffee mb-3">Order Details</h6>
                    <div className="order-summary">
                      {cartItems.map((item) => (
                        <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                          <span>{item.name} x {item.quantity}</span>
                          <span className="text-coffee">₱{(parseFloat(item.price.replace('₱', '').replace(',', '')) * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                      <hr />
                      <div className="d-flex justify-content-between align-items-center">
                        <strong>Total:</strong>
                        <strong className="text-coffee">₱{getTotalPrice().toFixed(2)}</strong>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <h6 className="text-coffee mb-3">Customer Information</h6>
                    
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isProcessing}
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Delivery Address *</label>
                      <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        disabled={isProcessing}
                        placeholder="Enter your complete address"
                      ></textarea>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="paymentMethod" className="form-label">Payment Method *</label>
                      <select
                        className="form-select"
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                        disabled={isProcessing}
                      >
                        <option value="">Select payment method</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="gcash">GCash</option>
                        <option value="paymaya">PayMaya</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={handleClose}
                    disabled={isProcessing}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-coffee"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-check me-2"></i>
                        Proceed to Checkout
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
