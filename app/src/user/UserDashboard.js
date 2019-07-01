import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const {
    user: { _id, name, email, role }
  } = isAuthenticated();

  console.log(_id);

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li class="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li class="list-group-item">
            <Link className="nav-link" to={`/profile/${_id}`}>
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
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

  const purchaseHistory = () => {
    return (
      <div className="care mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li class="list-group-item">history</li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`Good day ${name}!`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3"> {userLinks()} </div>
        <div className="col-9">
          {userInfo()} {purchaseHistory()}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
