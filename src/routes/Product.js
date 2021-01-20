const express = require('express');
const Product = express.Router();

const CreateProductController = require('../controllers/Product/createProduct');
const FindAllProductController = require('../controllers/Product/FindAll');
const FindOneProductController = require('../controllers/Product/FindOne');
const DeleteProductController = require('../controllers/Product/Delete');
const UpdateNameAndValueController = require('../controllers/Product/update');
const UpdateFileController = require('../controllers/Product/updateFile');

const multer = require('multer');
const multerConfig = require('../middleware/multer');

Product.post("/product/:user_id", multer(multerConfig).single("file"), CreateProductController);
Product.get("/product", FindAllProductController);
Product.get("/product/:id", FindOneProductController);
Product.put("/product/:id", UpdateNameAndValueController);
Product.patch("/product/:id", multer(multerConfig).single("file"), UpdateFileController);
Product.delete("/product/:id", DeleteProductController);


module.exports = Product;