import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";
import { read, update, updateUser } from "./apiUser";
import { norwegian } from "../text";

const Profile = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    error: false,
    success: false
  });

  const { token } = isAuthenticated();

  const { name, email, password, error, success, phone } = values;

  const init = userId => {
    read(userId, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({
          ...values,
          name: data.name,
          email: data.email,
          phone: data.phone
        });
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const clickSubmit = e => {
    e.preventDefault();
    update(match.params.userId, token, { name, email, password, phone }).then(
      data => {
        if (data.error) {
          console.log(data.error);
        } else {
          updateUser(data, () => {
            setValues({
              ...values,
              name: data.name,
              email: data.email,
              phone: data.phone,
              success: true
            });
          });
        }
      }
    );
  };

  const redirectUser = success => {
    if (success) {
      return <Redirect to="/cart" />;
    }
  };

  const profileUpdate = (name, email, password, phone) => (
    <form>
      <div className="form-group">
        <label className="text-muted">{norwegian.name}</label>
        <input
          type="text"
          onChange={handleChange("name")}
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">{norwegian.email}</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">{norwegian.password}</label>
        <input
          type="password"
          onChange={handleChange("password")}
          className="form-control"
          value={password}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">{norwegian.phone}</label>
        <input
          type="phone"
          onChange={handleChange("phone")}
          className="form-control"
          value={phone}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        {norwegian.submit}
      </button>
    </form>
  );

  return (
    <Layout
      title="Profile"
      description="Update your profile"
      className="container-fluid"
    >
      {" "}
      <h2 className="mb-4">{norwegian.profileUpdate}</h2>
      {profileUpdate(name, email, password, phone)}
      {redirectUser(success)}
    </Layout>
  );
};

export default Profile;
