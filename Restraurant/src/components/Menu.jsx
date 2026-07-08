import React, { useEffect, useState } from "react";
import menuDate from "../Data/menuDate";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const addCart = (food) => {
    setCart([...cart, food]);
    alert(`${food.name} added to cart`);
  };

  const getMenu = () => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setFoods(data))

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenu();
  }, []);

  const deleteFood = async (id) => {
    try {
      await fetch(`http://localhost:5000/menu/${id}`, {
        method: "DELETE",
      });

      getMenu();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-4">Our Menu</h2>

      <button
        className="btn btn-success mb-4"
        onClick={() => navigate("/cart", { state: cart })}
      >
        Go to Cart ({cart.length})
      </button>

      <div className="row">
        {foods.map((food) => (
          <div key={food._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg border-0">
              <img src={food.image} className="card-img-top" alt={food.name} />

              <div className="card-body text-center">
                <h5>{food.name}</h5>

                <p>₹{food.price}</p>

                <button
                  className="btn btn-warning w-100"
                  onClick={() => addCart(food)}
                >
                  Order Now
                </button>

                <button
                  className="btn btn-danger mt-2"
                  onClick={() => deleteFood(food._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
