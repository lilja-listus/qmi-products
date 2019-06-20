# Documentation about the frontend

The frontend if build with React.js by the command `npx create-react-app qmi-products`.

After cleaning it from the unnecessary out-of-the-box tools configured with the needed functionality.

## Used

State hooks.

# signout

- clear the local storage from jwt
- make request to backend
- redirect to homepage

query-string package for making queries.

```
  const query = queryString.stringify(params);

  return fetch(`${API}/products/search?{query}`, {
    method: "GET"
  })
```

Library moment for date.

```
          <p className="black-8">Added on {moment(product.createdAt).fromNow()}</p>

```

It creates output like `Added on 7 days ago`

# React hooks

```
 useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

```

we need it when the component mounts ->

it runs when it is loaded for the first time or changes

we use `[props]` for whenever the props change we want to use effect, reload

# Array

```
cart = Array.from(new Set(cart.map(p => p._id)));
```

`new Set ()` removes the duplicates
