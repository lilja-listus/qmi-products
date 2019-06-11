import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";

const Dashboard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();

  return (
    <Layout
      title="Dashboard"
      description="User Dashboard"
      className="container"
    >
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
      <div className="care mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li class="list-group-item">history</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Dashboard;
