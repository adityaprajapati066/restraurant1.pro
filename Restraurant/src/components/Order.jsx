import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Order() {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state || [];
  console.log(cart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>No order found</h2>

        <button className="btn btn-primary" onClick={() => navigate("/menu")}>
          Go Back Menu
        </button>
      </div>
    );
  }

  const confirmOrder = async () => {
    const res = await fetch("http://localhost:5000/orders", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        items: cart,
        total: totalPrice,
      }),
    });

    const data = await res.json();

    console.log(data);

    alert("Order Successful");

    navigate("/orders");
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="fw-bold">Confirm Order</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="card p-3 mx-auto mt-3"
          style={{ width: "300px" }}
        >
          <img src={item.image} width="100%" alt={item.name} />

          <h4>{item.name}</h4>

          <p>₹{item.price}</p>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>

      <button className="btn btn-success" onClick={confirmOrder}>
        Confirm Order
      </button>

      
    </div>
  );
}

export default Order;
