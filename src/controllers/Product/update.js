const express = require('express');
const Product = require('../../models/Product');

async function UpdateProduct(req, res) {
	var { id } = req.params;
	var { name, value } = req.body;

	if (id == undefined || name == undefined || value == undefined) {
		res.status(400).send({
			Message: "Bad request"
		})
	}

	try{
		var updateProduct = await Product.update({name, value}, {where: {id:id}});
		
		if (updateProduct) {
			res.status(200).send({
				Message: "Product updated with sucess"
			})
		}else{
			res.status(404).send({
				Message: "Not found"
			})
		}
	}catch(error){
		res.status(500).send({
			Message: error
		})
	}
}

module.exports = UpdateProduct;

