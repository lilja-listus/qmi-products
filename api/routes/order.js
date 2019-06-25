const express = require("express");
const router = express.Router();
const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { create } = require("../controllers/order");

router.post("/oder/create/:userId", requireSignin, isAuth, create);

router.param("userId", userById);

module.exports = router;
