import React from 'react'

const AdminMessage = () => {
  return (
    <div className='container mt-5'>
        <h2>Admin Message</h2>
      <div className="card p-3 mt-3">
        <h5>Customer Message</h5>
        <p>I want to know about my order.</p>
      </div>

      <div className="card p-3 mt-3">
        <h5>Customer Message</h5>
        <p>Is pizza available today?</p>
      </div>

            <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h1>
                Delicious Food
                <span> Delivered Fast</span>
              </h1>

              <p>
                Fresh food, amazing taste and unforgettable experience.
              </p>

              
            </div>


            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                className="rounded-full mt-2 shadow-lg"
                alt="food"
              />
            </div>

          </div>
        </div>
      </section>


      
      <section className="container my-5">

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card food-card">
              <div className="card-body">
                <h4>🍕 Pizza</h4>
                <p>Hot and fresh pizza.</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card food-card">
              <div className="card-body">
                <h4>🍔 Burger</h4>
                <p>Juicy tasty burgers.</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card food-card">
              <div className="card-body">
                <h4>🍝 Pasta</h4>
                <p>Italian style pasta.</p>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}

export default AdminMessage
