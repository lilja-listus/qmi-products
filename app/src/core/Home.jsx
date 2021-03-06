import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import { norwegian } from "../text";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("ceratedAt").then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title="Home Page"
      description="Qmi Products Web Shop"
      className="container-fluid"
    >
      <Search />
      <div className="row">
        <h2 className="mb-4">{norwegian.newArrivals}</h2>

        <div className="products">
          {productsByArrival.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <h2 className="mb-4">{norwegian.bestsellers}</h2>
        <div className="products">
          {productsBySell.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
