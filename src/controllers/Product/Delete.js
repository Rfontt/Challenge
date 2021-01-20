const express = require('express');
const Product = require('../../models/Product');

async function DeleteProduct(req, res) {
	var { id } = req.params;

	if (id == undefined) {
		res.status(400).send({
			Message: "Bad request"
		})
	}

	var deleteProduct = await Product.destroy({ where: { id: id } });

	if (deleteProduct) {
		res.status(200).send({
			Message: "Product deleted with sucess"
		})
	}else{
		res.status(404).send({
			Message: "Not found"
		})
	}
}

module.exports = DeleteProduct;

