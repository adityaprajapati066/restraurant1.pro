import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
         <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">

        <div className="row">

          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h5>My Restaurant</h5>
            <p>
              Delicious food made with love and fresh ingredients.
              We serve quality food at affordable prices.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className='text-decoration-none' to="/">Home</Link></li>
              <li><Link className='text-decoration-none' to="/about">About</Link></li>
              <li><Link className='text-decoration-none' to="/menu">Menu</Link></li>
              <li><Link className='text-decoration-none' to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: pihu@hotel.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Ahmedabad, India</p>
          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 My Restaurant. All Rights Reserved.
        </p>

      </div>
    </footer>
      
    </div>
  )
}

export default Footer
