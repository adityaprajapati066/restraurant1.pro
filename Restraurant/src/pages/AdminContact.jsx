import React from "react";
import { Link } from "react-router-dom";

const AdminContact = () => {
  return (
    <div className="container mt-3 animate__animated animate__fadeIn">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="py-5 px-5 text-success">📞 Contact Admin</h1>
        <Link to="/myorders">
          <button className="btn btn-success rounded-pill px-4 shadow">
            Order List
          </button>
        </Link>
      </div>
      <hr />
      <div className="mt-15 card shadow-lg border-0 rounded-4 p-4">
        <div className="h-20 flex justify-between py-4">
          <p><strong>👤 Name :</strong> Jack Dempsey</p>

          <p><strong>📧 Email :</strong> jackrest@gmail.com</p>

          <p><strong>📱 Phone :</strong> 91023 44873</p>
        </div>
      </div>

      <div className="text-center mt-3">
        <a
          href="tel:9102344873"
          className="btn btn-outline-success rounded-pill px-4 me-3"
        >
          Call Admin
        </a>

        <a
          href="mailto:jackrest@gmail.com"
          className="btn btn-outline-dark rounded-pill px-4"
        >
          ✉ Email Admin
        </a>
      </div>
    </div>
  );
};

export default AdminContact;
