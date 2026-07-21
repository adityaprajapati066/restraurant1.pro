import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();

  const [cart, setCart] = useState(location.state || []);

  const deleteitem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price)* item.quantity,0);

  return (
    <div className="container">
      <h1 className="px-2 py-2">Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="card p-3 mb-2">
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}{item.name}</p>
          <button
            className="btn btn-primary"
            onClick={() =>
              navigate("/payment", {
                state: {
                  amount: totalPrice,
                  cart: cart,
                },
              })
            }
          >
            Pay ₹{totalPrice}
          </button>

          

          <button
            className="btn btn-danger w-50  d-block mx-auto mt-1"
            onClick={() => deleteitem(item._id)}
          >
            Delete
          </button>
        </div>
      ))}
      
      <button className="btn btn-danger me-3 shadow-xl/50" onClick={()=> navigate("/menu")}>Back to menu</button>

      <button
        className="btn btn-primary shadow-xl/50"
        
        onClick={() =>
          navigate("/payment", {
            state: {
              amount: totalPrice,
              cart: cart,
            },
          })
        }
      >
        Pay ₹{totalPrice}
      </button>
      
    </div>
  );
}

export default Cart;
