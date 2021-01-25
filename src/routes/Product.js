const express = require('express');
const Product = express.Router();

const CreateProductController = require('../controllers/Product/createProduct');
const FindAllProductController = require('../controllers/Product/FindAll');
const FindOneProductController = require('../controllers/Product/FindOne');
const DeleteProductController = require('../controllers/Product/Delete');
const UpdateNameAndValueController = require('../controllers/Product/update');
const UpdateFileController = require('../controllers/Product/updateFile');
const FilterProductController = require('../controllers/Product/filterProduct')

const multer = require('multer');
const multerConfig = require('../middleware/multer');
const Authorization = require('../middleware/authorization');

Product.post("/product/:user_id", Authorization, multer(multerConfig).single("file"), CreateProductController);
Product.get("/product", Authorization, FindAllProductController);
Product.get("/product/:id", Authorization, FindOneProductController);
Product.put("/product/:id", Authorization, UpdateNameAndValueController);
Product.patch("/product/:id", Authorization, multer(multerConfig).single("file"), UpdateFileController);
Product.delete("/product/:id", Authorization, DeleteProductController);

Product.get("/filter", FilterProductController);

module.exports = Product;