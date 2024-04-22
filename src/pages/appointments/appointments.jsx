import React from "react";
import { useLocation } from "react-router-dom";
import "./Appointments.css";

export const Appointments = () => {
  const location = useLocation();
  const { totalAmount, cartItems } = location.state || { totalAmount: 0, cartItems: {} };

  return (
    <div className="appointments-container">
      <h1 id="headerin">Appointments</h1>
      <h2 id= "subheaderin">Total Amount: ₹{totalAmount}</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cartItems).map(([productId, details]) => (
            <tr key={productId}>
              <td>{details.name}</td>
              <td>{details.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
