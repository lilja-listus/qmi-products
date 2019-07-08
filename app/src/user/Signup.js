import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
    phone: "",
    error: "",
    success: false
  });

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const {
    name,
    email,
    password,
    passwordRepeat,
    success,
    phone,
    error
  } = values;

  const clickSubmit = event => {
    event.preventDefault(); //so that browser is not reloaded when the button is clicked.
    setValues({ ...values, error: false });
    signup({ name, email, password, phone }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          passwordRepeat: "",
          phone: "",
          error: "",
          success: true
        });
      }
    });
  };

  const passwordsDontMatch = () => (
    <div className="alert alert-info">Passwords don't match</div>
  );

  const singUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Phone</label>
        <input
          onChange={handleChange("phone")}
          type="phone"
          className="form-control"
          value={phone}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Repeat Password</label>
        <input
          onChange={handleChange("passwordRepeat")}
          type="password"
          className="form-control"
          value={passwordRepeat}
        />
      </div>
      {passwordRepeat !== "" && password !== passwordRepeat
        ? passwordsDontMatch()
        : ""}

      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );

  return (
    <Layout
      title="Signup"
      description="Sign up to QMI web shop"
      className="container col-md-8 offset-md-2"
    >
      {showSuccess()}
      {showError()}
      {singUpForm()}
      {/* {passwordsDontMatch()} */}
    </Layout>
  );
};

export default Signup;
