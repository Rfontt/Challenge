const express = require('express');
const Product = require('../../models/Product');

async function filterProduct(req, res) {
	var { value } = req.query;
	var findAll = await Product.findAll({where: { value: value }});

	if (findAll) {
		res.status(200).send({
			Products: findAll
		})
	}else{
		res.status(404).send({
			Message: "Not found"
		})
	}
	
}

module.exports = filterProduct;

