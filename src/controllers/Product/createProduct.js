const express = require('express');
const Product = require('../../models/Product');

async function CreateProduct(req, res) {
  var { user_id } = req.params;
  var { name, value } = req.body;
  var { filename } = req.file;
  var url = `http://localhost:8080/file/${filename}`;
	
  if (name == undefined || value == undefined || filename == undefined || user_id == undefined) {
    res.status(400).send({
      Message: "Fields undefined"
    })
  }

  var datasProduct = await Product.create({ user_id, name, value, image_url: url });

  if (datasProduct) {
  	res.status(201).send({
           Message: "Created with sucess"
    })	
  }else{
  	res.status(500).send({
           Message: "Error"
    })
  }
}

module.exports = CreateProduct;
