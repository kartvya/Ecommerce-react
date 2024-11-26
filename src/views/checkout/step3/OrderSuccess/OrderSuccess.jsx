import React, { useState } from "react";
import "./OrderSuccess.css";

const OrderSuccess = ({show, onClose}) => {

  const handleClose = () => {
    onClose();
  };

  return (
    show && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Order Placed Successfully! 🎉</h2>
          <p>Thank you for your order. We are processing it now.</p>
          <button onClick={handleClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default OrderSuccess;
