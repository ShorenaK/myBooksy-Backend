const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User")
const { createUserToken, requireToken } = require("../middleware/auth");


router.get('/user/:id', require )






module.exports = router;