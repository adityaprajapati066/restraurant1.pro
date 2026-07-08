import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div>
        <section className="container my-5">
      <div className="row align-items-center">
        
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">
            Delicious Food
          </h1>

          <p className="lead">
            Fresh ingredients, tasty meals, and fast service.
            Welcome to our restaurant.
          </p>

          <button className="btn btn-warning btn-lg" 
           onClick={()=>navigate("/menu")}
           >
            Order Now
          </button>
        </div>

        
        <div className="col-lg-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
            className="img-fluid rounded"
            alt="Pizza"
          />
        </div>

      </div>
    </section>
      
    </div>
  )
}

export default Hero
