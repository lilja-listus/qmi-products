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

`yarn add braintree-web-drop-in-react`

Use braintree for payments.

Package `compression`
react app is served from Build directory

Configure nginx server:

add in /etc/nginx/conf.d default.conf

```
server{

location /api {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade
        }

location /{
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
}
}
```

Don't forget to reboot the server `server reboot nginx`

To populate the state in the init() function set values:

````
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category._id,
          shipping: data.shipping,
          quantity: data.quantity,

          formData: new FormData()
        });
        ```
````
