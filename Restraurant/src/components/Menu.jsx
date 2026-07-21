import React, { useEffect, useState } from "react";
import menuDate from "../Data/menuDate";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";  

function Menu() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase()),
  );

  const addCart = (food) => {
    const exist = cart.find((item) => item._id === food._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
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
      <div className="flex justify-between">
        <h2 className="text-center fw-bold mb-4 btn btn-outline-light text-black" title="Menu"
        >
          Our Menu
        </h2>
        <div className="relative mt-5">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"     
        />
          <input
            type="text"
            className="w-50% rounded-full shadow-lg py-2 pl-12 pr-5 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Search Your Food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <button
        className="btn btn-success mb-4"
        onClick={()=>{
          if(cart.length === 0){
            alert("Please add Order");
            return;
          }
          navigate("/cart", {state:cart});
        }}
      >
        Go to Cart ({cart.length})
      </button>

      <div className="row">
       {filteredFoods.map((food) => {
        const cartItem = cart.find((item) => item._id === food._id);

        return(
          <div key={food._id} className="col-md-4 md-4 mt-3">
            <div className="card h-100 shadow-lg border-0">
              <img src={food.image} className="card-img-top" alt={food.name} />

              <div className="card-body text-center">
                <h5>{food.name}</h5>
                <p>₹{food.price}</p>
              </div>
               
               <button className="btn btn-warning" onClick={()=> addCart(food)}>Order Now</button>

               {cart.find((item) => item._id === food._id)&& (
                <div className="mt-2 text-center">
                  <button className="btn btn-danger" onClick={()=> decreaseQty(food._id)}>-</button>

                  <span>{cart.find((item)=> item._id === food._id)?.quantity}</span>

                  <button className="btn btn-danger" onClick={()=>increaseQty(food._id)}>+</button>
                </div>
               )}   
            </div>

          </div>
        )
       })}
      </div>
    </section>
  );
}

export default Menu;
