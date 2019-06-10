# Description

This is an online store for QMI products.

# Frameworks and Libraries

I am using Node.js together with Express for building my server.
For the workflow I am using nodemon, which restarts server while changes in the development.
Morgan for the routes and it shows info like `POST /api/signup 400 123.790 ms - 177`
Body-parser to get data from client side. cookie-parser for cookies.
Express validator.
express-jwt for authorization check
jsonwebtoken to generate token
Formidable to work with images.
Lodash.
Cors to enable middleware. To handle requests of different origin.

# Database

As a database I am using a cluster on mongoDB.Atlas. To communicate with mongo DB I use mongoose.

## Passwords

Crypto is a node.js module to hash password:
`crypto.createHmac('ssha1', this.salt)`
`.update(password)`
`.digest('hex')`

# Functionality

Only admin can create new category and he can access data of other users.
The routes are protected by middleware that checks whether the user is signed in, authorized and whether is admin for specific routes.
