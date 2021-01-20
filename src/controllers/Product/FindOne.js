const express = require('express');
const Product = require('../../models/Product');

async function FidOneProduct(req, res) {
	var { id } = req.params;

	if (id == undefined) {
		res.status(400).send({
			Message: "Bad request"
		})
	}

	const product = await Product.findByPk(id, {
		include: { 
			association: 'user',
			attributes: ['name', 'email'],
		}
	});

	if (product) {
		res.status(200).send({
			Product: product,
		})
	}else{
		res.status(404).send({
			Message: "not found"
		})
	}

}

module.exports = FidOneProduct;

