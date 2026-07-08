import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  return (
    <div>
      <section className="container my-5">
      <div className="row align-items-center">

        {/* Image Side */}
        <div className="col-lg-6 text-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid rounded"
            alt="Restaurant"
          />
        </div>

        {/* Text Side */}
        <div className="col-lg-6">
          <h2 className="fw-bold">About Our Restaurant</h2>

          <p className="lead">
            We serve fresh, delicious and healthy food made with love.
            Our chefs use high-quality ingredients to give you the best taste experience.
          </p>

          <p>
            We started in 2020 and now we are serving hundreds of happy customers every day.
          </p>

          <button className="btn btn-success" onClick={()=> navigate("/about-details")}>
            Learn More
          </button>
        </div>

      </div>
    </section>
    </div>
  )
}

export default About
