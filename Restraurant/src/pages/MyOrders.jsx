import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log("orders data:", data); // check this in console
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteOrder = async (id) => {
    try {
      await fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      });
      setOrders(orders.filter((order) => order._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // Handles item.price, item.food.price, or item.foodId.price
  const getItemName = (item) =>
    item.name || item.food?.name || item.foodId?.name || "Unknown item";

  const getItemPrice = (item) =>
    Number(item.price ?? item.food?.price ?? item.foodId?.price ?? 0);

  const getOrderTotal = (order) =>
    order.items && order.items.length > 0
      ? order.items.reduce((sum, item) => sum + getItemPrice(item), 0)
      : 0;

  return (
    <div className="container mt-4">

      <h2 className="text-center fw-bold mb-4">My Order</h2>

      <button className="btn btn-warning btn-lg rounded py-2 px-2 shadow-lg border-0 text-amber-900 mb-3" onClick={() => navigate("/")}>GO TO HOME</button>

      {orders.length === 0 ? (
        <h5 className="text-center">No orders yet</h5>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="card p-3 mb-3 shadow">
            <h5>Order ID: {order._id}</h5>

            {order.items && order.items.length > 0 ? (
              order.items.map((item, idx) => (
                <div key={item._id || idx}>
                  <p>
                    {getItemName(item)} - ₹{getItemPrice(item)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-muted">No items in this order</p>
            )}

            <h5>Total Price: ₹{order.total || getOrderTotal(order)}</h5>

            <button
              className="btn btn-danger mt-2"
              onClick={() => deleteOrder(order._id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
