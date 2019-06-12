import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li class="list-group-item">
            <Link className="nav-link" to="/create/category">
              Create Category
            </Link>
          </li>

          <li class="list-group-item">
            <Link className="nav-link" to="/create/product">
              Create Product
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Admin Information</h3>
        <ul className="list-group">
          <li class="list-group-item">{name}</li>
          <li class="list-group-item">{email}</li>
          <li class="list-group-item">
            {role === 1 ? "Admin" : "Registered user"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`Good day ${name}!`}
      className="container"
    >
      <div className="row">
        <div className="col-3"> {adminLinks()} </div>
        <div className="col-9">{adminInfo()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
