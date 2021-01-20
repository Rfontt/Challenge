const express = require('express');
const Product = require('../../models/Product');

async function findAllProduct(req, res) {
	var findAll = await Product.findAll();

	if (findAll) {
		res.status(200).send({
			findAll: findAll
		})
	}else{
		res.status(404).send({
			Message: "Not found"
		})
	}
}

module.exports = findAllProduct;

