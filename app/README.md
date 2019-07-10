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

//make request to api to create category

```
createCategory(user.\_id, token, { name }).then(data => {
if (data.error) {
setError(true);
} else {
setError("");
setSuccess(true);
}
```

`//tslint:disable`

```
//function that connects to backend
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
```

// populate the state
setValues({
...values,
name: data.name,
description: data.description,
price: data.price,
category: data.category.\_id,
shipping: data.shipping,
quantity: data.quantity,

          formData: new FormData()
        });

//local storage is a property of the window object
if (typeof window !== "undefined") {
localStorage.setItem("jwt", JSON.stringify(data)); // jwt is the key, second argument is the data we save under that key
next();
}

//

localStorage.removeItem("jwt"); // we remove jwt if it exists

//

if (localStorage.getItem("jwt")) {
return JSON.parse(localStorage.getItem("jwt")); //to make sure it is in JSON format we use parse
} else {
return false;
}

//
const handleToggle = c => () => {
const currentCategoryId = checked.indexOf(c); // return the first index or -1
const newCheckedCategoryId = [...checked]; // will return everything that is in the state
//if currently checked was not in checked state > push
//else pull/take off
if (currentCategoryId === -1) {
newCheckedCategoryId.push(c);
} else {
newCheckedCategoryId.splice(currentCategoryId, 1);
}

//
return categories.map((
c,
i //key={i} - so that each of them have unique index
)

///
const buy = () => {
setData({ loading: true });
//send the nonce to your server
// nonce = data.instance.requestPaymentMethod()

    let nonce;

    let getNonce = data.instance

//
const searchSubmit = e => {
e.preventDefault(); // so that page is not reloading
//request to the backend to fetch the product
searchData();
};

///
//the method that loads the categories
const init = () => {
getCategories().then(data => {
if (data.error) {
setError(data.error);
} else {
setCategories(data);
}
});
};
