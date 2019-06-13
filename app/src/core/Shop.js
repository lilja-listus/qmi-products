import React, { useState, useEffect } from "react";
import Layout from "./Layout";
// import Card from "./Card";
import { getCategories } from "./apiCore";

const Shop = () => {
  const [categories, setCategories] = useState("");
  const [error, setError] = useState(false);

  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  //we need it when the component mounts ->
  useEffect(() => {
    init();
  }, []);

  return (
    <Layout
      title="Shop"
      description="Search and find stuff of your choice"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">{JSON.stringify(categories)}</div>
        <div className="col-8">right</div>
      </div>
    </Layout>
  );
};

export default Shop;
