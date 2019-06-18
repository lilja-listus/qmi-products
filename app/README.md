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
