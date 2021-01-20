const express = require('express');
const User = express.Router();

const CreateUserController = require('../controllers/User/createUser');
const LoginController = require('../controllers/User/login');

User.post("/user", CreateUserController);
User.post("/login", LoginController);

module.exports = User;