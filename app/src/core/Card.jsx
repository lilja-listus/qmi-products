import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import { norwegian } from "../text";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <Button variant="contained" className="default">
            {norwegian.viewProduct}
          </Button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true);
    });
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <Button
          variant="contained"
          color="primary"
          className="primary"
          onClick={addToCart}
          // className="btn btn-outline-warning see-product"
        >
          {norwegian.addToCart}
        </Button>
      )
    );
  };

  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <Button
          variant="contained"
          color="secondary"
          className="secondary"
          onClick={() => removeItem(product._id)}
        >
          {norwegian.removeProduct}
        </Button>
      )
    );
  };

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">
        {norwegian.inStock}
      </span>
    ) : (
      <span className="badge badge-primary badge-pill">
        {norwegian.outOfStock}
      </span>
    );
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {norwegian.adjustQuantity}
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };

  const handleChange = productId => event => {
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  return (
    <div className="card">
      <div className="card-header name">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="product" />
        <p className="lead mt-2">{product.description.substring(0, 100)}</p>
        <Grid item xs={3}>
          <Paper className="grid">{product.price} NOK</Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className="grid">
            Category: {product.category && product.category.name}
          </Paper>
        </Grid>

        {showStock(product.quantity)}
        <br />
        <div className="buttons">
          {showViewButton(showViewProductButton)}

          {showAddToCart(showAddToCartButton)}
          {showRemoveButton(showRemoveProductButton)}
        </div>

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
};

export default Card;
