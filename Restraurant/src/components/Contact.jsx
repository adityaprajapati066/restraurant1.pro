import React from 'react'
import { useState } from 'react';
import { data } from 'react-router-dom';
const Contact = () => {
     const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

async function handleSubmit(e) {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.log(err);
  }
}async function handleSubmit(e) {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.log(err);
  }
}
  return (
    <div>
       <section className="container my-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">

          <form onSubmit={handleSubmit} className="card p-4 shadow">

           
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control mb-3"
              value={formData.name}
              onChange={handleChange}
            />

            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control mb-3"
              value={formData.email}
              onChange={handleChange}
            />

          
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-control mb-3"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button className="btn btn-success w-100">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
