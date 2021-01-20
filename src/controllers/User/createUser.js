const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

async function CreateUser(req, res) {
	const { name, email, password } = req.body;

	if (name == undefined || email == undefined || password == undefined) {
		res.status(400).send({
			Message: "Bad request"
		})
	}	


	var emailExists = await User.findOne({ where: {email: email} });

	if (emailExists) {
		res.status(406).send({
			Message: "User already exists"
		})	
	}else{
		var hash = await bcrypt.hash(password, 10);
		var user = await User.create({ name, email, password: hash });

		res.status(201).send({
			Message: "User created with sucess"
		})
	}

}

module.exports = CreateUser;