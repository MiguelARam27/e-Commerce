import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router();

//get all products
//public acess
//GET /api/products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

//get one single product by id
//public acess
//GET /api/products/:id
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'product not found' });
    }
  })
);

export default router;
