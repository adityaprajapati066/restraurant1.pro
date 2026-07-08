import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  

  const [cart, setCart] = useState(location.state || []);

  const deleteitem = (id) => {
    const updatedCart = cart.filter(
        (item) => item._id !== id
    );
    setCart(updatedCart); 
  }

  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price),0);

  return (
    <div className="container">
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="card p-3 mb-2">
          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>
          <button
            className="btn btn-success"
            onClick={() => navigate("/order", { state: cart })}
          >
            Confirm Order
          </button>

          <button className="btn btn-danger w-50  d-block mx-auto mt-1" onClick={()=> deleteitem(item._id)}>Delete</button>

         
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>
    </div>
  );
}

export default Cart;
