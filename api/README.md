# Description

Backend for the store.

# Frameworks and Libraries

I am using Node.js together with Express for building my server.

- For the workflow I am using nodemon, which restarts server while changes in the development.

- On the prod I use pm2 library that keeps server running (`pm2 start app.js`);

- Morgan for the routes and it shows info like `POST /api/signup 400 123.790 ms - 177`

- Body-parser to get data from client side.

- Cookie-parser for cookies.

- Express validator.

- express-jwt for authorization check

- jsonwebtoken to generate token

```
//generate a signed token with user id and secret
const token = jwt.sign({ \_id: user.\_id }, process.env.JWT_SECRET);
```

- Formidable to work with images.

- Lodash.

- Cors to enable middleware. To handle requests of different origin.

# Database

As a database I am using a cluster on mongoDB.Atlas. To communicate with mongo DB I use mongoose.

## Passwords

Crypto is a node.js module to hash password:

```
crypto.createHmac('ssha1', this.salt)
      .update(password)
      .digest('hex')
```

# Functionality

Only admin can create new category and he can access data of other users.
The routes are protected by middleware, that check whether the user is signed in, authorized and whether is admin for specific routes.

I use Braintree paying system for payments.

```
//charge
let newTransation = gateway.transaction.sale(
{
amount: amountFromTheClient,
paymentMethodNonce: nonceFromTheClient,
options: {
submitForSettlement: true
}
},
(error, result) => {
if (error) {
res.status(500).json(error);
} else {
res.json(result);
}
}
);

```

# Communication with the client. Examples.

The client side communicates with api

## verification

```
   //return response with user and token to frontend client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
```

## send values

```
exports.getStatusValues = (req, res) => {
res.json(Order.schema.path("status").enumValues); // will be able to send enum values to the front
};
```

## find product

```
Product.find()
.select("-photo") // we want to deselect it for this find
.populate("category")
.sort([[sortBy, order]]) //how we want to sort the data
.limit(limit)
.exec((err, products) => {
if (err) {
return res.status(400).json({
error: "Products not found"
});
}
res.json(products);
});

exports.listSearch = (req, res) => {
//create query object to search value and category value
const query = {};

//asgign search value to query.name

if (req.query.search) {
query.name = { $regex: req.query.search, $options: "i" };
//assigb categort value to query category
if (req.query.category && req.query.category != "All") {
query.category = req.query.category;
}
//find the product based on query object

    Product.find(query, (err, products) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json(products);
    }).select("-photo");

}
};
```
