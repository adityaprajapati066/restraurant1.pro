import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = async () => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      navigate("/login");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <input
        className="form-control mb-2"
        name="name"
        value={user.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="email"
        value={user.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <button className="btn btn-success" onClick={register}>
        Register
      </button>
    </div>
  );
};

export default Register;
