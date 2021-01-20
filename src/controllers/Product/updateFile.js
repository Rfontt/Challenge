const express = require('express');
const Product = require('../../models/Product');

async function updateFile(req, res) {
  var { id } = req.params;
  var { filename } = req.file;
  var url = `http://localhost:8080/file/${filename}`;

	if (filename == undefined || id == undefined) {
	    res.status(400).send({
	      Message: "Fields undefined"
	    })
  	}

  var file = await Product.update({ image_url: url }, {where: {id:id}});

  if (file) {
  	res.status(200).send({
      Message: "Updated with sucess"
    })	
  }else{
  	res.status(500).send({
      Message: "Error"
    })
  }
}

module.exports = updateFile;
