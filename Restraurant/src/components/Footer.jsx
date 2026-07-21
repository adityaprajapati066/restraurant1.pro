import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css";
const Footer = () => {
    
  const handleClick = () => {
    window.scrollTo(0,0);
  }
  return (
    <div>
         <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">

        <div className="row">


          <div className="col-md-4 mb-3">
            <h5>My Restaurant</h5>
            <p>
              Delicious food made with love and fresh ingredients.
              We serve quality food at affordable prices.
            </p>
            <div>
              <button className="btn btn-outline-light h-8 rounded-full me-2">
                f
              </button>

              <button className="btn btn-outline-light btn-sm rounded-full me-2">
                📷
              </button>

              <button className="btn btn-outline-light btn-sm rounded-full">
                🟢
              </button>
            </div>
            
          </div>

   
          <div className="col-md-4 mb-3">
            <h5 className='ml-25'>Quick Links</h5>
            <ul className="footer-text">
              <li><Link className="footer-link" to="/"  onClick={handleClick}>Home</Link></li>
              <li><Link className='footer-link' to="/about" onClick={handleClick} >About</Link></li>
              <li><Link className='footer-link' to="/menu"  onClick={handleClick}>Menu</Link></li>
              <li><Link className='footer-link' to="/contact" onClick={handleClick} >Contact</Link></li>
            </ul>
          </div>

       
          <div className="col-md-4 mb-3">
            <h5>📞 Contact</h5>
            <p>📧 Email: pihu@hotel.com</p>
            <p>📱 Phone: +91 98765 43210</p>
            <p>📍 Ahmedabad, India.</p>
          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 <span className='text-warning fw-bold'>My Restaurant</span>. All Rights Reserved.
        </p>

      </div>
    </footer>
      
    </div>
  )
}

export default Footer
