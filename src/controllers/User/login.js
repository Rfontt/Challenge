const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

async function Login(req, res) {
	var { email, password } = req.body;

	if (email == undefined || password == undefined) {
		res.status(400).send({
			Message: "Bad request"
		})
	}

	var emailExists = await User.findOne({ where: { email: email } });

	if (emailExists) {
		var passwordExists = await bcrypt.compare(password, emailExists.password);
		if (passwordExists) {
			var tokengenerate = jwt.sign({ email: emailExists.email }, process.env.JWT_KEY);
			var email = emailExists.email;
			var name = emailExists.name;

			res.status(200).send({
				token: tokengenerate,
				email: email,
				name: name
			})

		}else{
			res.status(406).send({
				Message: "Incorret password"
			})
		}
	}else{
		res.status(404).send({
			Message: "Email not exists"
		})
	}
}

module.exports = Login;
